import React, { Suspense } from "react";
import type { ArticleListBlock as ArticleListBlockProps } from "@/payload-types";
import { getPayload } from "payload";
import configPromise from "@/payload.config";
import ArticleListClient from "./Component.client";
import { ArticleListLoading } from "./ArticleListLoadingSkeleton";

export type ArticleItem = {
    id: number;
    title?: string | null | undefined;
    slug?: string | null | undefined;
    author?: string | null | undefined;
    publishedAt?: string | null | undefined;
    meta?:
    | {
        title?: string | null | undefined;
        image?: number | unknown | null | undefined;
        description?: string | null | undefined;
    }
    | null
    | undefined;
};

export const ArticleListBlock: React.FC<ArticleListBlockProps> = async (
    props,
) => {
    const { featuredArticle, showImages } = props;

    let articles: ArticleItem[] = [];
    const payload = await getPayload({ config: configPromise });

    const fetchedArticles = await payload.find({
        collection: "articles",
        depth: 1,
        limit: 12,
        overrideAccess: false,
        select: {
            title: true,
            slug: true,
            meta: true,
            author: true,
            publishedAt: true,
        },
    });

    articles = fetchedArticles.docs;

    return (
        <div className="flex flex-col mt-16 gap-4 md:gap-8 justify-center m-auto w-full md:w-4/5">
            {featuredArticle && <div>Featured Project</div>}
            <Suspense key={'article-list'} fallback={<ArticleListLoading />} >
                <ArticleListClient articles={articles} showImages={showImages} />
            </Suspense>
        </div>
    );
};
