import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewuJvJj9A43FFRPb66S(){
  return (<Tooltip
  id="preview__uJvJj9A43FFRPb66S"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Variadic&#x20;Tuple</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="/wiki/JS/TS/TS-Syntax/Type/Base-Type/Array/Tuple"><span>Tuple</span></Link><span>&#x20;</span><Link to="/wiki/JS/TS/TS-Syntax/Type/Type-Annotation"><span>Type&#x20;Annotation</span></Link><span>&#x20;using&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/JS-Operator/Spread-Operator"><span>Spread&#x20;Operator</span></Link><span>&#x20;or&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/JS-Operator/Rest-Parameter"><span>Rest&#x20;Parameter</span></Link><span>,&#x20;to&#x20;define&#x20;varying&#x20;number&#x20;of&#x20;element&#x20;types</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 1 time</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><Link to="/wiki/JS/TS/TS-Syntax/Type/Base-Type/Array/Tuple/Variadic-Tuple"><span>Variadic&#x20;Tuple</span></Link><span></span><CodeBlock language="tsx">{`type Numbers = [number, number]\ntype Strings = [string, string]`}</CodeBlock><span>&#x20;spread&#x20;type</span><CodeBlock language="tsx">{`type NumAndStr = [...Numbers, ...Strings]\n// [number, number, string, string]`}</CodeBlock><span>number&#x20;&#x26;&#x20;rest&#x20;parameter</span><CodeBlock language="tsx">{`type NumAndRest = [number, ...string[]];\n// [number, variable number of strings]`}</CodeBlock><span>&#x20;Spread&#x20;parameter&#x20;&#x26;&#x20;boolean</span><CodeBlock language="tsx">{`type SpreadAndBoolean = [...any[], boolean]\n// [variable number of any, boolean]`}</CodeBlock></cite></li></ol>
    
    </small></Tooltip>)
}