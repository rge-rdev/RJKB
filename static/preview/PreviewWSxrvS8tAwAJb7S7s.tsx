import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewWSxrvS8tAwAJb7S7s(){
  return (<Tooltip
  id="preview__WSxrvS8tAwAJb7S7s"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>_.chain(value)</code></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>return&#x20;</span><Link to="/wiki/JS/Library/lodash"><code>lodash</code></Link><span>&#x20;wrapper&#x20;instance&#x20;over&#x20;</span><code>value</code><span>&#x20;input&#x20;allowing&#x20;method&#x20;chaining</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 1 time</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>source&#x20;code&#x20;for&#x20;</span><Link to="/wiki/JS/Library/lodash/Lodash-Sequence-methods/chainvalue"><code>_.chain(value)</code></Link><span></span><CodeBlock language="jsx">{`function chain(value) {\n  var result = lodash(value);\n  result.__chain__ = true;\n  return result;\n}`}</CodeBlock></cite></li></ol>
    
    </small></Tooltip>)
}