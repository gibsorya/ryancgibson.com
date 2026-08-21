import type {
    CollectionAfterChangeHook,
} from "payload";

import { revalidatePath, revalidateTag } from "next/cache";
import type { Article } from "@/payload-types";

export const revalidateArticle: CollectionAfterChangeHook<Article> = ({
    doc,
    previousDoc,
    req: { payload, context },
}) => {
    if (!context.disableRevalidate) {
        if (doc._status === "published") {
            const path = `/blog/${doc.slug}`;

            payload.logger.info(`Revalidating article at path: ${path}`);

            revalidatePath(path);
            revalidateTag("articles-sitemap");
        }
    }

    // If the article was previously published, we need to revalidate the old path
    if (previousDoc?._status === "published" && doc._status !== "published") {
        const oldPath = `/blog/${previousDoc.slug}`

        payload.logger.info(`Revalidating old article at path: ${oldPath}`)

        revalidatePath(oldPath)
        revalidateTag("articles-sitemap")
    }
};
