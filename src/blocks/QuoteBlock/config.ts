import type { Block } from "payload";

export const QuoteBlock: Block = {
  slug: "quote",
  interfaceName: "QuoteBlock",
  fields: [
    {
      name: "quote",
      type: "textarea",
      label: "Quote",
    },
    {
      name: "reference",
      type: "text",
    },
  ],
};
