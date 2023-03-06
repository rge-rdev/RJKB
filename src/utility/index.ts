import _ from "lodash"
import { RemData } from "../rem-json"
import {
  map,
  root_child_map,
  map_all_parents,
  getDoc,
  get_path_from_id,
} from "../data"
import { Rem_obj, deleted_rem, portal_rem } from "../rem-json"
import { Render_Docs_BFS } from "../components/App"
import { uptime } from "process"

// import Cloze from "../components/Cloze"

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
export function id_to_mdx(
  id: string,
  key_type?: "key" | "value",
  config?: { safe: true }
) {
  const doc = getDoc(id)
  if (!doc) return
  if (doc.type === 6) return //! add new type to skip this mystery type - from my initial checks this appears to be some form of duplicate doc - as key type only - maybe used for tag system?

  //refactor regex here
  // /<([a-z_]+)([^b]{1}|[^u]{1})(\/?)>/g, //? spot the error here - see how long it takes you!
  // /<[\/]?(([a-z_]+)([^b]{1}|[^u]{1}))[\/]?>/g, //? now spot why the next one is an improvement
  const re_unsafe_jsx =
    /(?<!\`)(?<=)([a-zA-z-_0-9\.]*)<[\/]?(([a-z_]+)([^b]{1}|[^u]{1}))[\/]?>(?!\`)/g //! yuck this is some horric looking regex - but it is quite necessary for preventing Docusaurus' mdx-loader from breaking - the DX from this perspective has been horrendous... the extra escapes to html tags can ALSO break things.
  //! Add ([a-zA-z-_0-9\.]*) to match anything before angle bracket notation ie React.FC<ChildProps>

  const re_unsafe_unicode = /\\x|\\u/
  let key = make_mdx(doc.key, id)
  if (key.match(re_unsafe_unicode)?.length) {
    key = `<code>\\${key.slice(1, -1)}</code>`
    //all unicode containing text is already wrapped in ` backticks
    return key
      .replace(/(?<!`)\`{2}(?!`)/g, "`")
      .replace(/\[`[ ]+/g, "[`")
      .replace(/[ ]+`]/g, "`]")
  }
  if (!key_type || key_type === "key") {
    if (!config?.safe) return key
    if (config.safe)
      return key
        .replace(re_unsafe_jsx, "`<$1>`")
        .replace(/(?<!`)\`{2}(?!`)/g, "`")
        .replace(/\[`[ ]+/g, "[`")
        .replace(/[ ]+`]/g, "`]")
    //✅ fixed <html_tag> breaking mdx - may need to expand regex rule further
  }
  if (key_type === "value") {
    if (!doc.value) return
    if (!config?.safe) return make_mdx(doc.value, id)
    if (config.safe)
      return make_mdx(doc.value, id)
        .replace(re_unsafe_jsx, "`<$1>`")
        .replace(/(?<!`)\`{2}(?!`)/g, "`")
        .replace(/\[`[ ]+/g, "[`")
        .replace(/[ ]+`]/g, "`]")
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
  const key = make_plaintext(doc.key)
    ?.replace(/(?<!\\)"/g, "\\\\'") // MAKE EVERYTHING INSIDE SINGLE QUOTE
    .replace(/(?<!\\)'/g, "\\\\'")
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
    const links = value.forEach((el) => {
      if (
        typeof el !== "string" &&
        el["i"] === "q" &&
        el["_id"] &&
        el["_id"] !== "2n8Gw7PvXGPcFQm7i" &&
        el["aliasId"]
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
  optional_id_to_debug?: string
): string {
  if (!Array.isArray(input)) {
    console.log("BROKEN!!", `${optional_id_to_debug}`)
    return "__BROKEN__"
  }
  let output_arr = input?.map((el: RemData) => obj_to_mdx(el))
  if (Array.isArray(output_arr)) {
    const output_str = output_arr.join("")
    // fix raw strings that contain import are START - which is illegal for mdx-loader
    // ^ to match illegal reserved keywords
    // if (output_str.match(/^import /g))
    //   return `\`\`\`tsx\n ${output_str}\n\`\`\``
    // if (output_str.match(/^export default |^export const |^export function /g))
    //   return `\`\`\`tsx\n ${output_str}\n\`\`\``
    // output_str.match(/(?<!\\n\\`\\`\\`.*\n)/g)
    return output_str
  }
  return output_arr
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
        }>${_.escape(el["text"])}</code>`
      }
      if (el["i"] === "m") {
        if (el["qId"]) {
          const qId_href = map.get(el["qId"])?.crt?.b?.u?.s
          output_str += `${
            el["qId"] ? `<a href=${qId_href}>${_.escape(el["text"])}</a>` : ""
          }`
        }
        // href found at el["qId"] = _id at crt.b.s
        output_str += `${el["q"] ? "<code>" : ""}` // Ref Rem
        output_str += `${el["b"] ? "<b>" : ""}` // bold
        // output_str += `${el["b"] ? "**" : ""}`; // bold md
        output_str += `${el["u"] ? "<u>" : ""}` // underline
        output_str += `${el["l"] ? "<i>" : ""}`
        output_str += `${el["cId"] ? `{{<mark id='#${el["cId"]}'>` : ""}` // Cloze
        output_str += `${el["q"] ? `${_.escape(el["text"])}` : `${el["text"]}`}`
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

export function obj_to_mdx(el: RemData, input_str = ""): string {
  let output_str: string = input_str

  if (typeof el === "string") output_str += el
  if (typeof el === "object") {
    if (el["i"]) {
      if (el["i"] === "o") {
        // "o" for Object | Outside Code?
        // ${_.escape(el["text"])}\n
        if (typeof el["text"] === "string") {
          output_str += `\n\n\`\`\`${resolve_lang_mdx(el["language"])}\n${(
            el["text"] as string
          ).trim()}\n\`\`\`\n`
        }
      }
      if (el["i"] === "m") {
        // "m" for MarkDown?
        if (el["qId"]) {
          const qId_href = map.get(el["qId"])?.crt?.b?.u?.s
          output_str += `${el["i"] === "m" ? "`" : ""}` // Ref HYPERLINKS
          output_str += `${
            el["qId"]
              ? // ? `\n<a href="${qId_href}">${_.escape(el["text"])}</a>`
                `\n<a href="${qId_href}">${_.escape(el["text"])}</a>`
              : ""
          }`
          output_str += `${el["i"] === "m" ? "`" : ""}` // Ref Rem
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
          output_str += `${el["q"] || force_q ? "`" : ""}` // Ref Rem
          output_str += `${el["b"] ? "**" : ""}` // bold
          //! <b> messes up mdx-loader if used at start line and then use a mdx link directly after ?!
          //! switch back to ** to avoid dealing with this - whitespace skip should prevent bugs from multiple ** appearing next to each other... hopefully
          // output_str += `${el["b"] ? "**" : ""}`; // bold md
          output_str += `${el["u"] ? "<u>" : ""}` // underline
          output_str += `${el["l"] ? "_" : ""}` // mixing * with ** and _ and __ breaks things majorly?!
          // output_str += `${el["cId"] ? `<mark id='#${el["cId"]}'>` : ""}` // OMIT ID for Cloze card - feat not added yet
          //! skip <mark> for cloze cards - not a feature needed now - also messes up code snippets in mdx code view
          //! TODO: add function to remove <mark> from code snippets - but only do this when cloze/spoiler tags actually needed
          // output_str += `${el["cId"] ? `<mark>` : ""}` // id to Cloze cId
          // output_str += `${el["q"] ? `${_.escape(el["text"])}` : `${el["text"]}`}`
          output_str += `${el["text"]}`
          // output_str += `${el["cId"] ? "</mark>" : ""}`
          output_str += `${el["l"] ? "_" : ""}`
          output_str += `${el["u"] ? "<u>" : ""}`
          output_str += `${el["b"] ? "**" : ""}`
          output_str += `${el["q"] || force_q ? "`" : ""}`
        } else {
          output_str += ""
        }
      }
      if (el["i"] === "q") {
        if (el["aliasId"]) {
          const aliasId = el["aliasId"] // look up alternative key for aliasId
          //! aliasId doesn't seem to link to any docs - perhaps used as ref handle for some other purpose?
          // const aliasKey = map.get(aliasId)?.["key"] || "__ERROR_NO_ALIAS_KEY" //! fallback to original key if no alias key was found
          // const aliasKey = map.get(aliasId)?.["key"] || false //"__ERROR_NO_ALIAS_KEY" //! fallback to original key if no alias key was found
          // const aliasId_mdx = id_to_mdx(aliasId)
          const alias_id = el["_id"]
          const aliasKey = id_to_mdx(alias_id)
          if (!aliasKey) {
            console.log(
              `Could not find aliasKey for aliasId: ${aliasId} - referring ID: ${alias_id}\\naliasId_mdx = ${aliasKey}`
            )
            process.exit()
          }

          // const alias_mdx = make_mdx(alias_id) //!! THIS WAS THE BREAKING BUG!
          // output_str += `__ALIAS=${aliasId} - __ALIASKEY=${aliasKey} typeof __typealiasKey=${typeof aliasKey}`
          const path = get_path_from_id(alias_id)
          if (!path) return ""
          output_str += `[\`${aliasKey}\`](${path})`
          return output_str // exit early once alias found
          // output_str += `__ALIAS=${aliasId} - __ALIASKEY=${aliasKey} typeof __typealiasKey=${typeof aliasKey}`
          //TODO: get key from aliasId
        }
        if (el["_id"] === "2n8Gw7PvXGPcFQm7i") output_str += "" // "__Aliases"
        // if (!el["textOfDeletedRem"]) {
        if (el["_id"] !== "2n8Gw7PvXGPcFQm7i") {
          const find_doc = map.get(el["_id"]) // return doc obj for link
          const find_key = find_doc?.key!

          const path = get_path_from_id(el["_id"])
          if (!path) return "" // early return for empty string - to eliminate linked TAGS or "powerups" from non-main DB

          output_str += `[\`${make_mdx(find_key)}\`](${path})`
          // output_str += `[[<a href="#${el["_id"]}">${make_mdx(find_key)}</a>]]`
        }
        if (el["textOfDeletedRem"]) {
          output_str += `<del id=#${el["_id"]}>${make_mdx(
            el["textOfDeletedRem"]
          )}</del>`
        }
      }
      //`files/`
      if (el["i"] === "i") {
        //! w/o metadata can't think of a better alt name than simply "image"
        const p = el["percent"] / 100
        const w = el["width"] * p
        const h = el["height"] * p
        // TODO: use w & h with ideal-image
        //prettier-ignore
        const static_img_path = (el["url"] as string).replace(`%LOCAL_FILE%`,`@site/static/files/`)
        //prettier-ignore
        // output_str += `\n![image](${(el["url"] as string).replace(`%LOCAL_FILE%`,`@site/static/files/`)})\n`
        output_str += `\n<Image img={require('${static_img_path}')} />\n`
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
export function LOG_CLI_PROGRESS( //NO LOGS FOR MAX SPEED
  i: number,
  length: number,
  element: string,
  task: string,
  progress: string,
  completed: string,
  init_time: number,
  ...more: (string | number)[]
) {}

export function LOG_CLI_PROGRESS_NEW( //ORIGINAL SIMPLE FAST
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
    // if (i === length - 1) process.stdout.write("\n")
  }
  if (more) {
    process.stdout.moveCursor(-999, -1)
    process.stdout.clearLine(1)
    process.stdout.cursorTo(0)
  }
}
//!   process.stdout.clearScreenDown() DESTROYS performance whereas process.stdout.clearLine() doesn't?!
//! Adding terminal colors adds latency!
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
