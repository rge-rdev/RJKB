/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function Previewqo3ecbiQuc9EfhZfy(){
  return (<Tooltip
  id="preview__qo3ecbiQuc9EfhZfy"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Generic&#x20;Type</span></code><em>&#x20;aka&#x20;</em><code className="italic font-bold"><span>Generics</span></code><span>&#x2C;&#x20;</span><code className="italic font-bold"><span>Generic&#x20;Types</span></code><span>&#x2C;&#x20;</span><code className="italic font-bold"><span>Generic</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>factory&#x20;for&#x20;</span><Link to="type"><span>Type</span></Link><span>s,&#x20;defined&#x20;using&#x20;</span><Link to="angle-bracket-notation"><span>Angle&#x20;Bracket&#x20;Notation</span></Link><span>,&#x20;to&#x20;annotate&#x20;with&#x20;</span><Link to="generic-type-placeholder"><span>Generic&#x20;Type&#x20;Placeholder</span></Link><span>&#x20;for&#x20;</span><Link to="tsc_ts-def"><span>TSC</span></Link><span>&#x20;to&#x20;infer&#x20;&#x26;&#x20;fill&#x20;in&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 5 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span ><span>Generic&#x20;Type</span></span><span>s&#x20;exist&#x20;on&#x20;</span><span ><span>Static&#x20;Level</span></span><span>&#x20;as&#x20;factory&#x20;for&#x20;</span><span ><span>Type</span></span><span>s&#x20;</span><code>&#x3C;</code><span>with&#x20;</span><span ><span>Parameter</span></span><span>&#x20;in&#x20;angle&#x20;brackets</span><code>&#x3E;</code><CodeBlock language="tsx">{`type TypeFactory<X> = X;\ntype MyType = TypeFactory<string>;`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><b><em>!snippet&#x20;</em></b><span ><span>Generic&#x20;Type</span></span><span>&#x20;where&#x20;X&#x20;is&#x20;</span><span ><span>Generic&#x20;Type&#x20;Parameter</span></span><span>&#x20;</span><CodeBlock language="tsx">{`type TypeFactory<X> = X;\ntype MyType = TypeFactory<string>;`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><em>!</em><b><em>snippet&#x20;</em></b><span ><span>Generic&#x20;Type</span></span><em>&#x20;for&#x20;array&#x20;utility&#x20;fn&#x20;to&#x20;insert&#x20;before&#x20;</em><CodeBlock language="tsx">{`function insertAtStart<T>(array: T, value: T) {\n  const newArray = [T, ...T]\n  return newArray\n}`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>FC&#x20;is&#x20;</span><span ><span>Generic&#x20;Type</span></span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><b><em>!snippet&#x20;</em></b><span ><span>Generic&#x20;Type</span></span><em>&#x20;for&#x20;identity&#x20;function</em><CodeBlock language="tsx">{`function identity<Type>(arg: Type): Type {\n  return arg;\n}`}</CodeBlock></cite></li></ol>
    
    </small></Tooltip>)
}