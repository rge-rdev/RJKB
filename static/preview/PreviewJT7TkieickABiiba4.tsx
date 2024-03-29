/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewJT7TkieickABiiba4(){
  return (<Tooltip
  id="preview__JT7TkieickABiiba4"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Large-object-space</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="heap-space"><code>Space</code></Link><span>&#x20;to&#x20;contain&#x20;large&#x20;objects&#x20;above&#x20;size&#x20;limits&#x20;of&#x20;other&#x20;</span><Link to="heap-space"><code>Spaces</code></Link><span>.&#x20;Each&#x20;object&#x20;assign&#x20;</span><code>mmap</code><span>&#x27;d&#x20;region&#x20;of&#x20;memory.&#x20;Large&#x20;objects&#x20;never&#x20;moved&#x20;by&#x20;</span><Link to="garbage-collection"><code>Garbage Collector</code></Link><span>.</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 1 time</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>Code-space</span><span>&nbsp;↔&nbsp;</span><span ><code>Space</code></span><span>&#x20;to&#x20;contain&#x20;</span><span ><code>JIT Compiled</code></span><span>&#x20;</span><code>Code</code><span>&#x20;objects&#x20;for&#x20;executable&#x20;memory&#x20;(may&#x20;also&#x20;allocate&#x20;inside&#x20;</span><span ><span>Executable</span></span><span>&#x20;</span><span ><span>JIT</span></span><span>&#x20;</span><code>Code</code><span>&#x20;in&#x20;</span><span ><span>Large-object-space</span></span><span>)</span></cite></li></ol>
    
    </small></Tooltip>)
}