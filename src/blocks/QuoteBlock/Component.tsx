"use client";

import React from "react";

import "./styles.css";

import type { QuoteBlock as QuoteBlockProps } from "@/payload-types";
import { hasText } from "@payloadcms/richtext-lexical/shared";
import RichText from "@/components/RichText";

export const QuoteBlock: React.FC<QuoteBlockProps> = (props) => {
  const { reference, quote } = props;

  return (
    <blockquote>
      {quote}
      <span>{reference}</span>
    </blockquote>
  );
};
