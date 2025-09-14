import type { CollectionConfig } from "payload";

import {
    BlocksFeature,
    FixedToolbarFeature,
    HeadingFeature,
    HorizontalRuleFeature,
    InlineToolbarFeature,
    lexicalEditor,
} from "@payloadcms/richtext-lexical";

import {
    MetaDescriptionField,
    MetaImageField,
    MetaTitleField,
    OverviewField,
    PreviewField,
} from "@payloadcms/plugin-seo/fields";

import { authenticatedOrPublished } from "@/access/authenticatedOrPublished";
import { slugField } from "@/fields/slug";

export const Articles: CollectionConfig = {
    slug: "articles",
    labels: {
        plural: 'Articles',
        singular: 'Article',
    },
    access: {
        read: authenticatedOrPublished,
    },
    admin: { useAsTitle: "title", group: 'Pages' },
    fields: [
        {
            name: "title",
            type: "text",
        },
        ...slugField(),
        {
            type: "tabs",
            tabs: [
                {
                    label: "Content",
                    fields: [
                        {
                            name: "heroImage",
                            type: "upload",
                            relationTo: "media",
                        },
                        {
                            name: "content",
                            type: "richText",
                            editor: lexicalEditor({
                                features: ({ rootFeatures }) => {
                                    return [
                                        ...rootFeatures,
                                        HeadingFeature({
                                            enabledHeadingSizes: ["h1", "h2", "h3", "h4"],
                                        }),
                                        // BlocksFeature
                                        FixedToolbarFeature(),
                                        InlineToolbarFeature(),
                                        HorizontalRuleFeature(),
                                    ];
                                },
                            }),
                        },
                    ],
                },

                {
                    name: "meta",
                    label: "SEO",
                    fields: [
                        OverviewField({
                            titlePath: "meta.title",
                            descriptionPath: "meta.description",
                            imagePath: "meta.image",
                        }),
                        MetaTitleField({
                            hasGenerateFn: true,
                        }),
                        MetaImageField({
                            relationTo: "media",
                        }),

                        MetaDescriptionField({}),
                        PreviewField({
                            // if the `generateUrl` function is configured
                            hasGenerateFn: true,

                            // field paths to match the target field for data
                            titlePath: "meta.title",
                            descriptionPath: "meta.description",
                        }),
                    ],
                },
            ],
        },
    ],
};
