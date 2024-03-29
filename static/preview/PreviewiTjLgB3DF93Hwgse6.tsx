/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewiTjLgB3DF93Hwgse6(){
  return (<Tooltip
  id="preview__iTjLgB3DF93Hwgse6"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>&#x3C;Image&#x3E;</code></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="next-12"><span>(&#x20;</span><em>Next&#x20;12&#x20;</em><span>)</span></Link><span>&#x20;</span><Link to="fc"><span>FC</span></Link><span>&#x20;extends&#x20;</span><Link to="img"><code>&#x3C;img&#x3E;</code></Link><span>&#x20;with&#x20;</span><Link to="prefetch"><span>Prefetch</span></Link><span>/</span><Link to="lazy-loading"><code>Lazy Load</code></Link><span>&#x20;&#x26;&#x20;&#x2728;img&#x20;optimization&#x20;to&#x20;burn&#x20;your&#x20;free&#x20;quota</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 3 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>add&#x20;</span><span ><code>unoptimized</code></span><span>&#x20;attribute&#x20;to&#x20;ANY&#x20;FC&#x20;with&#x20;</span><span ><code>&#x3C;Image&#x3E;</code></span><span>&#x20;to&#x20;serve&#x20;deoptimized&#x20;Image&#x20;FC&#x20;compat&#x20;for&#x20;storybook</span><CodeBlock language="tsx">{`// .storybook/preview.js\nimport * as NextImage from "next/image";\n\nconst OriginalNextImage = NextImage.default;\n\nObject.defineProperty(NextImage, "default", {\n  configurable: true,\n  value: (props) => <OriginalNextImage {...props} unoptimized />,\n});`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><code>unoptimized</code><span>&nbsp;↔&nbsp;</span><Link to="props"><code>`prop`</code></Link><span>&#x20;to&#x20;set&#x20;</span><Link to="image"><code>&#x3C;Image&#x3E;</code></Link><span>&#x20;to&#x20;serve&#x20;unoptimized&#x20;Image&#x20;Element&#x20;(for&#x20;compat&#x20;with&#x20;</span><Link to="storybook"><code>storybook</code></Link><span>)</span></cite></li><li><cite className="react-tooltip__ref-list"><span>extra&#x20;config&#x20;to&#x20;setup&#x20;next.js&#x20;for&#x20;storybook&#x20;to&#x20;run&#x20;</span><span ><span>Page</span></span><span>&#x20;in&#x20;isolation&#x20;from&#x20;next&#x20;integrations&#x20;-&#x20;must&#x20;serve&#x20;next&#x20;public&#x20;dir&#x20;and&#x20;deoptimize&#x20;</span><span ><code>&#x3C;Image&#x3E;</code></span><span>&#x20;</span></cite></li></ol>
    
    </small></Tooltip>)
}