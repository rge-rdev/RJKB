/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewaC2YghnT4MNFsC4w3(){
  return (<Tooltip
  id="preview__aC2YghnT4MNFsC4w3"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Arrow&#x20;Function</span></code><em>&#x20;aka&#x20;</em><code className="italic font-bold"><span>Arrow&#x20;Fn</span></code><span>&#x2C;&#x20;</span><code className="italic font-bold"><span>Arrow</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>compact&#x20;</span><Link to="anon-function"><span>Anon&#x20;Function</span></Link><span>&#x20;w/o&#x20;bind&#x20;to&#x20;</span><Link to="this-keyword"><em><code>this</code></em><span>&#x20;keyword</span></Link><span>&#x20;or&#x20;</span><Link to="args-object"><span>Args&#x20;Object</span></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 2 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>!alt&#x20;use&#x20;</span><span ><span>Arrow&#x20;Function</span></span><span>&#x20;</span><code>()&#x21D2;void</code><span>&#x20;as&#x20;</span><span ><span>Type</span></span><span>&#x20;for&#x20;annotating&#x20;functions&#x20;that&#x20;will&#x20;not&#x20;be&#x20;called&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Run&#x20;</span><Link to="useeffect"><code>useEffect()</code></Link><span>&#x20;only&#x20;</span><Link to="cleanup-function"><code>Cleanup</code></Link><span>&#x20;for&#x20;</span><Link to="unmount"><span>Unmount</span></Link><span>&nbsp;↔&nbsp;</span><span>double&#x20;</span><Link to="arrow-function"><span>Arrow&#x20;Function</span></Link><span>&#x20;to&#x20;return&#x20;</span><Link to="cleanup-function"><span>Cleanup&#x20;Function</span></Link><span></span><CodeBlock language="tsx">{`useEffect(() => () => CLEANUP(),\n  [] )`}</CodeBlock></cite></li></ol>
    
    </small></Tooltip>)
}