/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function Previewcb2XeRXXuPPxJdmvy(){
  return (<Tooltip
  id="preview__cb2XeRXXuPPxJdmvy"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>readdirSync()</code></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="fs"><code>fs</code></Link><span>&#x20;</span><Link to="static-method"><span>Static&#x20;Method</span></Link><span>&#x20;to&#x20;</span><Link to="sync"><span>Sync</span></Link><span>&#x20;read&#x20;dir&#x20;content</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 1 time</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;chain&#x20;</span><span ><code>unlinkSync()</code></span><span>&#x20;forEach&#x20;</span><span ><code>readdirSync()</code></span><span></span><CodeBlock language="tsx">{`fs.readdirSync(dir)\n.forEach(file=>fs.unlinkSync(dir+"/"+file))`}</CodeBlock></cite></li></ol>
    
    </small></Tooltip>)
}