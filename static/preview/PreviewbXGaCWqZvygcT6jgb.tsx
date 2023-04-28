/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewbXGaCWqZvygcT6jgb(){
  return (<Tooltip
  id="preview__bXGaCWqZvygcT6jgb"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>void</code></code><em>&#x20;aka&#x20;</em><code className="italic font-bold"><span>Void&#x20;operator&#x20;</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="/wiki/JS/JS-Language/JS-Syntax/JS-Operator"><span>JS&#x20;Operator</span></Link><span>&#x20;to&#x20;evalute&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/JS-Operator/Operand"><span>Operand</span></Link><span>&#x20;as&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/Expression"><span>Expression</span></Link><span>&#x20;&#x26;&#x20;return&#x20;</span><Link to="/wiki/JS/JS-Language/Primitive/undefined"><code>undefined</code></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 5 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><b><em>!snippet&#x20;</em></b><span ><code>void</code></span><b><em>&#x20;used&#x20;for&#x20;IIFE</em></b><CodeBlock language="tsx">{`void function iife(){\n  console.log("Executed")\n}()`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><b><em>!snippet&#x20;</em></b><span ><code>void</code></span><b><em>&#x20;used&#x20;with&#x20;</em></b><b><em><code>javascript:</code></em></b><b><em>&#x20;pseudo&#x20;protocol</em></b><span>&#x20;</span><CodeBlock language="tsx">{`<a href="javascript:void(0);">\n  Click for nothing\n</a>\n<a href="javascript:void(document.body.style.backgroundColor="green");">\n  Click to change background to green\n</a>`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><b><em>!snippet&#x20;</em></b><Link to="/wiki/JS/JS-Language/JS-Syntax/JS-Operator/void"><code>void</code></Link><b><em>&#x20;used&#x20;to&#x20;prevent&#x20;leaking&#x20;results&#x20;from&#x20;arrow&#x20;function</em></b><span>&#x20;</span><CodeBlock language="tsx">{`button.onclick = () => void doSomething();`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><b><em>!snippet&#x20;</em></b><Link to="/wiki/JS/JS-Language/JS-Syntax/JS-Operator/void"><code>void</code></Link><b><em>&#x20;use-cases</em></b><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span ><code>void</code></span><span>&#x20;or&#x20;</span><span ><code>void</code></span><span>&#x20;</span></cite></li></ol>
    
    </small></Tooltip>)
}