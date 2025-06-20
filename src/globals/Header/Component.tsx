import { HeaderClient } from "./Component.client";
import { getCachedGlobal } from "@/utilities/getGlobals";
import React from "react";

import type { Header, Social } from "@/payload-types";

export async function Header() {
    const [headerData, socialsData]: [Header, Social] = await Promise.all([
        getCachedGlobal("header", 1)(),
        getCachedGlobal("socials", 1)()
    ]);

    return <HeaderClient data={headerData} socials={socialsData} />;
}
