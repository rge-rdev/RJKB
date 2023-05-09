/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function Preview9nwqegTmy3CZtLXoJ(){
  return (<Tooltip
  id="preview__9nwqegTmy3CZtLXoJ"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>Date.now()</code></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>to&#x20;return&#x20;</span><Link to="/wiki/JS/JS-Language/Object/Date/new-Date/epoch"><span>epoch</span></Link><span>&#x20;</span><Link to="/wiki/JS/JS-Language/Primitive/number"><code>number</code></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 2 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>promisfy&#x20;</span><span ><code>Date.now()</code></span><span>&#x20;&#x26;&#x26;&#x20;check&#x20;clash&#x20;||&#x20;return&#x20;</span><span ><code>Date.now()</code></span><span>&#x20;as&#x20;</span><span ><span>Sync</span></span><span>&#x20;</span><span ><code>fn</code></span><span>&#x20;to&#x20;prevent&#x20;clash</span><CodeBlock language="tsx">{`const _uid = Date.now()`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>combine&#x20;</span><span ><code>Date.now()</code></span><span>&#x20;with&#x20;</span><span ><code>Math.random()</code></span><span>&#x20;</span><CodeBlock language="tsx">{`const _uid = Date.now().toString(36) + Math.Random().toString(36).substr(2)`}</CodeBlock></cite></li></ol>
    
    </small></Tooltip>)
}