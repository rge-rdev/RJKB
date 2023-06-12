/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function Preview4wJDAZSfgssqayEJ2(){
  return (<Tooltip
  id="preview__4wJDAZSfgssqayEJ2"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>class</code></code><em>&#x20;aka&#x20;</em><code className="italic font-bold"><span>ES6&#x20;Class</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="js-keyword"><span>JS&#x20;Keyword</span></Link><span>&#x20;to&#x20;declare&#x20;</span><Link to="class_classical-oop-concepts-🏭-🤖"><span>Class</span></Link><span>&#x20;(as&#x20;</span><Link to="syntactic-sugar"><span>Syntactic&#x20;Sugar</span></Link><span>&#x20;over&#x20;</span><Link to="constructor-function"><span>Constructor&#x20;Function</span></Link><span>)&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 21 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>Instance</span><span>&nbsp;↔&nbsp;</span><Link to="object"><span>Object</span></Link><span>&#x20;created&#x20;through&#x20;a&#x20;</span><Link to="class"><code>class</code></Link><span>&#x20;or&#x20;</span><Link to="constructor-function"><span>Constructor&#x20;Function</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Instantiation</span><span>&nbsp;↔&nbsp;</span><span>(</span><em>process</em><span>)&#x20;to&#x20;create&#x20;new&#x20;</span><Link to="object"><span>Object</span></Link><span>&#x20;</span><Link to="instance"><span>Instance</span></Link><span>&#x20;from&#x20;</span><Link to="class"><code>class</code></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;.call()&#x20;-&#x20;using&#x20;</span><span ><code>class</code></span><span>&#x20;</span><span ><span>Constructor&#x20;Function</span></span><span></span><CodeBlock language="jsx">{`function Product(name, price) {\n  this.name = name;\n  this.price = price;\n}\n\nfunction Food(name, price) {\n  Product.call(this, name, price);\n  this.category = "food";\n}\n\nconst Cheese = new Food("cheese", 5)`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>CC</span><span>&nbsp;↔&nbsp;</span><Link to="react"><span>React</span></Link><span>&#x20;</span><Link to="class"><code>class</code></Link><span>&#x20;</span><Link to="instance"><span>Instance</span></Link><span>&#x20;</span><Link to="extends"><code>extends</code></Link><span>&#x20;</span><Link to="react-component"><code>React.Component</code></Link><span>,&#x20;provides&#x20;render()&#x20;</span><Link to="method"><span>Method</span></Link><span>&#x20;to&#x20;</span>return<span>&#x20;</span><Link to="ui"><span>UI</span></Link><span>,&#x20;</span>manage&#x20;<Link to="state"><span>state</span></Link><span>&#x20;&#x26;&#x20;</span>perform&#x20;side&#x20;effects&#x20;on<span>&#x20;</span><Link to="lifecycle-method"><span>Lifecycle&#x20;Method</span></Link><span>s</span></cite></li><li><cite className="react-tooltip__ref-list"><code>--strictPropertyInitialization</code><span>&nbsp;↔&nbsp;</span><span>flag&#x20;to&#x20;set&#x20;</span><Link to="tsc_ts-def"><span>TSC</span></Link><span>&#x20;to&#x20;throw&#x20;error&#x20;when&#x20;</span><b>properties</b><span>&#x20;in&#x20;</span><Link to="class"><code>class</code></Link><span>&#x20;definitions&#x20;are&#x20;</span><b>not&#x20;initialized</b><span>&#x20;</span></cite></li></ol>
    <Link to="class#references"><button className="react-tooltip__ref-link">
          View 16 more
        </button></Link>
    </small></Tooltip>)
}