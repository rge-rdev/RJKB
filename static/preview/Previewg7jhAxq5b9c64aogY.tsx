/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function Previewg7jhAxq5b9c64aogY(){
  return (<Tooltip
  id="preview__g7jhAxq5b9c64aogY"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>epoch</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>integer&#x20;#&#x20;milliseconds&#x20;since&#x20;Jan&#x20;1&#x20;1970</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 4 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><code>new&#x20;Date()</code><span>&nbsp;↔&nbsp;</span><span>to&#x20;return&#x20;new&#x20;Date&#x20;</span><span ><span>Object</span></span><span>&#x20;with&#x20;</span><span ><span>epoch</span></span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><code>Date</code><span>&nbsp;↔&nbsp;</span><Link to="interface"><span>Interface</span></Link><span>&#x20;</span><Link to="constructor-function"><code>Constructor</code></Link><span>&#x20;for&#x20;new&#x20;date&#x20;object&#x20;(with&#x20;</span><Link to="epoch"><span>epoch</span></Link><span>)&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><code>Date.now()</code><span>&nbsp;↔&nbsp;</span><span>to&#x20;return&#x20;</span><Link to="epoch"><span>epoch</span></Link><span>&#x20;</span><Link to="number"><code>number</code></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><code>Intl.DateTimeFormat(&#x22;en-GB&#x22;).format(new&#x20;Date(__EPOCH))</code><span>&nbsp;↔&nbsp;</span><span>to&#x20;parse&#x20;</span><span ><span>epoch</span></span><span>&#x20;into&#x20;dd/mm/yy&#x20;-&#x20;(apparently&#x20;this&#x20;also&#x20;works&#x20;in&#x20;node&#x20;runtime?!).&#x20;</span><code>DateTimeFormat</code><span>&#x20;is&#x20;a&#x20;useful&#x20;shortcut&#x20;to&#x20;get&#x20;locale&#x20;specific&#x20;formatting&#x20;-&#x20;less&#x20;boilerplate&#x20;vs&#x20;config&#x20;object&#x20;params</span></cite></li></ol>
    
    </small></Tooltip>)
}