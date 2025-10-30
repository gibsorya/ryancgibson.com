import React from "react";

import type { CardBlock as CardBlockProps } from "@/payload-types";
import "./styles.css";

import RichText from "@/components/RichText";
import { hasText } from "@payloadcms/richtext-lexical/shared";

export const CardBlock: React.FC<CardBlockProps> = (props) => {
  const { title, description, background } = props;

  return (
    <div className="card-block-container h-full @container/card">
      <div className={`card-block aspect-auto h-full ${background ? background : 'dark'}-background`}>
        <div className="card-block-content flex flex-col gap-2 h-full justify-center items-center">
          {title && (
            <h2 className="card-block-title uppercase text-center text-2xl lg:text-5xl">
              {title}
            </h2>
          )}
          {hasText(description) && (
            <RichText
              data={description!}
              className="card-block-description text-base xl:text-xl"
            />
          )}
        </div>
      </div>
    </div>
  );
};
