import React from "react";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { CardDeckBlock as CardDeckBlockProps } from "@/payload-types";
import { ProjectBlock } from "../ProjectBlock/Component";
import { CardBlock } from "../CardBlock/Component";
import "./styles.css";

export const CardDeckBlock: React.FC<CardDeckBlockProps> = (props) => {
    const { title, description, infoPosition, maxColumns, gap, cards, type } =
        props;

    const getGapClass = () => {
        switch (gap) {
            case "small":
                return "gap-2";
            case "medium":
                return "gap-4";
            case "large":
                return "gap-8";
            default:
                return "gap-4";
        }
    };

    // const getCardGridSpanClass = (gridSpan: string) => {
    //     return `col-start-auto col-span-${gridSpan}`
    // }

    // const getGridTemplateColumnsClass = () => {
    //     // grid-cols-[1fr_2.5rem_auto_2.5rem_1fr]
    //     switch (infoPosition) {
    //         case 'left':
    //             return 'grid-cols-[auto_1fr] lg:grid-cols-[1fr_1fr]'
    //         case 'right':
    //             return 'grid-cols-[repeat(var(--max-columns),1fr)_1fr]'
    //         case 'top':
    //         default:
    //             return 'grid-cols-[repeat(var(--max-columns),1fr)]'
    //     }
    // }

    const getInfoPositionClass = () => {
        switch (infoPosition) {
            case "left":
                return "flex-col md:flex-row";
            case "right":
                return "flex-col md:flex-row-reverse";
            case "top":
            default:
                return "flex-col";
        }
    };

    const getCardsGridLayoutClass = () => {
        switch (type) {
            case "cards":
                return "grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:max-w-10/12 mx-auto";
            case "projects":
                return "grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:max-w-10/12 mx-auto";
            case "full-width-cards":
                return "grid grid-cols-1 md:grid-cols-2";
            default:
                return "grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
        }
    };

    const gridStyle = {
        "--max-columns": maxColumns,
    } as React.CSSProperties;

    return (
        <div
            className={`card-deck-block flex ${getInfoPositionClass()} ${getGapClass()}`}
            style={gridStyle}
        >
            {(title || description) && <div
                className={`card-deck-info flex flex-col text-center gap-4 justify-center items-center`}
            >
                {title && <h2 className="text-2xl font-bold uppercase">{title}</h2>}
                {description && <RichText data={description} />}
            </div>}

            <div
                className={`${getCardsGridLayoutClass()} max-w-full`}
            >
                {cards?.map((card, i) => {
                    switch (card.blockType) {
                        case "project":
                            return <ProjectBlock {...card} key={i} />;
                        case "card":
                            return <CardBlock {...card} key={i} />;
                    }
                })}
            </div>
        </div>
    );
};
