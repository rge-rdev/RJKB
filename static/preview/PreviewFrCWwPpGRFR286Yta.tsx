/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewFrCWwPpGRFR286Yta(){
  return (<Tooltip
  id="preview__FrCWwPpGRFR286Yta"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Root</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>top-most&#x20;</span><Link to="node"><code>Node</code></Link><span>&#x20;in&#x20;</span><Link to="dom-tree"><span>DOM&#x20;Tree</span></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 6 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>Every&#x20;</span><span ><code>Node</code></span><span>&#x20;only&#x20;has&#x20;ONE&#x20;</span><span ><span>Parent</span></span><span>&#x20;(except&#x20;</span><span ><span>Root</span></span><span>)&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Ascendant</span><span>&nbsp;↔&nbsp;</span><span>any&#x20;</span><Link to="parent"><span>Parent</span></Link><span>&#x20;</span><Link to="node"><code>Node</code></Link><span>&#x20;(or&#x20;above&#x20;up&#x20;to&#x20;</span><Link to="root"><span>Root</span></Link><span>)&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><code>&#x3C;body&#x3E;</code><span>&nbsp;↔&nbsp;</span><Link to="root"><span>Root</span></Link><span>&#x20;</span><Link to="sectioning"><span>Sectioning</span></Link><span>&#x20;Element&#x20;to&#x20;hold&#x20;</span><b>Document&#x20;Body</b><span>&#x20;of&#x20;</span><Link to="html"><span>HTML</span></Link><span>&#x20;</span><Link to="document"><code>Document</code></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Capturing&#x20;Phase</span><span>&nbsp;↔&nbsp;</span><Link to="event"><code>Event</code></Link><span>&#x20;propagates&#x20;down,&#x20;from&#x20;</span><Link to="document"><code>Document</code></Link><span>&#x20;</span><Link to="root"><span>Root</span></Link><span>&#x20;to&#x20;target&#x20;</span><Link to="htmlelement"><code>Element</code></Link><span>,&#x20;pass&#x20;through&#x20;every&#x20;</span><Link to="parent"><span>Parent</span></Link><span>&#x20;</span><Link to="htmlelement"><code>Element</code></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Bubbling&#x20;Phase</span><span>&nbsp;↔&nbsp;</span><Link to="event"><code>Event</code></Link><span>&#x20;propagate&#x20;back&#x20;up&#x20;to&#x20;</span><Link to="document"><code>Document</code></Link><span>&#x20;</span><Link to="root"><span>Root</span></Link><span>,&#x20;pass&#x20;through&#x20;</span><Link to="parent"><span>Parent</span></Link><span>&#x20;</span><Link to="htmlelement"><code>Element</code></Link><span>&#x20;</span></cite></li></ol>
    <Link to="root#references"><button className="react-tooltip__ref-link">
          View 1 more
        </button></Link>
    </small></Tooltip>)
}