import type { Block } from "payload";

export const CodeBlock: Block = {
  slug: "code",
  interfaceName: "CodeBlock",
  fields: [
    {
      name: "language",
      type: "select",
      defaultValue: "typescript",
      options: [
        {
          label: "Typescript",
          value: "typescript",
        },
        {
          label: "Javascript",
          value: "javascript",
        },
        {
          label: "CSS",
          value: "css",
        },
        {
          label: "C++",
          value: "cpp",
        },
        {
          label: "Rust",
          value: "rust",
        },
        {
          label: "JSON",
          value: "json",
        },
        {
          label: "Ruby",
          value: "ruby",
        },
      ],
    },
    {
      name: "code",
      type: "code",
      label: false,
      required: true,
    },
  ],
};
