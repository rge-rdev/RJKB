/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function Previewm9fcvTDtacwsiFdQB(){
  return (<Tooltip
  id="preview__m9fcvTDtacwsiFdQB"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Metacharacter</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><code>\&#x20;^&#x20;$&#x20;.&#x20;*&#x20;+&#x20;?&#x20;(&#x20;)&#x20;[&#x20;]&#x20;&#x7B;&#x20;&#x7D;&#x20;|&#x20;</code><span>&#x20;special&#x20;reserved&#x20;</span><Link to="regexp"><code>RegExp</code></Link><span>&#x20;character&#x20;with&#x20;special&#x20;(non-literal)&#x20;meaning&#x20;to&#x20;define&#x20;search&#x20;criteria/manipulation</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 10 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>to&#x20;search&#x20;</span><span ><span>Metacharacter</span></span><span>,&#x20;must&#x20;escape&#x20;by&#x20;prefix&#x20;</span><span ><code>\</code></span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Pattern&#x20;Character</span><span>&nbsp;↔&nbsp;</span><span>any&#x20;characters&#x20;(except&#x20;for&#x20;</span><Link to="metacharacter"><span>Metacharacter</span></Link><span>)&#x20;that&#x20;match&#x20;themselves</span></cite></li><li><cite className="react-tooltip__ref-list"><span>reserved&#x20;</span><span ><span>Metacharacter</span></span><span>:&#x20;</span><code>()&#x20;[]&#x20;&#x7B;&#x7D;&#x20;\/&#x20;+&#x20;*&#x20;.&#x20;$&#x20;^&#x20;|&#x20;?</code><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><code>.</code><span>&nbsp;↔&nbsp;</span><span ><span>regex</span></span><span>&#x20;</span><span ><span>Metacharacter</span></span><span>&#x20;to&#x20;match&#x20;</span><b>any&#x20;single&#x20;character</b><span>&#x20;(excl&#x20;</span><span ><code>\n</code></span><span>&#x20;&#x26;&#x20;line&#x20;terminator)</span></cite></li><li><cite className="react-tooltip__ref-list"><code>\xxx</code><span>&nbsp;↔&nbsp;</span><span ><code>regex</code></span><span>&#x20;</span><span ><code>Metacharacter</code></span><span>&#x20;for&#x20;</span><span ><code>Octal</code></span><span>&#x20;number&#x20;xxx</span></cite></li></ol>
    <Link to="metacharacter#references"><button className="react-tooltip__ref-link">
          View 5 more
        </button></Link>
    </small></Tooltip>)
}