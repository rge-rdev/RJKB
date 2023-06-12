/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewFTRHGFtjJdyduzhCz(){
  return (<Tooltip
  id="preview__FTRHGFtjJdyduzhCz"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Cleanup&#x20;Function</span></code><em>&#x20;aka&#x20;</em><code className="italic font-bold"><span>Cleanup&#x20;Fn</span></code><span>&#x2C;&#x20;</span><code className="italic font-bold"><span>Cleanup</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="function"><span>function</span></Link><span>&#x20;call&#x20;on&#x20;</span><Link to="unmount"><span>Unmount</span></Link><span>,&#x20;via&#x20;return&#x20;function&#x20;from&#x20;</span><Link to="useeffect"><code>useEffect()</code></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 9 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span ><span>Cleanup&#x20;Function</span></span><span>&#x20;used&#x20;to&#x20;prevent&#x20;</span><span ><span>Memory&#x20;Leak</span></span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Run&#x20;</span><Link to="effect"><span>Effect</span></Link><span>&#x20;once&#x20;</span><b>onMount</b><span>&#x20;+&#x20;</span><Link to="cleanup-function"><code>Cleanup</code></Link><span>&nbsp;↔&nbsp;</span><span>call&#x20;</span><Link to="useeffect"><code>useEffect()</code></Link><span>&#x20;with&#x20;empty&#x20;</span><Link to="deps-array"><span>Deps&#x20;Array</span></Link><span>&#x20;&#x26;&#x20;return&#x20;</span><Link to="cleanup-function"><span>Cleanup&#x20;Function</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Run&#x20;</span><Link to="useeffect"><code>useEffect()</code></Link><span>&#x20;only&#x20;</span><Link to="cleanup-function"><code>Cleanup</code></Link><span>&#x20;for&#x20;</span><Link to="unmount"><span>Unmount</span></Link><span>&nbsp;↔&nbsp;</span><span>double&#x20;</span><Link to="arrow-function"><span>Arrow&#x20;Function</span></Link><span>&#x20;to&#x20;return&#x20;</span><Link to="cleanup-function"><span>Cleanup&#x20;Function</span></Link><span></span><CodeBlock language="tsx">{`useEffect(() => () => CLEANUP(),\n  [] )`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span ><span>Effect</span></span><span>&#x20;code&#x20;omitted;&#x20;only&#x20;return&#x20;</span><span ><span>Cleanup&#x20;Function</span></span><span>&#x20;when&#x20;executed</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Run&#x20;</span><Link to="effect"><span>Effect</span></Link><span>&#x20;+&#x20;</span><Link to="cleanup-function"><code>Cleanup</code></Link><span>&#x20;on&#x20;</span><b>specific&#x20;renders</b><span>&nbsp;↔&nbsp;</span><span>call&#x20;</span><Link to="useeffect"><code>useEffect()</code></Link><span>&#x20;with&#x20;property&#x20;in&#x20;</span><Link to="deps-array"><span>Deps&#x20;Array</span></Link><span>&#x20;&#x26;&#x20;</span><Link to="cleanup-function"><span>Cleanup&#x20;Function</span></Link><span>&#x20;</span></cite></li></ol>
    <Link to="cleanup-function#references"><button className="react-tooltip__ref-link">
          View 4 more
        </button></Link>
    </small></Tooltip>)
}