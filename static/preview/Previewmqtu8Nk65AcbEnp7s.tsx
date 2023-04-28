/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function Previewmqtu8Nk65AcbEnp7s(){
  return (<Tooltip
  id="preview__mqtu8Nk65AcbEnp7s"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Heap&#x20;Space</span></code><em>&#x20;aka&#x20;</em><code className="italic font-bold"><span>Space</span></code><span>&#x2C;&#x20;</span><code className="italic font-bold"><span>Spaces</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="/wiki/Computer-Science/Computer-Language/Computer/Software/Domain/Web-Dev/Browser/Chrome/V8"><span>V8</span></Link><span>&#x20;organize&#x20;</span><Link to="/wiki/JS/JS-Definition/JS-Engine/Heap"><span>Heap</span></Link><span>&#x20;into&#x20;</span>&#x20;Page<span>&#x20;regions&#x20;to&#x20;work&#x20;with&#x20;</span><Link to="/wiki/JS/JS-Definition/Multi-paradigm/High-Level/Garbage-Collection"><code>Garbage Collector</code></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 6 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>New-space</span><span>&nbsp;↔&nbsp;</span><span>Small&#x20;</span><Link to="/wiki/JS/JS-Definition/JS-Engine/Heap/Heap-Space"><span>Heap&#x20;Space</span></Link><span>&#x20;to&#x20;contain&#x20;most&#x20;objects,&#x20;independent&#x20;of&#x20;other&#x20;</span><Link to="/wiki/JS/JS-Definition/JS-Engine/Heap/Heap-Space"><code>Spaces</code></Link><span>,&#x20;for&#x20;fast&#x20;</span><Link to="/wiki/JS/JS-Definition/Multi-paradigm/High-Level/Garbage-Collection"><span>Garbage-Collection</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Old-pointer-space</span><span>&nbsp;↔&nbsp;</span><span ><code>Space</code></span><span>&#x20;to&#x20;contain&#x20;most&#x20;objects&#x20;with&#x20;</span><span ><code>Pointers</code></span><span>&#x20;to&#x20;other&#x20;objects,&#x20;moved&#x20;here&#x20;from&#x20;</span><span ><span>New-space</span></span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Old-data-space</span><span>&nbsp;↔&nbsp;</span><span ><code>Space</code></span><span>&#x20;to&#x20;contain&#x20;objects&#x20;with&#x20;raw&#x20;data&#x20;(no&#x20;</span><span ><code>Pointers</code></span><span>).&#x20;Strings,&#x20;boxed&#x20;numbers,&#x20;and&#x20;arrays&#x20;of&#x20;unboxed&#x20;doubles&#x20;move&#x20;here&#x20;from&#x20;</span><span ><span>New-space</span></span><span>&#x20;for&#x20;a&#x20;while.</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Large-object-space</span><span>&nbsp;↔&nbsp;</span><Link to="/wiki/JS/JS-Definition/JS-Engine/Heap/Heap-Space"><code>Space</code></Link><span>&#x20;to&#x20;contain&#x20;large&#x20;objects&#x20;above&#x20;size&#x20;limits&#x20;of&#x20;other&#x20;</span><Link to="/wiki/JS/JS-Definition/JS-Engine/Heap/Heap-Space"><code>Spaces</code></Link><span>.&#x20;Each&#x20;object&#x20;assign&#x20;</span><code>mmap</code><span>&#x27;d&#x20;region&#x20;of&#x20;memory.&#x20;Large&#x20;objects&#x20;never&#x20;moved&#x20;by&#x20;</span><Link to="/wiki/JS/JS-Definition/Multi-paradigm/High-Level/Garbage-Collection"><code>Garbage Collector</code></Link><span>.</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Code-space</span><span>&nbsp;↔&nbsp;</span><span ><code>Space</code></span><span>&#x20;to&#x20;contain&#x20;</span><span ><code>JIT Compiled</code></span><span>&#x20;</span><code>Code</code><span>&#x20;objects&#x20;for&#x20;executable&#x20;memory&#x20;(may&#x20;also&#x20;allocate&#x20;inside&#x20;</span><span ><span>Executable</span></span><span>&#x20;</span><span ><span>JIT</span></span><span>&#x20;</span><code>Code</code><span>&#x20;in&#x20;</span><span ><span>Large-object-space</span></span><span>)</span></cite></li></ol>
    <Link to="/wiki/JS/JS-Definition/JS-Engine/Heap/Heap-Space#references"><button className="react-tooltip__ref-link">
          View 1 more
        </button></Link>
    </small></Tooltip>)
}