/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewQEMD5H8DHWRmrw55M(){
  return (<Tooltip
  id="preview__QEMD5H8DHWRmrw55M"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Hook</span></code><em>&#x20;aka&#x20;</em><code className="italic font-bold"><span>Hooks</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="/wiki/JS/JS-Language/JS-Syntax/Declaration/function/Specialized-Function"><span>Specialized&#x20;Function</span></Link><span>&#x20;</span><Link to="/wiki/JS/JS-Definition/Multi-paradigm/Paradigm/Functional-Programming"><code>Functionally</code></Link><span>&#x20;extends&#x20;</span><Link to="/wiki/React/React-Definition/Component-Based-Architecture/Component/FC"><span>FC</span></Link><span>&#x20;with&#x20;</span><Link to="/wiki/React/React-Definition/Component-Based-Architecture/Component/CC/declare-a-class-with-props/Lifecycle-Method"><span>Lifecycle&#x20;Method</span></Link><span>&#x20;&#x26;&#x20;persistent&#x20;</span><Link to="/wiki/React/React-Definition/Component-Based-Architecture/Component/state"><span>state</span></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 25 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>FC</span><span>&nbsp;↔&nbsp;</span><Link to="/wiki/JS/JS-Language/Object/Function/function"><span>function</span></Link><span>&#x20;to&#x20;return&#x20;</span><Link to="/wiki/Dev-tool/API/Interface/UI"><span>UI</span></Link><span>&#x20;via&#x20;</span><Link to="/wiki/React/React-API/JSX"><span>JSX</span></Link><span>.&#x20;Pass&#x20;</span><Link to="/wiki/React/React-Definition/Component-Based-Architecture/Component/props"><code>props</code></Link><span>for&#x20;dynamic&#x20;input.&#x20;add&#x20;</span><Link to="/wiki/React/React-Definition/Component-Based-Architecture/Component/state"><span>state</span></Link><span>&#x20;via&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Hook"><span>Hook</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>since&#x20;</span><span ><span>React&#x20;16</span></span><span>.8&#x20;</span><span ><span>FC</span></span><span>&#x20;with&#x20;</span><span ><span>Hook</span></span><span>s&#x20;are&#x20;more&#x20;powerful&#x20;than&#x20;</span><span ><span>CC</span></span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Purity</span><span>&nbsp;↔&nbsp;</span><span ><span>Hook</span></span><span>s&#x20;allow&#x20;easier&#x20;debug&#x20;</span><span ><span>Side&#x20;Effect</span></span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Testability</span><span>&nbsp;↔&nbsp;</span><span ><span>Hook</span></span><span>s&#x20;split&#x20;off&#x20;functionality&#x20;to&#x20;</span><span ><span>Unit&#x20;Test</span></span><span>&#x20;easier</span></cite></li><li><cite className="react-tooltip__ref-list"><b><em>!snippet&#x20;signature&#x20;for&#x20;</em></b><span ><span>FC</span></span><b><em>&#x20;with&#x20;</em></b><span ><span>Hook</span></span><CodeBlock language="tsx">{`function _MyComponent(props) {\n  const [value, setValue] = useState(initValue);\n  const [state, dispatch] = useReducer(reducer, initState);\n  \n  useEffect(()=>{\n    // Perform side effect\n  };\n  \n  return (\n    // Return some UI withs props\n    // ... and value & state from hooks\n  );\n};`}</CodeBlock></cite></li></ol>
    <Link to="/wiki/React/React-API/Hooks-API/Hook#references"><button className="react-tooltip__ref-link">
          View 20 more
        </button></Link>
    </small></Tooltip>)
}