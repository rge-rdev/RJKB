import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function Preview2oazDgptzQZ8utX43(){
  return (<Tooltip
  id="preview__2oazDgptzQZ8utX43"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>immer</code></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span></span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 1 time</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>Create&#x20;reducers&#x20;inside&#x20;newer&#x20;&#x22;slice&#x22;&#x20;in&#x20;</span><code>src/state/reducers</code><span>&#x20;
to&#x20;get&#x20;&#x22;slice&#x22;&#x20;of&#x20;state&#x20;-&#x20;define&#x20;initState&#x20;&#x26;&#x20;reducers
applies&#x20;</span><span ><code>immer</code></span><span>&#x20;so&#x20;now&#x20;can&#x20;mutate&#x20;state&#x20;directly!</span><CodeBlock language="tsx">{`import { createSlice } from "@reduxjs/toolkit"\nimport type { PayloadAction } from "@reduxjs/toolkit"\nimport { RootState } from "../store"\n\ninterface CounterState {\n  value: number\n}\n\nconst initialState: CounterState = {\n  value: 0,\n}\n\nexport const counterSlice = createSlice({\n  name: "counter",\n  // \`createSlice\` will infer the state type from the \`initialState\` argument\n  initialState,\n  reducers: {\n    increment: (state) => {\n      state.value += 1\n    },\n    decrement: (state) => {\n      state.value -= 1\n    },\n    // Use the PayloadAction type to declare the contents of \`action.payload\`\n    incrementByAmount: (state, action: PayloadAction<number>) => {\n      state.value += action.payload\n    },\n  },\n})\n\nexport const { increment, decrement, incrementByAmount } = counterSlice.actions\n\n// Other code such as selectors can use the imported \`RootState\` type\nexport const selectCount = (state: RootState) => state.counter.value\n\nexport default counterSlice.reducer`}</CodeBlock></cite></li></ol>
    
    </small></Tooltip>)
}