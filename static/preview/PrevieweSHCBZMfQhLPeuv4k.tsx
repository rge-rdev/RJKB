/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PrevieweSHCBZMfQhLPeuv4k(){
  return (<Tooltip
  id="preview__eSHCBZMfQhLPeuv4k"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>//&#x20;@ts-</code><code>expect-error</code></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>tell&#x20;</span><Link to="tsc_ts-def"><span>TSC</span></Link><span>&#x20;to&#x20;expect&#x20;&#x26;&#x20;suppress&#x20;static&#x20;error&#x20;on&#x20;next&#x20;line&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 1 time</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><span ><code>//&#x20;@ts-</code><code>expect-error</code></span><span>&#x20;with&#x20;</span><span ><code>assert.throws()</code></span><span>&#x20;</span><CodeBlock language="tsx">{`assert.throws(\n  // @ts-expect-error: Object is possibly "null". (2531)\n  () => null.someProperty,\n  TypeError);`}</CodeBlock></cite></li></ol>
    
    </small></Tooltip>)
}