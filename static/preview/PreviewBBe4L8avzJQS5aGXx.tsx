/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewBBe4L8avzJQS5aGXx(){
  return (<Tooltip
  id="preview__BBe4L8avzJQS5aGXx"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>On-demand&#x20;Revalidation</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>(</span><em>feat</em><span>)&#x20;to&#x20;manually&#x20;purge&#x20;</span><Link to="http-caching"><code>HTTP Cache</code></Link><span>&#x20;for&#x20;specific&#x20;</span><Link to="isr"><span>ISR</span></Link><span>&#x20;</span><Link to="page"><span>Page</span></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 1 time</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span ><span>On-demand&#x20;Revalidation</span></span><span>&#x20;requires&#x20;secret&#x20;token&#x20;to&#x20;access&#x20;via&#x20;API&#x20;route&#x20;</span><CodeBlock language="bash">{`https://<your-site.com>/api/revalidate?secret=<token>`}</CodeBlock></cite></li></ol>
    
    </small></Tooltip>)
}