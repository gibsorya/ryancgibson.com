import type { Block } from "payload";

export const ArticleList: Block = {
    slug: 'article_list',
    interfaceName: 'ArticleListBlock',
    fields: [
        {
            name: 'featuredArticle',
            type: 'relationship',
            relationTo: 'articles',
            label: 'Featured Blog Post'
        },
        {
            name: 'showImages',
            type: 'checkbox',
            label: 'Show images for blog posts?'
        }
    ]
}
