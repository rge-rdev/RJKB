import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function Preview5QT832ZhotfnFtrxA(){
  return (<Tooltip
  id="preview__5QT832ZhotfnFtrxA"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Top-Level&#x20;Await&#x20;for&#x20;Module</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span></span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 3 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><Link to="/wiki/JS/Library/Module/Loading-Module-Cycle/Asynchronous-Loading/Top-Level-Await-for-Module"><span>Top-Level&#x20;Await&#x20;for&#x20;Module</span></Link></cite></li><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><span ><span>Top-Level&#x20;Await&#x20;for&#x20;Module</span></span><span>&#x20;for&#x20;fallback&#x20;</span><span ><span>CDN</span></span><span>&#x20;</span><span ><span>URL</span></span><span>&#x20;</span><span ><span>Module&#x20;Specifier</span></span><span>&#x20;</span><CodeBlock language="tsx">{`let lodash;\ntry {\n  lodash = await import("https://primary.cdn.com/lodash")\n} catch {\n  lodash = await import("https://fallback.cdn.com/lodash")\n}`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><span ><span>Top-Level&#x20;Await&#x20;for&#x20;Module</span></span><span>&#x20;to&#x20;load&#x20;whichever&#x20;racing&#x20;(via&#x20;Promise.any)&#x20;resource&#x20;loads&#x20;fastest</span><CodeBlock language="tsx">{`const resource = await Promise.any([\n  .fetch("https://website1.com/first.txt")\n    .then(res => res.text()),\n  .fetch("https://website2.com/second.text")\n    .then(res => res.text())\n])`}</CodeBlock><span>&#x20;</span></cite></li></ol>
    
    </small></Tooltip>)
}