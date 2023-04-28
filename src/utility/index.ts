/**
 * Copyright(c) Roger Jiang
 */

import uniq from "lodash/uniq"
import escape from "lodash/escape"
import { RemData } from "../rem-json"
import {
  map,
  root_child_map,
  map_all_parents,
  getDoc,
  get_path_from_id,
  getRefIDs,
  isLeaf,
} from "../data"
import { Rem_obj, deleted_rem, portal_rem } from "../rem-json"
import { Render_Docs_BFS } from "../components/App"
import { uptime } from "process"
import { encode } from "he"
const { DOCS_BASE } = require("dotenv").config().parsed

/**
 * Fn to get DOCS_OBJECT[] from DOCS_ID_STRING[]
 *
 * Del ! assertion & add new error catch when fail to match ID
 * TODO FIX ! assertion
 *
 * @param list doc_id_string[]
 * @returns REM_OBJ[]
 */

export function get_rem_list(list: string[] = []) {
  const output = list.map((id) => map.get(id)!)
  if (!output) throw new Error(`Fail to find doc for ID in ${list}`)
  return output
}
// console.log(get_rem_list(["u4Xs622rawka7t4D3"])) // [{REM_OBJ}]

export function getChildDocList(_id: string): Rem_obj[] {
  const child_list = root_child_map.get(_id) // child_str[]
  const child_doc_list = get_rem_list(child_list) // child_obj[]

  return child_doc_list
}

export function getChildJSX(
  child_doc_list: (Rem_obj & deleted_rem & portal_rem)[]
) {
  const child_jsx = Render_Docs_BFS({ db_chunk: child_doc_list })
  return child_jsx
}

export function getKeyFromID(id?: string, mdx = true) {
  if (id === "root") return "root"
  if (!id) return "__NO_ID_MATCH_DB"
  const doc = getDoc(id)
  const doc_key = doc?.["key"] || []
  const doc_key_mdx = make_mdx(doc_key)
  // console.dir("doc=", doc)
  // console.log("doc['key']=", doc_key)
  // console.log("make_mdx(doc_key)=", doc_key_mdx)
  if (!doc) return "__NO_DOC_FOUND"
  return doc_key_mdx
  // if (doc) return mdx ? make_mdx(doc) : make_str(doc)
}
/**
 *
 * @param input aray of remData_objects to map over and
 * @returns array of
 */

export function make_str(input: RemData[] | []): string {
  let output_arr = input?.map((el: RemData) => obj_to_str(el))
  if (Array.isArray(output_arr)) return output_arr.join("")
  return output_arr
}

/*
export function id_to_mdx_BROKEN(
  id: string,
  key_type?: "key" | "value",
  config?: { safe: true }
) {
  const doc = getDoc(id)
  if (!doc) return
  const output = make_mdx(doc[key_type || "key"]!)

  return output
  if (!config) return output //! UNSAFE for mdx-loader & may cause docusaurus to go extinct! 🐱‍🐉😭
  if (!output) return
  const output_startsAsCodeblock = Boolean(
    output.match(/^\\n\\`\\`\\`/)?.length
  )
  const output_hasRegexLineBreaks = Boolean(output.match(/[\\n]+/)?.length)
  const output_startsIllegalJSKeywords = Boolean(
    output.match(/^(import|export) .+/gm)?.length
  )
  // <([A-z_0-9]+).*> Valid JSX starting tag
  // <([A-z_0-9]+).*>.*<\1( )+/> Valid JSX with Closing
  const output_hasValidJSXTags = Boolean(
    output.match(/<(.*)>.*<\1.*>/s)?.length
  )
  const output_hasAnyHTMLtags = Boolean(
    output.match(/\<[A-z{}[]= 1-9]*\>/)?.length
  )
  if (
    config?.safe &&
    output_startsIllegalJSKeywords &&
    !output_startsAsCodeblock
  ) {
    if (output_hasRegexLineBreaks) return `\`\`\`tsx\n${output}\n\n\`\`\``
    if (!output_hasRegexLineBreaks) return `\`${output}\``
    // assume & force tsx code block on codeblocks that omitted codeblock declaration
    // single quote escape for single liners with import/export JS code snippet
  }
}
*/

/**Regex Utility to Match `[`ANYTHING`](./)` | `[`ANYTHING`](/only-slugify)`
 *
 * @param str
 * @returns
 */

