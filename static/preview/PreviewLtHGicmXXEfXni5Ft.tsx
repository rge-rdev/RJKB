/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewLtHGicmXXEfXni5Ft(){
  return (<Tooltip
  id="preview__LtHGicmXXEfXni5Ft"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>actions</code></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>mocked&#x20;callback&#x20;to&#x20;handle&#x20;storybook&#x20;behavior&#x20;via&#x20;actions&#x20;panel&#x20;in&#x20;storybook&#x20;UI&#x20;</span><Link to="storybook-concurrent-explorer"><span>Storybook&#x20;Concurrent&#x20;Explorer</span></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 1 time</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><code>sb&#x20;parameters</code><span>&nbsp;↔&nbsp;</span><span>to&#x20;control&#x20;storybook&#x20;feature/addon,&#x20;via&#x20;</span><Link to="actions"><code>actions</code></Link><span>&#x20;</span><CodeBlock language="jsx">{`import "../src/index.css" // import global css\n\nexport const parameters = {\n  actions: {  argTypesRegex: "^on[A-Z].*"},\n  controls: {\n    matchers: {\n      color: /(background|color)\$/i,\n      date: /Date\$/\n    }\n  }\n}`}</CodeBlock></cite></li></ol>
    
    </small></Tooltip>)
}