import React from "react"
import { Tooltip } from "react-tooltip"
import { id_to_plaintext, id_to_ref_mdx, id_to_tooltop } from "../utility"

function Preview(id: string, return_as_mdx?: boolean): string
function Preview(id: string, return_as_mdx?: boolean): JSX.Element
function Preview(id: string, return_as_mdx?: boolean) {
  // const tooltip_mdx = id_to_tooltop(id).trim()
  // const tooltip_id = `#tooltip__${id}`
  const tooltip_key = id_to_plaintext(id)
  const tooltip_value = id_to_plaintext(id)
  const ref_mdx = id_to_ref_mdx(id)
  const tooltip_id = `tooltip__${id}`

  if (!return_as_mdx)
    return (
      <>
        <Tooltip
          id={tooltip_id}
          place="top"
        >
          <div>
            <h1>
              <code>{tooltip_key}</code>
            </h1>
            {tooltip_value && <h2>{tooltip_value}</h2>}
          </div>
        </Tooltip>
        <Tooltip
          id={tooltip_id}
          place="bottom"
        >
          {ref_mdx ? (
            <div>
              ## References
              <ol>{ref_mdx.map((ref) => `<ul>${ref}</ul>\n`).join("")}</ol>
            </div>
          ) : (
            <div>No Refs</div>
          )}
        </Tooltip>
        <Tooltip
          id={tooltip_id}
          place="right"
        >
          <div>
            Tags: <code>TAG 1</code>
            <code>TAG 2</code>
            <code>TAG 3</code>
          </div>
        </Tooltip>
      </>
    )
  if (return_as_mdx)
    return `<>
  <Tooltip
    id=${tooltip_id}
    place="top"
  >
    <div>
      <h1>
        <code>${tooltip_key}</code>
      </h1>
      ${tooltip_value && <h2>{tooltip_value}</h2>}
    </div>
  </Tooltip>
  <Tooltip
    id=${tooltip_id}
    place="bottom"
  >
    ${
      ref_mdx ? (
        <div>
          ## References
          <ol>{ref_mdx.map((ref) => `<ul>ref</ul>\n`).join("")}</ol>
        </div>
      ) : (
        <div>No Refs</div>
      )
    }
  </Tooltip>
  <Tooltip
    id=${tooltip_id}
    place="right"
  >
    <div>
      Tags: <code>TAG 1</code>
      <code>TAG 2</code>
      <code>TAG 3</code>
    </div>
  </Tooltip>
</>`
}
export default Preview
