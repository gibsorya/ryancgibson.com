import React, { Fragment } from "react";
import type { Page } from "@/payload-types";

import { HeroBlock } from "./HeroBlock/Component";
import { CardDeckBlock } from "./CardDeckBlock/Component"
import { ContactBlock } from "./ContactBlock/Component";
import { ArticleListBlock } from "./ArticleListBlock/Component";

const blockComponents = {
  hero: HeroBlock,
  card_deck: CardDeckBlock,
  contact: ContactBlock,
  article_list: ArticleListBlock,
};

export const RenderBlocks: React.FC<{ blocks: Page["layout"], enableBorders: Page["enableBorders"] }> = (props) => {
  const { blocks, enableBorders } = props;

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;

  const getBlockPaddingClass = (block: NonNullable<Page["layout"]>[number]) => {
    if ('padding' in block && block.padding) {
      switch(block.padding) {
        case 'small':
          return 'p-2 md:p-4'
        case 'medium':
          return 'p-4 md:p-8'
        case 'large':
          return 'p-8 md:p-16'
        case 'none':
          return 'p-0'
        default:
          return 'p-2 md:p-4'
      }
    }
    return 'p-2 md:p-4' // Default padding if no padding is specified
  }

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block;

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType];

            if (Block) {
              return (
                <section className={`${getBlockPaddingClass(block)} section-${blockType} ${enableBorders && "borders"}`} key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </section>
              );
            }
          }
          return null;
        })}
      </Fragment>
    );
  }

  return null;
};
