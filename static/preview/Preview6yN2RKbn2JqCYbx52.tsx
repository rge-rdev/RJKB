import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function Preview6yN2RKbn2JqCYbx52(){
  return (<Tooltip
  id="preview__6yN2RKbn2JqCYbx52"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>.bind()</code></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="/wiki/JS/JS-Language/Object/Function"><code>Function</code></Link><span>&#x20;</span><Link to="/wiki/JS/JS-Definition/Multi-paradigm/Paradigm/OOP/Prototypal-Inheritance/Static-Method/Instance-Method"><span>Instance&#x20;Method</span></Link><span>&#x20;to&#x20;fix&#x20;</span><Link to="/wiki/JS/JS-Definition/JS-Engine/Call-Stack/EC/VEST/this-keyword"><em><code>this</code></em><span>&#x20;keyword</span></Link><span>&#x20;for&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/Declaration/Literal/Object-Literal/Slot/Method"><span>Method</span></Link><span>&#x20;(with&#x20;optional&#x20;</span><Link to="/wiki/JS/JS-Language/Primitive/undefined/Argument"><span>Argument</span></Link><span>),&#x20;for&#x20;</span><b>new&#x20;standalone&#x20;fn</b><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 1 time</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><b><em>!snippet&#x20;</em></b><Link to="/wiki/JS/JS-Language/Object/Function/Function-Instance-Methods/bind"><code>.bind()</code></Link><span></span><CodeBlock language="tsx">{`const bob = {\n  name: "Bob",\n  hello(msg) {\n    console.log(\`\${this.name} says \${msg}\`)\n  }\n}\nconst func = bob.hello.bind(bob, "hello")`}</CodeBlock></cite></li></ol>
    
    </small></Tooltip>)
}