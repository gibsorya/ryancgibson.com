"use client";

import React from "react";

import "./styles.css";

import type { QuoteBlock as QuoteBlockProps } from "@/payload-types";

export const QuoteBlock: React.FC<QuoteBlockProps> = (props) => {
  const { reference, quote } = props;

  return (
    <blockquote>
      {quote}
      <span>{reference}</span>
    </blockquote>
  );
};
