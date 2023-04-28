/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewiwZzqatv5SvvHJe6T(){
  return (<Tooltip
  id="preview__iwZzqatv5SvvHJe6T"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Story&#x20;Parameter</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>static&#x20;named&#x20;metadata&#x20;for&#x20;</span><Link to="/wiki/React/React-Stack/storybook/Story"><span>Story</span></Link><span>&#x20;to&#x20;control&#x20;beavior&#x20;of&#x20;</span><Link to="/wiki/React/React-Stack/storybook/Storybook-Addon"><code>Storybook Addons</code></Link><span>/core&#x20;features&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 1 time</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>add&#x20;</span><span ><span>Story&#x20;Parameter</span></span><span>&#x20;to&#x20;mock&#x20;remote&#x20;API&#x20;call</span><CodeBlock language="jsx">{`import { rest } from "msw"\nimport { MockedState } from "./TaskList.stories"\n\nexport const Default = Template.bind({})\nDefault.parameters = {\n  msw: {\n    handlers: [\n      rest.get(\n        "https://jsonplaceholder.typicode.com/todos?userId=1',\n        (req, res, ctx) => res(ctx.json(MockedState.tasks))\n      )\n    ]\n  }\n}`}</CodeBlock></cite></li></ol>
    
    </small></Tooltip>)
}