import _ from "lodash"
import React from "react"
import { Tooltip } from "react-tooltip"
import { getTags } from "../../initDocs"
import {
  id_to_mdx,
  id_to_plaintext,
  id_to_ref_mdx,
  id_to_tooltop,
} from "../utility"

interface PreviewProps {
  id: string
  notMarkup?: boolean
}

export default function Preview({ id, notMarkup }: PreviewProps) {
  const tooltip_key = id_to_mdx(id, "key", { safe: true })
  const tooltip_value = id_to_mdx(id, "value", { safe: true }) || ""
  const ref_mdx = id_to_ref_mdx(id)
  const ref_arr = ref_mdx?.map((ref) => `<h6>\n\n${ref}</h6>`) || []
  const ref_l = ref_arr.length
  const ref_min = 3 < ref_l - 1 ? 3 : ref_l - 1
  const ref_top = ref_arr.slice(0, ref_min).join("")
  const ref_bot = ref_arr.slice(ref_min).join("")
  const is_ref_bot = ref_bot.length

  const tooltip_id = `preview__${id}`
  const tags =
    getTags(id)
      ?.map(
        (tag) =>
          `<Link to="/docs/tags/${_.kebabCase(tag)}"><code>${tag}</code></Link>`
      )
      .join("") || ""
  const num_tags = tags.length
  //! manually rendering to static markup since renderToStaticMarkup() is not working right...
  if (!notMarkup) {
    return `<>
  <Tooltip
    id="${tooltip_id}"
    place="top"
    clickable
  >
      <div><details class="w-3/4"><summary><h4>\n\n${tooltip_value}\n\n</h4><h5>${ref_l} References</h5><ol>${ref_top}</ol></summary><br/><ol>${ref_bot}</ol></details>
  </div></Tooltip>
  <Tooltip
    id="${tooltip_id}"
    place="right"
    clickable
  >
    <div>
      ${num_tags && `${num_tags} tags: `}${tags}
    </div>
  </Tooltip>
</>`
  }

  //? THIS DOESN'T WORK AND DOESN'T GET TRANSFORMED BY REACTDOMSERVER'S STATIC RENDER FN - EVEN WHEN THIS WAS LEFT AS AN ACTUAL FC
  return (
    notMarkup && (
      <>
        <Tooltip
          id={tooltip_id}
          place="top"
        >
          <dl>
            <dt>
              <code>{tooltip_key}</code>
            </dt>
            {tooltip_value && <dd>{tooltip_value}</dd>}
          </dl>
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
  )
}

/* Bad example below...
export function Preview_mdx(id: string, return_as_mdx?: boolean): string
export function Preview_mdx(id: string, return_as_mdx?: boolean): JSX.Element
export function Preview_mdx(id: string, return_as_mdx?: boolean) {
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
*/
