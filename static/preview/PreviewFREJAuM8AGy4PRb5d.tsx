/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewFREJAuM8AGy4PRb5d(){
  return (<Tooltip
  id="preview__FREJAuM8AGy4PRb5d"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Unmount</span></code><em>&#x20;aka&#x20;</em><code className="italic font-bold"><span>Unmounted</span></code><span>&#x2C;&#x20;</span><code className="italic font-bold"><span>Unmounting</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>(</span><em>process</em><span>)&#x20;to&#x20;remove&#x20;</span><Link to="ui"><span>UI</span></Link><span>&#x20;from&#x20;</span><Link to="dom-api"><span>DOM&#x20;API&#x20;</span></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 4 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><code>componentWillUnmount()</code><span>&nbsp;↔&nbsp;</span><span ><span>CC</span></span><span>&#x20;</span><span ><span>Lifecycle&#x20;Method</span></span><span>&#x20;to&#x20;trigger&#x20;when&#x20;</span><span ><span>CC</span></span><span>&#x20;</span><span ><span>Unmount</span></span><span>&#x20;from&#x20;</span><span ><span>DOM&#x20;API&#x20;</span></span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Run&#x20;</span><Link to="useeffect"><code>useEffect()</code></Link><span>&#x20;only&#x20;</span><Link to="cleanup-function"><code>Cleanup</code></Link><span>&#x20;for&#x20;</span><Link to="unmount"><span>Unmount</span></Link><span>&nbsp;↔&nbsp;</span><span>double&#x20;</span><Link to="arrow-function"><span>Arrow&#x20;Function</span></Link><span>&#x20;to&#x20;return&#x20;</span><Link to="cleanup-function"><span>Cleanup&#x20;Function</span></Link><span></span><CodeBlock language="tsx">{`useEffect(() => () => CLEANUP(),\n  [] )`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><code>destroyOnMount:&#x20;true</code><span>&nbsp;↔&nbsp;</span><span>(</span><em>default</em><span>)&#x20;</span>reduxForm<span>&#x20;behaviour&#x20;to&#x20;dump&#x20;form&#x20;data&#x20;on&#x20;</span><span ><span>Unmount</span></span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Cleanup&#x20;Function</span><span>&nbsp;↔&nbsp;</span><Link to="function"><span>function</span></Link><span>&#x20;call&#x20;on&#x20;</span><Link to="unmount"><span>Unmount</span></Link><span>,&#x20;via&#x20;return&#x20;function&#x20;from&#x20;</span><Link to="useeffect"><code>useEffect()</code></Link><span>&#x20;</span></cite></li></ol>
    
    </small></Tooltip>)
}