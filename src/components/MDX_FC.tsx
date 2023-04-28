/**
 * Copyright(c) Roger Jiang
 */

import ReactMarkdown from "react-markdown"
import { Prism } from "react-syntax-highlighter"
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism"
import remarkGfm from "remark-gfm"

export default function MDX_FC(children: string) {
  return (
    <ReactMarkdown
      children={children}
      remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "")
          return !inline && match ? (
            <Prism
              children={String(children).replace(/\n$/, "")}
              // style?: { [key: string]: React.CSSProperties } | undefined;
              //@ts-ignore
              style={dark}
              language={match[1]}
              PreTag="div"
              {...props}
            />
          ) : (
            <code
              className={className}
              {...props}
            >
              {children}
            </code>
          )
        },
      }}
    />
  )
}
