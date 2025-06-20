// import type { Metadata } from "next";

// import { PayloadRedirects } from "@/components/PayloadRedirects";
import configPromise from "@payload-config";
import { getPayload, type RequiredDataFromCollectionSlug } from "payload";
import { draftMode } from "next/headers";
import React, { cache } from "react";
// import { homeStatic } from "@/endpoints/seed/home-static";

// import { generateMeta } from "@/utilities/generateMeta";
import PageClient from "./page.client";
import { LivePreviewListener } from "@/components/LivePreviewListener";
import { RenderBlocks } from "@/blocks/RenderBlocks";

export async function generateStaticParams() {
  try {
    const payload = await getPayload({ config: configPromise });
    const pages = await payload.find({
      collection: "pages",
      draft: false,
      limit: 1000,
      overrideAccess: false,
      pagination: false,
      select: {
        slug: true,
      },
    });

    const params = pages.docs
      ?.filter((doc) => {
        return doc.slug !== "home";
      })
      .map(({ slug }) => {
        return { slug };
      });

    return params || [];
  } catch (error) {
    console.warn('Error generating static params:', error);
    return [];
  }
}

type Args = {
  params: Promise<{
    slug?: string;
  }>;
};

export default async function Page({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode();
  const { slug = "home" } = await paramsPromise;

  const page: RequiredDataFromCollectionSlug<"pages"> | null = await queryPageBySlug({
    slug,
  });

  // If page is null, return a simple fallback or throw an error
  if (!page) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
          <p className="text-gray-600">The requested page could not be found.</p>
        </div>
      </div>
    );
  }

  const { layout } = page;

  return (
    <>
      <PageClient />
      {/* Allows redirects for valid pages too */}
      {/* <PayloadRedirects disableNotFound url={url} /> */}

      {draft && <LivePreviewListener />}

      {/* <RenderHero {...hero} /> */}
      {layout && <RenderBlocks blocks={layout} />}
    </>
  );
}

// export async function generateMetadata({
//   params: paramsPromise,
// }: Args): Promise<Metadata> {
//   const { slug = "home" } = await paramsPromise;
//   const page = await queryPageBySlug({
//     slug,
//   });

//   return generateMeta({ doc: page });
// }

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  try {
    const { isEnabled: draft } = await draftMode();

    const payload = await getPayload({ config: configPromise });

    const result = await payload.find({
      collection: "pages",
      draft,
      limit: 1,
      pagination: false,
      overrideAccess: draft,
      where: {
        slug: {
          equals: slug,
        },
      },
    });

    return result.docs?.[0] || null;
  } catch (error) {
    console.warn('Error querying page by slug:', error);
    return null;
  }
});
