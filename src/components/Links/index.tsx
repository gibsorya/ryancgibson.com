import { cn } from "@/utilities/ui";
import Link from "next/link";
import React from "react";

import type { Page, Article } from "@/payload-types";

type CMSLinkType = {
    appearance?: "inline" | "link";
    children?: React.ReactNode;
    className?: string;
    label?: string | null;
    newTab?: boolean | null;
    reference?: {
        relationTo: "pages" | "posts";
        value: Page | Article | string | number;
    } | null;
    size?: null;
    type?: "custom" | "reference" | null;
    url?: string | null;
};

export const CMSLink: React.FC<CMSLinkType> = (props) => {
    const {
        type,
        appearance = "inline",
        children,
        className,
        label,
        newTab,
        reference,
        size: sizeFromProps,
        url,
    } = props;

    const href =
        type === "reference" &&
            typeof reference?.value === "object" &&
            reference.value.slug
            ? `${reference?.relationTo !== "pages" ? `/${reference?.relationTo}` : ""}/${reference.value.slug
            }`
            : url;

    if (!href) return null;

    const homeUrl = href === "/home" ? "/" : null

    const newTabProps = newTab
        ? { rel: "noopener noreferrer", target: "_blank" }
        : {};

    /* Ensure we don't break any styles set by richText */
    if (appearance === "inline") {
        return (
            <Link className={cn(className)} href={homeUrl || href || url || ""} {...newTabProps}>
                {label && label}
                {children && children}
            </Link>
        );
    }

    return (
        <button className={className}>
            <Link className={cn(className)} href={homeUrl || href || url || ""} {...newTabProps}>
                {label && label}
                {children && children}
            </Link>
        </button>
    );
};
