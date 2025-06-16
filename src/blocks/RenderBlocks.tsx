import React, { Fragment } from "react";
import type { Page } from "@/payload-types";

import { HeroBlock } from "./HeroBlock/Component";
import { CardDeckBlock } from "./CardDeckBlock/Component"
import { CollectionBlock } from "./CollectionBlock/Component";

const blockComponents = {
  hero: HeroBlock,
  card_deck: CardDeckBlock,
  collection: CollectionBlock,
};

export const RenderBlocks: React.FC<{ blocks: Page["layout"] }> = (props) => {
  const { blocks } = props;

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block;

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType];

            if (Block) {
              return (
                <section className={`my-4 px-4 section-${blockType}`} key={index}>
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
