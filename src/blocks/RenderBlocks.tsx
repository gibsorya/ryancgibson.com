import React, { Fragment } from "react";
import type { Page } from "@/payload-types";

import { HeroBlock } from "./HeroBlock/Component";
import { CardDeckBlock } from "./CardDeckBlock/Component"
import { CollectionBlock } from "./CollectionBlock/Component";
import { ContactBlock } from "./ContactBlock/Component";

const blockComponents = {
  hero: HeroBlock,
  card_deck: CardDeckBlock,
  collection: CollectionBlock,
  contact: ContactBlock,
};

export const RenderBlocks: React.FC<{ blocks: Page["layout"] }> = (props) => {
  const { blocks } = props;

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;

  const getBlockPaddingClass = (block: NonNullable<Page["layout"]>[number]) => {
    if ('padding' in block && block.padding) {
      console.log(block.padding)
      switch(block.padding) {
        case 'small':
          return 'px-4'
        case 'medium':
          return 'px-8'
        case 'large':
          return 'px-16'
        case 'none':
          return 'px-0'
        default:
          return 'px-4'
      }
    }
    return 'px-4' // Default padding if no padding is specified
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
                <section className={`mb-4 ${getBlockPaddingClass(block)} section-${blockType}`} key={index}>
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
