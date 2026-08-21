'use client'
import { Highlight, themes, Prism } from 'prism-react-renderer'
import React from 'react'
import { CopyButton } from './CopyButton'

type Props = {
  code: string
  language?: string
}

/* eslint-disable */
(typeof global !== "undefined" ? global : window).Prism = Prism
// @ts-ignore
await import("prismjs/components/prism-ruby")
// @ts-ignore
await import("prismjs/components/prism-css")
/* eslint-enable */

export const Code: React.FC<Props> = ({ code, language = '' }) => {
  if (!code) return null

  return (
    <Highlight prism={Prism} code={code} language={language} theme={themes.gruvboxMaterialDark}>
      {({ getLineProps, getTokenProps, tokens }) => (
        <pre className="code-block text-xs sm:text-base p-4 border-3 border-wenge-gray rounded overflow-x-auto">
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ className: 'table-row', line })}>
              <span className="table-cell select-none text-right text-white/25">{i + 1}</span>
              <span className="table-cell pl-4">
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </span>
            </div>
          ))}
          <CopyButton code={code} />
        </pre>
      )}
    </Highlight>
  )
}
