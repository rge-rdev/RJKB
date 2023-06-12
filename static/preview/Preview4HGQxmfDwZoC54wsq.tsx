/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function Preview4HGQxmfDwZoC54wsq(){
  return (<Tooltip
  id="preview__4HGQxmfDwZoC54wsq"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>New-space</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>Small&#x20;</span><Link to="heap-space"><span>Heap&#x20;Space</span></Link><span>&#x20;to&#x20;contain&#x20;most&#x20;objects,&#x20;independent&#x20;of&#x20;other&#x20;</span><Link to="heap-space"><code>Spaces</code></Link><span>,&#x20;for&#x20;fast&#x20;</span><Link to="garbage-collection"><span>Garbage-Collection</span></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 2 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>Old-pointer-space</span><span>&nbsp;↔&nbsp;</span><span ><code>Space</code></span><span>&#x20;to&#x20;contain&#x20;most&#x20;objects&#x20;with&#x20;</span><span ><code>Pointers</code></span><span>&#x20;to&#x20;other&#x20;objects,&#x20;moved&#x20;here&#x20;from&#x20;</span><span ><span>New-space</span></span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Old-data-space</span><span>&nbsp;↔&nbsp;</span><span ><code>Space</code></span><span>&#x20;to&#x20;contain&#x20;objects&#x20;with&#x20;raw&#x20;data&#x20;(no&#x20;</span><span ><code>Pointers</code></span><span>).&#x20;Strings,&#x20;boxed&#x20;numbers,&#x20;and&#x20;arrays&#x20;of&#x20;unboxed&#x20;doubles&#x20;move&#x20;here&#x20;from&#x20;</span><span ><span>New-space</span></span><span>&#x20;for&#x20;a&#x20;while.</span></cite></li></ol>
    
    </small></Tooltip>)
}