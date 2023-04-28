import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewoigNHZq4f4ccihiXh(){
  return (<Tooltip
  id="preview__oigNHZq4f4ccihiXh"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>require()</code></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 3 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><code>module.exports</code><span>&nbsp;↔&nbsp;</span><span ><span>Object</span></span><span>&#x20;to&#x20;</span><span ><code>export</code></span><span>&#x20;from&#x20;</span><span ><span>CommonJS</span></span><span>,&#x20;</span><span ><code>require()</code></span><span>&#x20;to&#x20;import</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Find&#x20;</span><span ><code>require()</code></span><span>/</span><span ><code>import</code></span><span>/</span><span ><code>export</code></span><span>&#x20;statements</span></cite></li><li><cite className="react-tooltip__ref-list"><span>a&#x20;dumb&#x20;fix&#x20;to&#x20;allow&#x20;using&#x20;both&#x20;</span><span ><code>require()</code></span><span>&#x20;AND&#x20;</span><span ><code>import</code></span><span>&#x20;in&#x20;SAME&#x20;FILE</span><CodeBlock language="tsx">{`import { createRequire } from "module";\nconst require = createRequire(import.meta.url);`}</CodeBlock><span>&#x20;</span></cite></li></ol>
    
    </small></Tooltip>)
}