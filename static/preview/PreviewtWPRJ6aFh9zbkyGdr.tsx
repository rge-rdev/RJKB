/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewtWPRJ6aFh9zbkyGdr(){
  return (<Tooltip
  id="preview__tWPRJ6aFh9zbkyGdr"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Instantiation</span></code><em>&#x20;aka&#x20;</em><code className="italic font-bold"><span>Instantiate</span></code><span>&#x2C;&#x20;</span><code className="italic font-bold"><span>Instantiating</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>(</span><em>process</em><span>)&#x20;to&#x20;create&#x20;new&#x20;</span><Link to="/wiki/JS/JS-Language/Object"><span>Object</span></Link><span>&#x20;</span><Link to="/wiki/JS/JS-Definition/Multi-paradigm/Paradigm/OOP/Classical-OOP-Concepts/Class/Instantiation/Instance"><span>Instance</span></Link><span>&#x20;from&#x20;</span><Link to="/wiki/JS/JS-Definition/Multi-paradigm/Paradigm/OOP/Prototypal-Inheritance/class"><code>class</code></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 5 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>contrast&#x20;</span><span ><span>Factory&#x20;Function</span></span><span>&#x20;applies&#x20;</span><span ><span>Instantiation</span></span><span>&#x20;w/o&#x20;using&#x20;</span><span ><code>new</code></span><span></span><CodeBlock language="tsx">{`function Person(name, age){\n  return {\n    name: name,\n    age: age\n  }\n}`}</CodeBlock><span>&#x20;call&#x20;constructor&#x20;w/o&#x20;new&#x20;keyword</span><CodeBlock language="tsx">{`const bob = Person(name, 18)`}</CodeBlock><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Constructor&#x20;Function</span><span>&nbsp;↔&nbsp;</span><Link to="/wiki/JS/JS-Language/Object/Function/function"><span>function</span></Link><span>&#x20;to&#x20;programmatically&#x20;create&#x20;</span><Link to="/wiki/JS/JS-Language/Object"><span>Object</span></Link><span>&#x20;(&#x26;&#x20;link&#x20;via&#x20;</span><Link to="/wiki/JS/JS-Definition/Multi-paradigm/Paradigm/OOP/Prototypal-Inheritance/Objects-Prototypal-Inheritance-Methods-to-Prototype-Constructor-Function/Prototype/proto"><code>__proto__</code></Link><span>&#x20;after&#x20;</span><Link to="/wiki/JS/JS-Definition/Multi-paradigm/Paradigm/OOP/Classical-OOP-Concepts/Class/Instantiation"><span>Instantiation</span></Link><span>&#x20;with&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/JS-Operator/new"><code>new</code></Link><span>)</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Private&#x20;Constructor</span><span>&nbsp;↔&nbsp;</span><Link to="/wiki/JS/JS-Language/Object/Function/Constructor-Function"><span>Constructor&#x20;Function</span></Link><span>&#x20;prepend&#x20;with&#x20;</span><Link to="/wiki/JS/TS/TS-Syntax/Type/Base-Type/Typed-Classes/method-modifiers/private"><code>private</code></Link><span>&#x20;to&#x20;restrict&#x20;access&#x20;to&#x20;within&#x20;class,&#x20;prevent&#x20;</span><Link to="/wiki/JS/JS-Definition/Multi-paradigm/Paradigm/OOP/Classical-OOP-Concepts/Class/Instantiation"><span>Instantiation</span></Link><span>&#x20;with&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/JS-Operator/new"><code>new</code></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><code>Map()</code><span>&nbsp;↔&nbsp;</span><Link to="/wiki/JS/JS-Language/Object/Function/Constructor-Function"><code>Constructor</code></Link><span>&#x20;to&#x20;</span><Link to="/wiki/JS/JS-Definition/Multi-paradigm/Paradigm/OOP/Classical-OOP-Concepts/Class/Instantiation"><code>Instantiate</code></Link><span>&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/JS-Operator/new"><code>new</code></Link><span>&#x20;</span><Link to="/wiki/JS/JS-Language/Object/map"><code>map</code></Link><span>&#x20;</span><Link to="/wiki/JS/JS-Language/Object"><span>Object</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span ><code>Instantiate</code></span><span>&#x20;via&#x20;</span><span ><code>new</code></span><span></span><CodeBlock language="jsx">{`const bob = new myClass("Bob", 18);`}</CodeBlock></cite></li></ol>
    
    </small></Tooltip>)
}