export function replace_link_to_key(str: string) {
  const re_link = /\[[`]+([.]*[^`]*)[`]+\]\((\.|\/)[a-zA-Z0-9-/]*\)/g
  return str.replace(re_link, "$1")
}

export function id_to_mdx(
  id: string,
  key_type?: "key" | "value",
  config?: { safe?: boolean; preview?: boolean; jsx?: boolean }
) {
  const safe = config?.safe
  const preview = config?.preview
  const jsx = config?.jsx
  const doc = getDoc(id)
  if (!doc) return
  if (doc.type === 6) return //! add new type to skip this mystery type - from my initial checks this appears to be some form of duplicate doc - as key type only - maybe used for tag system?

  if (safe && jsx) {
    if (!key_type || key_type === "key") {
      let key = make_mdx(doc.key, { id, preview, jsx })
      return key
    }
    if (key_type === "value") {
      if (!doc.value) return
      let value = make_mdx(doc.value, { id, preview, jsx })
      return value
    }
  }
  //refactor regex here
  // /<([a-z_]+)([^b]{1}|[^u]{1})(\/?)>/g, //? spot the error here - see how long it takes you!
  // /<[\/]?(([a-z_]+)([^b]{1}|[^u]{1}))[\/]?>/g, //? now spot why the next one is an improvement
  // /(?<!\`[ ]*)(([A-Za-z-_0-9\.]*)<[\/]?(([ac-tv-zAC-TV-Z\<\>_ ]{1})?([a-zA-Z0-9\<\>_ ]{2,})?)[\/]?>)(?![ ]*\`)/g //? dup [z] also should have grouped as ([ac-tv-zAC-TV-Z\<\>_ ]{1}?[a-zA-Z0-9\<\>_ ]{2,})? - was letting <b> slip past...
  let re_unsafe_jsx =
    /(?<!`[ ]*)(([A-Za-z-_0-9\.]*)<[/]?(([!ac-tv-zAC-TV-Z<>_ ]{1}?(?:[a-zA-Z0-9<>_ ]{1,})?)?)[/]?>)(?![ ]*`)/g
  // added ! to catch <!DOCTYPE html> which slipped through!
  //? How to make this simpler?! need to match all types of JSX & TS Angle notation EXCLUDING <b></b> & <u></u> //! Also must account for extra whitespace before & after backticks in assertions // is it necessary to keep <B> <U> etc as well?

  //prettier-ignore
  // const re_link_preview_mdx = /\[<span data-tooltip-id="preview__[a-zA-Z0-9]+">(.*)<\/span>]\((\.\/|\/[a-zA-Z-]+[a-zA-Z-/]+)\)\n/g //? $1 = link_content $2 = path //use as delimiter

  if (preview)
    re_unsafe_jsx =
      /(?<!(?:!?`[ ]*|\[<span data-tooltip-id="preview__[a-zA-Z0-9]+">.*<\/span>]\(|[ \n]*```(?:ts(?:x)?|js(?:x)?).*))((?:[A-Za-z-_0-9\.]*)<[/]?(?:[ac-tv-zAC-TV-Z<>_ ]{1}?[a-zA-Z0-9<>_ ]{2,})?[/]?>)(?!(?:[ ]*`|<span data-tooltip-id="preview__|(?:<\/span>)?\]\((?:\.|\/)))/gs
  // /(?<!(\`[ ]*|\[<span data-tooltip-id="preview__[a-zA-Z0-9]+">.*<\/span><\/>]\(|[ \n]*\`\`\`(ts(x)?|js(x)?).*))(([A-Za-z-_0-9\.]*)<[\/]?(([ac-tv-zAC-TV-Z\<\>_ ]{1}?[a-zA-Z0-9\<\>_ ]{2,})?)[\/]?>)(?!([ ]*\`|<span data-tooltip-id="preview__|(<\/span>)?(<\/>)?\]\((\.|\/)))/gs //! This missed out on capturing groups!
  // /.*(?=\[<span data-tooltip-id="preview__[a-zA-Z0-9]+">(.*)<\/span><\/>]\((\.\/|\/[a-zA-Z-]+[a-zA-Z-\/]+)\)\n)|(?<=\[<span data-tooltip-id="preview__[a-zA-Z0-9]+">(.*)<\/span><\/>]\((\.\/|\/[a-zA-Z-]+[a-zA-Z-\/]+)\)\n).*/g
  // /(?<!\`( )*)(([A-Za-z-_0-9\.]*)<[\/]?(([ac-tv-zzAC-TV-Z\<\>_ ]{1})?([a-zA-Z\<\>_ ]{2,})?)[\/]?>)(?!( )*\`)/g //! this misses <h1>! ALSO critical mistake to use ( )* as it changed to $1 position!!
  // /(?<!\`)(([A-Za-z-_0-9\.]*)<[\/]?([ac-tv-zzAC-TV-Z\<\>_ ]+)[\/]?>)(?!\`)/g
  // /(?<!\`)(?<=)([a-zA-Z-_0-9\.]*)<[\/]?(([a-z_]+)([^b]{1}|[^u]{1}))[\/]?>(?!\`)/g //! yuck this is some horric looking regex - but it is quite necessary for preventing Docusaurus' mdx-loader from breaking - the DX from this perspective has been horrendous... the extra escapes to html tags can ALSO break things.
  //! Add ([a-zA-z-_0-9\.]*) to match anything before angle bracket notation ie React.FC<ChildProps>
  //! TYPO a-zA-z WRONG should be a-zA-Z

  const re_unsafe_unicode = /\\x|\\u/
  let key = make_mdx(doc.key, { id, preview })
  if (key.match(re_unsafe_unicode)?.length) {
    if (!preview) {
      key = `<code><span>&#92;</span>${key.slice(2, -1)}</code>`
      //! &#47; instead of // in mdx - prevents mdx-loader parse error
      //all unicode containing text is already wrapped in ` backticks
      //! wrapping / backslash with span fixes mdx-loader parse fail
      return key
        .replace(/(?<!`)`{2}(?!`)/g, "`") // dedup 2x backticks only
        .replace(/\[`[ ]+/g, "[`") //trim whitespace aft opening backtick
        .replace(/[ ]+`]/g, "`]") // trim whitespace bef closing backtick
    }
  }
  //! FIX codeblock title
  const has_multiple_codeblocks = /```([a-z]+)\n(?=.*```\n\n)/gs
  if (key.match(has_multiple_codeblocks)?.length === 1) {
    //! ONLY shift preceding text into codeblock title position if it is the only codeblock
    const re_has_codeblock_title = /(.*)(?=```([a-z]+))(```([a-z]+)(?=\n.*))/s
    // match ANYTHING before any generic codeblock type -
    // TODO: replace [a-z]+\n with code list instead OR safe to leave as vague?
    if (key.match(re_has_codeblock_title)?.length) {
      key = replace_link_to_key(key)

      const re_prefix_quotes = /"(?=.*```([a-z]+))/gs
      const re_prefix_backticks = /`{1}(?=.*```([a-z]+))/gs //! don't omit preceding ```codeblock!
      const re_prefix_newline_whitespace = /( )*\n( )*(?=.*```([a-z]+))/gs

      key = key
        .replace(re_prefix_quotes, "'") // replace all double quotes in codeblock prefix title as single quote
        .replace(re_prefix_backticks, "") // omit all backticks in codeblock title as it breaks mdx-loader or codeblock FC somehow
        .replace(re_prefix_newline_whitespace, "") // replace all newlines+whitespace in codeblock title
        .replace(re_has_codeblock_title, '$3 title="$1"')
        .replace(/[\n ]+"$/m, '"') // trim whitespace after code title AND add extra \newline
      // .replace(re_has_codeblock_prefix, "")
      // .replace(re_has_codeblock_title, "")

      //clean broken links
    }
  } else if (key.match(has_multiple_codeblocks)?.length === 2) {
    const re_text_between_codeblock = /(?<=```\n\n)(.*)(?=\n\n```[a-z]+)/
    let text_between_codeblocks = key.match(re_text_between_codeblock)?.shift()
    const middle_str_unsafe_jsx = text_between_codeblocks?.match(re_unsafe_jsx)
    if (middle_str_unsafe_jsx) {
      //@prettier-ignore
      text_between_codeblocks = text_between_codeblocks?.replace(
        re_unsafe_jsx,
        "`$1`"
      )
      if (text_between_codeblocks)
        key = key.replace(re_text_between_codeblock, text_between_codeblocks)
    }
  }

  const regex_unsafe_html = /(<![a-zA-Z ]+>)/

  if (!key_type || key_type === "key") {
    if (!safe) return key
    if (config.safe)
      return key
        .replace(re_unsafe_jsx, "`$1`") //
        .replace(regex_unsafe_html, "`$1`")
        .replace(/(?<!`)`{2}(?!`)/g, "`") // dedup backticks
        .replace(/\[`[ ]+/g, "[`") // trim aft backtick
        .replace(/[ ]+`]/g, "`]") // trim bef backtick
    //✅ fixed <html_tag> breaking mdx - may need to expand regex rule further
  }
  if (key_type === "value") {
    if (!doc.value) return
    if (!safe) return make_mdx(doc.value, { id, preview })
    if (config.safe) {
      let value = make_mdx(doc.value, { id, preview })
      const re_starts_with_breaking_import_export_keyword =
        /^(?:(?: )*(export|import))(?= +)/
      return (
        value
          .replace(re_starts_with_breaking_import_export_keyword, "`$1`")
          // .replace(/^(export|import) /, `$1`)
          .replace(regex_unsafe_html, "`$1`")
          .replace(re_unsafe_jsx, "`$1`")
          .replace(/(?<!`)`{2}(?!`)/g, "`")
          .replace(/\[`[ ]+/g, "[`")
          .replace(/[ ]+`]/g, "`]")
      )
    }
  } // TODO: fix assertion here
}
export function id_to_plaintext(id: string, key_type?: "key" | "value") {
  const doc = getDoc(id)
  if (!doc) return
  if (doc.type === 6) return //! add new type to skip this mystery type - from my initial checks this appears to be some form of duplicate doc - as key type only - maybe used for tag system?
  if (!key_type || key_type === "key") return make_plaintext(doc.key)
  if (key_type === "value") return make_plaintext(doc.value!) // TODO: fix assertion here
}
export function id_to_tags(id: string) {
  const doc = getDoc(id)
  if (!doc) return
  if (doc.type === 6) return //! add new type to skip this mystery type - from my initial checks this appears to be some form of duplicate doc - as key type only - maybe used for tag system?
  // const tag_illegal_unicode = /\\(?=u|x)/g
  let key = make_plaintext(doc.key)
    ?.replace(/(?<!\\)"/g, "\\\\'") // MAKE EVERYTHING INSIDE SINGLE QUOTE
    .replace(/(?<!\\)'/g, "\\\\'")
    .trim()
    .replace(/(?<!\\+)\\(?!ux)/g, "\\\\")
    .replace(/(?<!\\+)\\(?=ux)/g, "\\u005C\\u2028C")
    .replace(/(?<!\\+)\\{3,}/g, "\\\\")
  // if (key?.match(tag_illegal_unicode)?.length)
  // key = key?.replace(tag_illegal_unicode, "\\\\u005C\\\\u2028")
  if (!key) return
  let output = [key]
  if (!doc.value) return output
  const value = doc.value
  // if (value.length === 1) {
  //   const single_value = value
  //     .pop()
  //     ?.replace(/(?<!\\)"/g, '\\\\"')
  //     .replace(/(?<!\\)'/g, "\\\\'")
  //   if (typeof single_value === "string") {
  //     const final_string = output.concat(single_value)
  //     return final_string
  //   }
  // }
  // output.push(value) //! mistake .push returns a NUMBER!
  let link_ids: string[] = []
  if (typeof value === "object") {
    value.forEach((el) => {
      if (
        typeof el !== "string" &&
        el["i"] === "q" &&
        el["_id"] &&
        el["_id"] !== "2n8Gw7PvXGPcFQm7i"
        // && !el["aliasId"]
      ) {
        // add aliases
        const link_id = el["_id"]
        const link_plaintext = id_to_plaintext(link_id)
          ?.replace(/\\"/g, '\\"')
          .replace(/\\'/g, "\\'")

        //! replace any unescaped single or double quotes with \ (via \\)! to avoid tag breaking yaml tags & keywords
        if (!link_plaintext) return
        link_ids.push(link_plaintext)
      }
    })
    return link_ids
  }
}
// export function id_to_refs(id: string) {
//   const doc = getDoc(id)
//   if (!doc) return
//   const key = make_plaintext(doc.key)
//   let output = [key]
//   if (!doc.value) return [key]
//   const value = doc.value
//   if (typeof value === "string") return output.push(value)
//   let link_ids = []
//   if (typeof value === "object") {
//     const links = value.forEach((el) => {
//       if (
//         typeof el !== "string" &&
//         el["i"] === "m" &&
//         el["qId"]?.crt?.b?.u?.s
//       ) {
//         link_ids.push()
//       }
//     })
//   }
// }

/**MDX version of make_str
 *
 * @param input array of remData_objects to map over and
 * @returns array of
 */

export function make_mdx(
  input: RemData[] | [],
  config?: { id?: string; preview?: boolean; jsx?: boolean }
): string {
  const { id, preview, jsx } = config || {}
  if (!Array.isArray(input)) {
    console.log("BROKEN!!", `${id}`)
    return "__BROKEN__"
  }
  let output_arr = input?.map((el: RemData) =>
    obj_to_mdx(el, undefined, { preview, id, jsx })
  )
  if (Array.isArray(output_arr)) {
    const output_str = output_arr.join("")
    return output_str
  }
  return `__FATAL__ERROR__REACHED__AT__ID__${id}`
}

/** PLAINTEXT version of make_str
 *
 * @param input aray of remData_objects to map over and
 * @returns array of
 */

export function make_plaintext_OLD(input: RemData[] | []) {
  let output_arr = input?.map((el: RemData) => obj_to_plaintext(el))
  if (Array.isArray(output_arr)) return output_arr.join("")
  return output_arr
}
export function make_plaintext(input: RemData[] | []) {
  let output_arr = input?.map((el: RemData) => obj_to_plaintext(el))
  if (Array.isArray(output_arr)) return output_arr.join("")
  if (!output_arr) return ""
}
export function make_plaintext_BROKE(input: RemData[] | []) {
  let output_arr = input?.map((el: RemData) => obj_to_plaintext(el)) || ""
  if (output_arr.length > 0) {
    const output_str = output_arr.join("")
    if (output_str.search(/[A-z]/g)) return output_str // Rmove empty strings
    return ""
  }
  if (typeof output_arr === "string") return output_arr
  return output_arr.join("AAAAAAAAAAAA")
}

/**
 * refactor this to export JSX
 *
 * @param el
 * @param input_str
 * @returns RAW_JSX_STRING to dangerously insert into HTML!!
 */

export function obj_to_str(el: RemData, input_str = ""): string {
  let output_str: string = input_str

  if (typeof el === "string") output_str += el
  if (typeof el === "object") {
    if (el["i"]) {
      if (el["i"] === "o") {
        output_str += `[[CODE=${el["language"]}]]<br><code lang=${
          el["language"]
        }>${escape(el["text"])}</code>`
      }
      if (el["i"] === "m") {
        if (el["qId"]) {
          const qId_href = map.get(el["qId"])?.crt?.b?.u?.s
          output_str += `${
            el["qId"] ? `<a href=${qId_href}>${escape(el["text"])}</a>` : ""
          }`
        }
        // href found at el["qId"] = _id at crt.b.s
        output_str += `${el["q"] ? "<code>" : ""}` // Ref Rem
        output_str += `${el["b"] ? "<b>" : ""}` // bold
        // output_str += `${el["b"] ? "**" : ""}`; // bold md
        output_str += `${el["u"] ? "<u>" : ""}` // underline
        output_str += `${el["l"] ? "<i>" : ""}`
        output_str += `${el["cId"] ? `{{<mark id='#${el["cId"]}'>` : ""}` // Cloze
        output_str += `${el["q"] ? `${escape(el["text"])}` : `${el["text"]}`}`
        output_str += `${el["cId"] ? "</mark>}}" : ""}`
        output_str += `${el["l"] ? "</i>" : ""}`
        output_str += `${el["u"] ? "</u>" : ""}`
        output_str += `${el["b"] ? "</b>" : ""}`
        output_str += `${el["q"] ? "</code>" : ""}`
      }
      if (el["i"] === "q") {
        if (!el["textOfDeletedRem"]) {
          const find_doc = map.get(el["_id"])
          const find_key = find_doc?.key!

          output_str += `[[<a href="#${el["_id"]}">${make_str(find_key)}</a>]]`
        }
        if (el["textOfDeletedRem"]) {
          output_str += `<del id=#${el["_id"]}>${make_str(
            el["textOfDeletedRem"]
          )}</del>`
        }
      }
      //`files/`
      if (el["i"] === "i") {
        output_str += `<img src=${(el["url"] as string).replace(
          `%LOCAL_FILE%`,
          `files/`
        )} height=${el["height"] * el["percent"] * 0.01} width=${
          el["width"] * el["percent"] * 0.01
        } loading="lazy"/>`
      }
    }
  }

  return output_str
}

/**
 *
 * @param el
 * @param input_str
 * @returns string of plaintext = guard clause returns "" empty string
 */

export function obj_to_plaintext(el: RemData, input_str = "") {
  let output_str: string = input_str

  if (typeof el === "string") output_str += el
  if (typeof el === "object") {
    if (el["i"]) {
      if (el["i"] === "o") return "" // if code
      if (el["i"] === "m") {
        if (el["qId"]) {
          // OMIT LINKS FOR PLAINTEXT
          // const qId_href = map.get(el["qId"])?.crt?.b?.u?.s
          output_str += "" //`${el["qId"] ? `${el["text"]}` : ""}` // just show plaintext for reference link
        }
        output_str += `${el["q"] ? `${el["text"]}` : `${el["text"]}`}`
      }
      if (el["i"] === "q") {
        if (!el["textOfDeletedRem"]) {
          const find_doc = map.get(el["_id"])
          const find_key = find_doc?.key!

          output_str += `${make_plaintext(find_key)}` // ignore link - just show text
        }
        if (el["textOfDeletedRem"]) {
          output_str += `${make_plaintext(el["textOfDeletedRem"])}` // show plaintext of deleted doc
        }
      }
      if (el["i"] === "i") return "" // ignore iamges
    }
  }

  return output_str
}

/**
 *
 */

export function resolve_lang_mdx(lang: string) {
  switch (lang) {
    case "typescript":
      return "tsx"
    case "javascript":
      return "jsx"
    case "json":
      return "json"
    case "powershell":
      return "bash"
    case "bash":
      return "bash"
    case "css":
      return "css"
    case "html":
      return "jsx"
    case " -- None -- ":
      return "markup"
    case "tx":
      return "markup"
    case "null":
      return "markup"
    case null:
      return "markup"
    case "yaml":
      return "tsx"
    case "go":
      return "go"
  }

  //! alert which lang is missing - cut from final build

  return alert(`FAIL to resolve lang for: ${lang}`)
}

/**
 * MDX output version of obj_to_str
 *
 * FATAL missing string wrap over id of <mark> spotted from Docusaurus build throw
 *
 * MOVE MDX import statements to global MDX scope
 *
 * if "i" === "q"
 *
 * Adding internal check to see if < > is used
 *
 * ✅ Output <Image> ideal image instead of markdown image
 *
 */

// export const Aliases_UID = "2n8Gw7PvXGPcFQm7i"
export const map_all_link_ids: Map<string, string[]> = new Map()
export function getLinkIds(id: string) {
  return map_all_link_ids.get(id)
}
const checked_id_for_links: Set<string> = new Set()

function setLinkIDtoMap(set_id: string, link_id: string) {
  const visited = checked_id_for_links.has(set_id)
  if (visited) return
  const curr_link_ids = map_all_link_ids.get(set_id)
  if (!curr_link_ids) {
    map_all_link_ids.set(set_id, [link_id])
    checked_id_for_links.add(set_id)
  }
  if (curr_link_ids && !curr_link_ids.find((link) => link === link_id)) {
    map_all_link_ids.set(set_id, [...curr_link_ids, link_id])
    checked_id_for_links.add(set_id)
  }
}

/**Using this function breaks docusaurus due to requiring node process to run in client?!
 * That means docusaurus is deferring FC rendering to client - is this a bug or intended feature of mdxjs?
 *
 * @param preview_ids_arr
 * @returns
 */
/*
export function getAllPreviewMDX(preview_ids_arr: string[]) {
  const all_preview_ids = preview_ids_arr
    .map((id_with_link) => {
      const link_ids_arr = map_all_link_ids.get(id_with_link)
      if (!link_ids_arr) return []
      return link_ids_arr
    })
    .flat()
  const dedup_preview_ids = uniq(all_preview_ids)
  //! MUST RENAME FILE TO .tsx TO MAKE JSX WORK!!
  const output_all_preview_mdx = dedup_preview_ids
    // .map((link_id) => renderToStaticMarkup(<Preview id={link_id} />))
    // .map((link_id) => renderToString(<Preview id={link_id} />))
    .map((link_id) => Preview({ id: link_id }))
  // .join("\n")

  return output_all_preview_mdx
}
*/
/**Using this function breaks docusaurus due to requiring node process to run in client?!
 * That means docusaurus is deferring FC rendering to client - is this a bug or intended feature of mdxjs?
 *
 * @param preview_ids_arr
 * @returns
 */
export function getAllPreviewMDX_BROKEN_CLIENT(preview_ids_arr: string[]) {
  const all_preview_ids = preview_ids_arr
    .map((id_with_link) => {
      const link_ids_arr = map_all_link_ids.get(id_with_link)
      if (!link_ids_arr) return []
      return link_ids_arr
    })
    .flat()
  const dedup_preview_ids = uniq(all_preview_ids)
  const output_all_preview_mdx = dedup_preview_ids
    .map((link_id) => `<Preview id="${link_id}"/>`)
    .join("\n")
  return output_all_preview_mdx
}

export function escapeTextInJSX(text: string) {
  return encode(text)
    .replace(/\{/g, "&#x7B;")
    .replace(/\}/g, "&#x7D;")
    .replace(/ {1,}/g, "&#x20;")
}

export function obj_to_mdx(
  el: RemData,
  input_str = "",
  config?: { id?: string; preview?: boolean; jsx?: boolean }
) {
  const { id, preview, jsx } = config || {}
  let output_str: string = input_str

  if (typeof el === "string")
    output_str += jsx
      ? `<span>${escapeTextInJSX(el)}</span>`
      : // ?  `<span>${encode(el)}</span>`
        // `<span>${encode(el, { encodeEverything: true })}</span>`
        // `<span>${escape(el).replace(/^ {1,}| {1,}$/g, "&nbsp;")}</span>`
        el
  if (typeof el === "object") {
    if (el["i"]) {
      if (el["i"] === "o") {
        // "o" for Object | Outside Code?
        // ${escape(el["text"])}\n

        if (typeof el["text"] === "string") {
          if (!jsx)
            output_str += `\n\n\`\`\`${resolve_lang_mdx(el["language"])}\n${(
              el["text"] as string
            ).trim()}\n\`\`\`\n`
          if (jsx)
            output_str += `<CodeBlock language="${resolve_lang_mdx(
              el["language"]
            )}">{\`${(el["text"] as string)
              .replace(/(?<!\\)`/g, "\\`") //! MUST escape backticks inside <CodeBlock> else will throw!
              .replace(/\$/g, "\\$") //! MUST escape $ inside <CodeBlock> else Docusaurus will near end of prod build - BUT NOT in client dev build?!
              .trim()
              .replace(/\n/gs, "\\n")}\`}</CodeBlock>` //! THIS WAS A CRITICAL SILENT && UNDOCUMENTED? BUG - all new lines in plaintext code must have explicit \n
        }
      }
      if (el["i"] === "m") {
        // "m" for MarkDown?
        if (el["qId"]) {
          const qId_href = map.get(el["qId"])?.crt?.b?.u?.s
          output_str += `${el["i"] === "m" ? (jsx ? "<q>" : "`") : ""}` // Ref HYPERLINKS
          output_str += `${
            el["qId"]
              ? // ? `\n<a href="${qId_href}">${escape(el["text"])}</a>`
                jsx
                ? `\n<Link to="${qId_href}">${escapeTextInJSX(
                    el["text"]
                  )}</Link>`
                : `\n<a href="${qId_href}">${escape(el["text"])}</a>`
              : ""
          }`
          output_str += `${el["i"] === "m" ? (jsx ? "</q>" : "`") : ""}` // Ref Rem
        }
        //check if el["text"] contains angle brackets <> and does not have el["q"] set true

        const dumb_that_js_cant_add_negative_indexes =
          (el["text"] as string).length - 1
        let force_q = false
        if (
          (!el["q"] &&
            el["text"][0] === "<" &&
            el["text"][dumb_that_js_cant_add_negative_indexes]) ||
          // !escape reserved JS operators - which ends up breaking MDX!!
          el["text"] === "import"
        )
          force_q = true
        const raw_text: string = el["text"] ? el["text"] : ""
        // const only_space = raw_text.match(/[^ \n\t]*/)
        // if (/\S/.test(raw_text)) {
        if (el["text"] && raw_text.trim()?.length) {
          //! add prototype test to skip style wrap for blank space - mdx loader is breaking when multiple tags next to each other only wrapping whitespace !
          // href found at el["qId"] = _id at crt.b.s
          output_str += `${el["b"] ? (jsx ? "<b>" : "**") : ""}` // bold
          //! <b> messes up mdx-loader if used at start line and then use a mdx link directly after ?!
          //! switch back to ** to avoid dealing with this - whitespace skip should prevent bugs from multiple ** appearing next to each other... hopefully
          // output_str += `${el["b"] ? "**" : ""}`; // bold md
          output_str += `${el["u"] ? (jsx ? "<u>" : "") : ""}` // underline //! OMIT <u> or even __ - MDX SUCKS with too many quirks and parsing
          output_str += `${el["l"] ? (jsx ? "<em>" : "_") : ""}` // mixing * with ** and _ and __ breaks things majorly?!
          // output_str += `${el["cId"] ? `<mark id='#${el["cId"]}'>` : ""}` // OMIT ID for Cloze card - feat not added yet
          //! skip <mark> for cloze cards - not a feature needed now - also messes up code snippets in mdx code view
          //! TODO: add function to remove <mark> from code snippets - but only do this when cloze/spoiler tags actually needed
          // output_str += `${el["cId"] ? `<mark>` : ""}` // id to Cloze cId
          // output_str += `${el["q"] ? `${escape(el["text"])}` : `${el["text"]}`}`
          // output_str += jsx ? `${escape(el["text"])}` : `${el["text"]}`
          output_str += `${el["q"] || force_q ? (jsx ? "<code>" : "`") : ""}` // Ref Rem //! MOVE ` backtick to inside to avoid stupid MDX parsing other styles wrong (sometimes?!)
          output_str += jsx
            ? `${escapeTextInJSX(el["text"])}`
            : // ? `${encode(el["text"], { encodeEverything: true })}`
              `${el["text"]}`
          output_str += `${el["q"] || force_q ? (jsx ? "</code>" : "`") : ""}` //! MOVE ` backtick to inside to avoid stupid MDX parsing other styles wrong (sometimes?!)
          // output_str += `${el["cId"] ? "</mark>" : ""}`
          output_str += `${el["l"] ? (jsx ? "</em>" : "_") : ""}`
          output_str += `${el["u"] ? (jsx ? "</u>" : "") : ""}` //! OMIT <u> or even __ - MDX SUCKS with too many quirks and parsing
          output_str += `${el["b"] ? (jsx ? "</b>" : "**") : ""}`
        } else {
          output_str += ""
        }
      }
      if (el["i"] === "q") {
        if (!id) return ""
        const leaf = isLeaf(id)
        const tag = leaf ? "span" : "Link"
        if (el["aliasId"]) {
          //! Rename to alias_id && doc_id_ref_by_alias to avoid future confusion!
          const alias_id = el["aliasId"] // look up alternative key for aliasId
          //! aliasId doesn't seem to link to any docs - perhaps used as ref handle for some other purpose?
          // const aliasKey = map.get(aliasId)?.["key"] || "__ERROR_NO_ALIAS_KEY" //! fallback to original key if no alias key was found
          // const aliasKey = map.get(aliasId)?.["key"] || false //"__ERROR_NO_ALIAS_KEY" //! fallback to original key if no alias key was found
          // const aliasId_mdx = id_to_mdx(aliasId)
          const original_doc_id_ref_by_alias = el["_id"] //! MISTAKE to refer to this for alias key - this is the ORIGINAL doc that the alias ref to
          let aliasKey = id_to_mdx(alias_id)
          let alias_path = get_path_from_id(alias_id)
          const original_doc_key = id_to_mdx(original_doc_id_ref_by_alias)
          let original_doc_path = get_path_from_id(original_doc_id_ref_by_alias)
          let redirect_path =
            aliasKey && aliasKey !== original_doc_key
              ? // ? `${original_doc_path}?alias=${aliasKey}` // ?alias= query params might be screwing up scraping dups
                `${original_doc_path}`
              : original_doc_path

          if (alias_path)
            alias_path = alias_path
              ?.split("/")
              .slice(0, -2) //! recall end is up to but NOT INCLUDING
              .concat(alias_path?.split("/").slice(-1))
              .join("/")
          if (!aliasKey) {
            // console.log(
            //   `Could not find aliasKey for aliasId: ${alias_id} - ref to doc ID: ${original_doc_id_ref_by_alias} ${id_to_plaintext(
            //     original_doc_id_ref_by_alias
            //   )} <- will assign this original doc key as fallback`
            // )
            aliasKey = id_to_mdx(original_doc_id_ref_by_alias)
            alias_path = get_path_from_id(original_doc_id_ref_by_alias)
            // process.exit()
          }

          // const alias_mdx = make_mdx(alias_id) //!! THIS WAS THE BREAKING BUG!
          // output_str += `__ALIAS=${aliasId} - __ALIASKEY=${aliasKey} typeof __typealiasKey=${typeof aliasKey}`
          if (!original_doc_path) return ""
          if (!alias_path) return ""
          if (!preview) {
            output_str += jsx
              ? `<${tag} ${
                  leaf ? "" : `to="${redirect_path}"`
                }><code>${aliasKey}</code></${tag}>`
              : `[\`${aliasKey}\`](${redirect_path})`
            //! DEPRECATE <REDIRECT>
            // ? `<Link to="${alias_path}"><code>${aliasKey}</code></Link>`
            // : `[\`${aliasKey}\`](${alias_path})`
            return output_str // exit early once alias found
          } else if (preview) {
            const id_tooltip = `preview__${original_doc_id_ref_by_alias}`
            output_str += jsx
              ? `<${tag} ${
                  leaf ? "" : `to="${redirect_path}"`
                }><span data-tooltip-id="${id_tooltip}">${aliasKey}</span></${tag}>`
              : `[<span data-tooltip-id="${id_tooltip}">${aliasKey}</span>](${redirect_path})`
            //! DEPRECATE <REDIRECT>
            // ? `<Link to="${alias_path}"><span data-tooltip-id="${id_tooltip}">${aliasKey}</span></Link>`
            // : `[<span data-tooltip-id="${id_tooltip}">${aliasKey}</span>](${alias_path})`
            if (id) setLinkIDtoMap(id, original_doc_id_ref_by_alias)
            return output_str
          }
          // output_str += `__ALIAS=${aliasId} - __ALIASKEY=${aliasKey} typeof __typealiasKey=${typeof aliasKey}`
          //TODO: get key from aliasId
        }
        const el_id = el["_id"] //? presumably stands for "element" ID? or maybe element link ID?
        if (el_id === "2n8Gw7PvXGPcFQm7i") output_str += "" // "__Aliases"
        // if (!el["textOfDeletedRem"]) {
        if (el_id !== "2n8Gw7PvXGPcFQm7i") {
          const find_doc = map.get(el_id) // return doc obj for link
          const find_key = find_doc?.key!

          const path = get_path_from_id(el_id)
          if (!path) return "" // early return for empty string - to eliminate linked TAGS or "powerups" from non-main DB

          if (!preview) {
            output_str += jsx
              ? `<${tag} ${leaf ? "" : `to="${path}"`}>${make_mdx(find_key, {
                  id: el_id,
                  jsx: true,
                })}</${tag}>`
              : `[\`${make_mdx(find_key)}\`](${path})`
          } else if (preview) {
            const id_tooltip = `preview__${el_id}`
            output_str += jsx
              ? `<${tag} ${
                  leaf ? "" : `to="${path}"`
                }><span data-tooltip-id="${id_tooltip}">${make_mdx(
                  find_key
                )}</span></${tag}>`
              : `[<span data-tooltip-id="${id_tooltip}">${make_mdx(
                  find_key
                )}</span>](${path})`
            if (id) setLinkIDtoMap(id, el_id)
          }
          // output_str += `[[<a href="#${el_id}">${make_mdx(find_key)}</a>]]`
        }
        if (el["textOfDeletedRem"]) {
          output_str += `<del id=#${el_id}>${make_mdx(
            el["textOfDeletedRem"]
          )}</del>`
        }
      }
      //`files/`
      if (el["i"] === "i") {
        //! w/o metadata can't think of a better alt name than simply "image"
        // const p = el["percent"] / 100
        // const w = el["width"] * p
        // const h = el["height"] * p
        // TODO: use w & h with ideal-image
        //prettier-ignore
        const static_img_path = (el["url"] as string).replace(`%LOCAL_FILE%`,`@site/static/files/`)
        //prettier-ignore
        output_str += `\n![image](${(el["url"] as string).replace(`%LOCAL_FILE%`,`@site/static/files/`)})\n`
        // output_str += `\n<Image img={require('${static_img_path}')} />\n` //! IdealImage SUCKS - increases file-size for same image at LOWER res - also can't handle svg files properly
      }
    }
  }

  return output_str
}

// KWSN4xHJXyvxWX2Px = Sources

/**to get string_ID[] from current node ID position
 *
 * @param id input ID to start parent search
 * @returns id_string[] - 0 index - root up to leaf
 * // BAD IDEA 0 index from leaf node - going up index to root parent
 */

export function getParentPathIDsArray(id: string) {
  return map_all_parents.get(id)
}
// console.log(getParentPathIDsArray("T7aDaHT9qwQDRrAHZ"))
// console.log("CSS ID=", get_rem_list(["35nBdhDNJLwCCyz6A"]))

const colors = {
  blue: [34, 89],
  yellow: [33, 89],
  red: [31, 89],
  cyan: [36, 89],
  green: [32, 89],
  magenta: [35, 89],
  white: [37, 89],
  gray: [30, 89],
  redBright: [91, 39],
  greenBright: [92, 39],
  yellowBright: [93, 39],
  blueBright: [94, 39],
  magentaBright: [95, 39],
  cyanBright: [96, 39],
  whiteBright: [97, 39],
}

type colorType =
  | "blue"
  | "yellow"
  | "red"
  | "cyan"
  | "green"
  | "magenta"
  | "white"
  | "gray"
  | "redBright"
  | "greenBright"
  | "yellowBright"
  | "blueBright"
  | "magentaBright"
  | "cyanBright"
  | "whiteBright"

/**Custom CLI color text formatter
 * will map to colors object
 *
 * @param text
 * @param c
 * @returns
 */

export function colorText(text: string, c: colorType) {
  const a = colors[c][0] + "m"
  const b = colors[c][1] + "m"
  return `\x1b[${a}${text}\x1b[${b}`
}

export async function LOG_CLI_PROGRESS_RAW( //RAW COLOR TEXT
  i: number,
  length: number,
  element: string,
  task: string,
  progress: string,
  completed: string,
  init_time: number
) {
  process.stdout.write(
    `\x1b[95m${i < length - 1 ? progress : completed}:\x1b[39m \x1b[96m${(
      (100 * (i + 1)) /
      length
    ).toPrecision(
      3
    )}%\x1b[39m of \x1b[93m${task}\x1b[39m for \x1b[92m${i}\x1b[39m \x1b[95m${element}\x1b[39m ${
      i === length - 1
        ? `in \x1b[91m${(uptime() - init_time).toPrecision(3)}s\x1b[39m ⏱\n\n`
        : ""
    }`
  )

  process.stdout.clearLine(1)
  process.stdout.cursorTo(0)
}
export async function LOG_CLI_PROGRESS_SLOW( //SLOWEST
  i: number,
  length: number,
  element: string,
  task: string,
  progress: string,
  completed: string,
  init_time: number
) {
  element = colorText(element, "magentaBright")
  task = colorText(task, "yellow")
  progress = colorText(progress, "magenta")
  completed = colorText(completed, "greenBright")
  process.stdout.write(
    `${i < length - 1 ? progress : completed}: ${colorText(
      ((100 * (i + 1)) / length).toPrecision(3) + "%",
      "cyanBright"
    )} of ${task} for ${colorText(i + "", "greenBright")} ${element} ${
      i === length - 1
        ? "in " +
          colorText(
            `${(uptime() - init_time).toPrecision(3)}s ⏱\n\n`,
            "redBright"
          )
        : ""
    }`
  )

  process.stdout.clearLine(1)
  process.stdout.cursorTo(0)
}
export function LOG_CLI_PROGRESS_DISABLE( //NO LOGS FOR MAX SPEED
  i: number,
  length: number,
  element: string,
  task: string,
  progress: string,
  completed: string,
  init_time: number,
  ...more: (string | number)[]
) {}

export function LOG_CLI_PROGRESS( //ORIGINAL SIMPLE FAST
  i: number,
  length: number,
  element: string,
  task: string,
  progress: string,
  completed: string,
  init_time: number,
  ...more: (string | number)[]
) {
  if (i === 0) process.stdout.write("\n\n\n")

  if (i % 10 === 0 || i === length - 1) {
    process.stdout.write(
      `${i < length - 1 ? progress : completed}: ${(
        (100 * (i + 1)) /
        length
      ).toPrecision(3)}% of ${task} for ${i} ${element}${
        i === length - 1
          ? ` in ${(uptime() - init_time).toPrecision(3)}s ⏱\n`
          : ""
      }${more ? `\n${more.join(" ")}` : ""}`
    )
    if (!more) {
      process.stdout.cursorTo(0, 0)
      process.stdout.clearLine(1)
    }
    if (more) {
      process.stdout.moveCursor(-999, -1)
      process.stdout.clearLine(1)
      process.stdout.cursorTo(0)
    }
  }
}
//!   process.stdout.clearScreenDown() DESTROYS performance whereas process.stdout.clearLine() doesn't?!
//! Adding terminal colors adds latency!
/*
const clearLines = (n: number) => {
  if (n === 1) {
    process.stdout.clearLine(1)
    process.stdout.cursorTo(0)
  } else {
    for (let i = 0; i < n; i++) {
      //first clear the current line, then clear the previous line
      const y = i === 0 ? 0 : -1
      process.stdout.moveCursor(0, y)
      process.stdout.clearLine(1)
    }
    process.stdout.cursorTo(0)
  }
}
*/
export function id_to_tooltop(id: string) {
  let k = id_to_mdx(id, "key", { safe: true })?.trim()
  let v = id_to_mdx(id, "value", { safe: true })?.trim()
  let skip_k = k?.length === 0 || k?.match(/^contains:/)?.length

  //! max sure to check this doesn't exist on other
  const k_code = k?.match(/^(```)/gm)?.length
  const v_code = v?.match(/^(```)/gm)?.length

  const k_link = k?.match(
    RegExp(`]((/${DOCS_BASE}|\.)/([0-9a-zA-Z-/]*))`, "gm")
  )?.length
  const v_link = v?.match(
    RegExp(`]((/${DOCS_BASE}|\.)/([0-9a-zA-Z-/]*))`, "gm")
  )?.length

  const k_newLine = k?.match(/(\n)+/g)?.length
  const v_newLine = v?.match(/(\n)+/g)?.length

  const k_illegal = k?.match(/^([ ]*export |[ ]*import )/gm)?.length
  const v_illegal = v?.match(/^([ ]*export |[ ]*import )/gm)?.length

  const k_img = k?.match(
    /((!\[[a-zA-Z0-9_-]+]\(@site\/static\/(files|img)\/([a-zA-Z0-9-_\.]+)\))|(<Image[ \n]+img={require\('([@a-zA-Z0-9-_\./]+)'\)}[ \n]*\/>))/gm
  )?.length // not working?
  //!added [ ]* to account for accidental whitespace before export/import which will get formatted out by prettier later

  const k_inlineCode = k?.match(/<code>.*<\/code>/)?.length

  const k_path = get_path_from_id(id)
  const k_without_code = k?.[0] !== "`" && k?.[k.length - 1] !== "`"

  if (!k_code && (k_newLine || k_illegal) && !k_img && !k_link) {
    // if (!k_code && k_illegal) {
    k = `\n\n\`\`\`tsx\n${k}\n\`\`\`` //! escape ` inside template literal too!
  }

  if (!v_code && (v_newLine || v_illegal) && !v_link)
    v = `\n\n\`\`\`tsx\n${v}\n\`\`\``
  // if (v_code && v_illegal)
  v?.replace(/^(export(?= )|import(?= ))/gm, "<code>$1</code> ")

  //? TODO: make prettier ignore every single (long) regex line
  // prettier-ignore
  k = k?.trim().replace(/^((export(?= )|import(?= ))(( default function| function| async function| const| var| let)|(?= )))/, "<code>$1</code> ")
  // prettier-ignore
  v = v?.trim().replace(/^((export(?= )|import(?= ))(( default function| function| async function| const| var| let)|(?= )))/, "<code>$1</code> ")

  if (k && v && !skip_k) {
    // k = k_without_code ? `\`${k}\`` : k //! prefix extra escape here ONLY if not already exists
    k =
      k_without_code && !k_link && !k_inlineCode
        ? `\`${k.replace(/`/g, "")}\``
        : k //! replace ` due to # `\x` and other quirks with mdx breaking things! but <code> still fine
    k = k_path && !k_link ? `[${k}](${k_path})` : k

    return `${k_code || k_illegal || k_newLine || k_img ? "" : "## "}${k}\n\n${
      v_code || v_newLine ? "" : "" //skip ## headers for value content? keep the value code/newline check for future use
    }${v}\n\n`
  }
  const recheck_code = k?.match(/^(```)/gm)?.length
  if (k && !v && !skip_k) {
    return !recheck_code && !k_link && !k_img && !k_inlineCode
      ? `[\`${k.replace(/`/g, "")}\`](${k_path})\n\n`
      : `${!k_img && !recheck_code ? "## " : ""}${k}\n\n`
  }
  if (!k && v) return `\n\n${v}`
  return ""
}

/**
 *
 * @param id
 * @returns
 */

export function id_to_ref_mdx(id: string) {
  let ref_ids = getRefIDs(id) || []
  let title = id_to_plaintext(id)?.replace(/"/g, `'`)
  if (!title) return
  const title_match_ref = `[\`${title}\`](`
  const ref_mdx = ref_ids
    .map((map_id) => {
      let k = id_to_mdx(map_id, "key", { safe: true })?.replace(
        title_match_ref,
        `[**_${title_match_ref.slice(1, -2)}_**](`
      )
      let v = id_to_mdx(map_id, "value", { safe: true })?.replace(
        title_match_ref,
        `[**_${title_match_ref.slice(1, -2)}_**](`
      )

      const k_code = k?.match(/^(```)/gm)?.length
      const v_code = v?.match(/^(```)/gm)?.length

      const k_link = k?.match(
        RegExp(`]((/${DOCS_BASE}|\.)/([0-9a-zA-Z-/]*))`, "gm")
      )?.length

      const k_newLine = k?.match(/(\n)+/g)?.length //! check if I want escaped new line or actual new line
      const v_newLine = v?.match(/(\n)+/g)?.length

      const k_illegal = k?.match(/^([ ]*export |[ ]*import )/gm)?.length
      const v_illegal = v?.match(/^([ ]*export |[ ]*import )/gm)?.length

      const k_img = k?.match(
        /((!\[[a-zA-Z0-9_-]+]\(@site\/static\/(files|img)\/([a-zA-Z0-9-_\.]+)\))|(<Image[ \n]+img={require\('([@a-zA-Z0-9-_\./]+)'\)}[ \n]*\/>))/gm
      )?.length //! Added Ideal Image regex - still need to test/confirm Ideal Image file size bug is worth it

      if (
        !k_code &&
        (k_newLine || k_illegal) &&
        !k_link &&
        typeof k?.trim()?.length === "number" &&
        k?.trim()?.length > 20
      ) {
        k = `\n\n\`\`\`tsx\n${k}\n\`\`\`` //! escape ` inside template literal too!
      }

      if (!v_code && (v_newLine || v_illegal)) v = `\n\n\`\`\`tsx\n${v}\n\`\`\``
      v = v?.replace(/^(export(?= )|import(?= ))/gm, "<code>$1</code> ")
      const k_inlineCode = k?.match(/<code>.*<\/code>/)?.length
      if (k && v) {
        const k_path = get_path_from_id(map_id) //! map_id NOT id!!
        if (k[0] !== "`" && k[k.length - 1] !== "`" && !k_link && !k_inlineCode)
          k = `\`${k}\`` //!prevent ``` being accidentally created inline - which breaks mdx!
        k = k?.replace(/^(export(?= )|import(?= ))/gm, "<code>$1</code> ")
        k = k_path && k.length && !k_link ? `[${k}](${k_path})` : k

        return `${k_code || k_illegal || k_newLine || k_img ? "" : ""}${k} ↔ ${
          v_code || v_newLine ? "" : ""
        }${v}\n`
      }
    })
    .filter((str) => str !== undefined)

  return ref_mdx
}

/**
 *
 * @param id
 * @returns
 */

export function id_to_ref_mdx_jsx(id: string) {
  let ref_ids = getRefIDs(id) || []
  let title = id_to_mdx(id, "key", { safe: true, jsx: true }) //id_to_plaintext(id)?.replace(/"/g, `'`)
  if (!title) return
  const ref_mdx = ref_ids
    .map((map_id) => {
      let k = id_to_mdx(map_id, "key", { safe: true, jsx: true })
      let v = id_to_mdx(map_id, "value", { safe: true, jsx: true })
      if (!k) return

      if (k && v) {
        return `${k}<span>&nbsp;↔&nbsp;</span>${v}`
      }
      if (k && !v) return k
    })
    .filter((str) => str !== undefined) as string[]

  return ref_mdx
}
