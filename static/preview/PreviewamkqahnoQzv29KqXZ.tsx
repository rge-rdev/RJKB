import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewamkqahnoQzv29KqXZ(){
  return (<Tooltip
  id="preview__amkqahnoQzv29KqXZ"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>unoptimized</code></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="/wiki/React/React-Definition/Component-Based-Architecture/Component/props"><code>`prop`</code></Link><span>&#x20;to&#x20;set&#x20;</span><Link to="/wiki/React/React-Stack/Nextjs/Next-Component/Image"><code>&#x3C;Image&#x3E;</code></Link><span>&#x20;to&#x20;serve&#x20;unoptimized&#x20;Image&#x20;Element&#x20;(for&#x20;compat&#x20;with&#x20;</span><Link to="/wiki/React/React-Stack/storybook"><code>storybook</code></Link><span>)</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 1 time</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>add&#x20;</span><Link to="/wiki/React/React-Stack/Nextjs/Next-Component/Image/unoptimized"><code>unoptimized</code></Link><span>&#x20;attribute&#x20;to&#x20;ANY&#x20;FC&#x20;with&#x20;</span><Link to="/wiki/React/React-Stack/Nextjs/Next-Component/Image"><code>&#x3C;Image&#x3E;</code></Link><span>&#x20;to&#x20;serve&#x20;deoptimized&#x20;Image&#x20;FC&#x20;compat&#x20;for&#x20;storybook</span><CodeBlock language="tsx">{`// .storybook/preview.js\nimport * as NextImage from "next/image";\n\nconst OriginalNextImage = NextImage.default;\n\nObject.defineProperty(NextImage, "default", {\n  configurable: true,\n  value: (props) => <OriginalNextImage {...props} unoptimized />,\n});`}</CodeBlock></cite></li></ol>
    
    </small></Tooltip>)
}