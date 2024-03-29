/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function Preview2gHpvYHCJ3Pgz3zZy(){
  return (<Tooltip
  id="preview__2gHpvYHCJ3Pgz3zZy"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Generic&#x20;Type&#x20;Parameter</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>(convention&#x20;to&#x20;use)&#x20;single&#x20;uppercase&#x20;character&#x20;for&#x20;</span><Link to="generic-type-parameter"><span>Generic&#x20;Type&#x20;Parameter</span></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 2 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><b><em>!snippet&#x20;</em></b><span ><span>Generic&#x20;Type</span></span><span>&#x20;where&#x20;X&#x20;is&#x20;</span><span ><span>Generic&#x20;Type&#x20;Parameter</span></span><span>&#x20;</span><CodeBlock language="tsx">{`type TypeFactory<X> = X;\ntype MyType = TypeFactory<string>;`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>Generic&#x20;Type&#x20;Parameter</span><span>&nbsp;↔&nbsp;</span><span>(convention&#x20;to&#x20;use)&#x20;single&#x20;uppercase&#x20;character&#x20;for&#x20;</span><Link to="generic-type-parameter"><span>Generic&#x20;Type&#x20;Parameter</span></Link><span>&#x20;</span></cite></li></ol>
    
    </small></Tooltip>)
}