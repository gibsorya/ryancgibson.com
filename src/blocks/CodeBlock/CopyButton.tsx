"use client";
import { CopyIcon } from "@payloadcms/ui/icons/Copy";
import { useState } from "react";

export function CopyButton({ code }: { code: string }) {
    const [text, setText] = useState("");

    function updateCopyStatus() {
        setText(() => "Copied!");
        setTimeout(() => {
            setText(() => "");
        }, 1000);
    }

    return (
            <button
                className="flex gap-1 copy-button"
                onClick={async () => {
                    await navigator.clipboard.writeText(code);
                    updateCopyStatus();
                }}
            >
                <p>{text}</p>
                <CopyIcon />
            </button>
    );
}
