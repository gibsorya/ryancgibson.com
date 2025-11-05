import { Metadata } from "next";
import { generateMeta } from "@/utilities/generateMeta";

import configPromise from "@payload-config";
import { getPayload } from "payload";

import React, { cache } from "react";

import { hasText } from "@payloadcms/richtext-lexical/shared";

import PageClient from "./page.client";
import { draftMode } from "next/headers";
import RichText from "@/components/RichText";

export async function generateStaticParams() {
  try {
    const payload = await getPayload({ config: configPromise });
    const articles = await payload.find({
      collection: "articles",
      draft: false,
      limit: 1000,
      overrideAccess: false,
      pagination: false,
      select: {
        slug: true,
      },
    });

    const params = articles.docs.map(({ slug }) => {
      return { slug };
    });

    return params;
  } catch (error) {
    console.warn("Error generating static params:", error);
    return [];
  }
}

type Args = {
  params: Promise<{ slug?: string }>;
};

export default async function Page({ params: paramsPromise }: Args) {
  // const { isEnabled: draft } = await draftMode();
  const { slug = "" } = await paramsPromise;
  const article = await queryPostBySlug({ slug });

  if (!article) {
    return (
      <div className="flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
          <p className="text-gray-600">
            The requested article could not be found.
          </p>
        </div>
      </div>
    );
  }
    const options: Intl.DateTimeFormatOptions  = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(article.publishedAt!);
    const fullDate = date.toLocaleDateString("en-US", options);
  return (
    <div className="max-w-full flex flex-col justify-center items-center">
            <PageClient />
      <article className="max-w-192 p-6 pt-0">
        <h1 className="article-title text-left">{article.title}</h1>
        <div className="separator border-b my-4" />
        <div className="pb-4 article-info">{[fullDate, article.author!].join(' · ')}</div>
        {hasText(article.content) && (
          <RichText className="" data={article.content!} />
        )}
      </article>
    </div>
  );
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode();

  const payload = await getPayload({ config: configPromise });

  const result = await payload.find({
    collection: "articles",
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return result.docs?.[0] || null;
});

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)
  const post = await queryPostBySlug({ slug: decodedSlug })

  return generateMeta({ doc: post })
}
