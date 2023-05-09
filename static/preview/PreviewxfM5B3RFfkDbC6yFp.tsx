/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewxfM5B3RFfkDbC6yFp(){
  return (<Tooltip
  id="preview__xfM5B3RFfkDbC6yFp"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Consume</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>(</span><em>process</em><span>)&#x20;to&#x20;use&#x20;</span><Link to="/wiki/JS/JS-Language/Object/Promise/Promise-Lifecycle/Settled"><span>Settled</span></Link><span>&#x20;</span><Link to="/wiki/JS/JS-Language/Object/Promise"><code>Promise</code></Link><span>&#x20;to&#x20;get&#x20;a&#x20;result</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 2 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span ><span>Consume</span></span><span ><code>Promise</code></span><span>&#x20;using&#x20;</span><span ><code>.then()</code></span><span>&#x26;&#x20;call&#x20;</span><span ><code>.json()</code></span><span>on&#x20;response&#x20;</span><span ><span>Argument</span></span><span></span><CodeBlock language="jsx">{`.then(res => res.json())`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>anything&#x20;returned&#x20;from&#x20;</span><span ><code>.then()</code></span><span>&#x20;</span><span ><span>Handler</span></span><span>&#x20;</span><span ><span>Callback&#x20;Function</span></span><span>,&#x20;will&#x20;be&#x20;</span><span ><span>Consume</span></span><span>d&#x20;as&#x20;</span><span ><span>Argument</span></span><span>&#x20;in&#x20;next&#x20;chained&#x20;promise&#x20;-&#x20;can&#x20;return&#x20;another&#x20;fetch&#x20;request&#x20;or&#x20;</span><span ><span>AJAX</span></span><span>&#x20;</span></cite></li></ol>
    
    </small></Tooltip>)
}