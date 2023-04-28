/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewCg7KEXrggoQ9DtPXG(){
  return (<Tooltip
  id="preview__Cg7KEXrggoQ9DtPXG"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>.storybook/preview.js</code></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>to&#x20;set&#x20;parameters&#x20;to&#x20;control&#x20;storybook&#x20;addon/feature&#x20;behavior,&#x20;actions</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 1 time</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>update&#x20;</span><span ><code>.storybook/preview.js</code></span><span>&#x20;to&#x20;init&#x20;</span><span ><span>Service&#x20;Worker</span></span><span></span><CodeBlock language="jsx">{`import { initialize, mswDecorator } from 'msw-storybook-addon'\n\ninitialize();\nexport const decorators = [mswDecorator];`}</CodeBlock><span>&#x20;</span></cite></li></ol>
    
    </small></Tooltip>)
}