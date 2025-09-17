import type { Metadata } from "next";
import { generateMeta } from "@/utilities/generateMeta";

import configPromise from "@payload-config";
import { getPayload } from "payload";

import React, { cache } from "react";

export default async function Page() {
    try {
        const payload = await getPayload({ config: configPromise });
        const articles = await payload.find({
            collection: "articles",
            depth: 1,
            draft: false,
            limit: 1000,
            overrideAccess: false,
            select: {
                title: true,
                slug: true,
                meta: true,
            },
        });

        return <div></div>;
    } catch (error) {
        console.warn("Error generating static params:", error);
        return [];
    }
}
