/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function Previewr8RDGKQWALecSTa2F(){
  return (<Tooltip
  id="preview__r8RDGKQWALecSTa2F"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Global&#x20;Scope</span></code><em>&#x20;aka&#x20;</em><code className="italic font-bold"><span>Top-Level&#x20;Scope</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>Outside&#x20;any&#x20;</span><Link to="block"><span>Block</span></Link><span>.&#x20;</span><Link to="variable"><span>Variable</span></Link><b>access&#x20;everywhere</b><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 9 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>Global&#x20;Object</span><span>&nbsp;↔&nbsp;</span><Link to="object"><span>Object</span></Link><span>&#x20;to&#x20;access&#x20;via</span><Link to="global-scope"><span>Global&#x20;Scope</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Global&#x20;Variable</span><span>&nbsp;↔&nbsp;</span><Link to="variable"><span>Variable</span></Link><span>&#x20;</span><Link to="declaration"><code>Declare</code></Link><span>&#x20;in&#x20;</span><Link to="global-scope"><span>Global&#x20;Scope</span></Link>&#x20;or&#x20;<Link to="top-level-code"><span>Top-Level&#x20;Code</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Global&#x20;Function</span><span>&nbsp;↔&nbsp;</span><Link to="function"><span>function</span></Link><span>&#x20;declare&#x20;in&#x20;</span><Link to="global-scope"><span>Global&#x20;Scope</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span ><span>IIFE</span></span><span>&#x20;also&#x20;used&#x20;to&#x20;</span><b>prevent&#x20;polluting</b><span>&#x20;the&#x20;</span><span ><span>Global&#x20;Scope</span></span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Global&#x20;EC</span><span>&nbsp;↔&nbsp;</span><Link to="ec"><span>EC</span></Link><span>&#x20;created&#x20;for&#x20;</span><Link to="global-scope"><span>Global&#x20;Scope</span></Link><span>&#x20;or&#x20;</span><Link to="top-level-code"><span>Top-Level&#x20;Code</span></Link><span>&#x20;</span></cite></li></ol>
    <Link to="global-scope#references"><button className="react-tooltip__ref-link">
          View 4 more
        </button></Link>
    </small></Tooltip>)
}