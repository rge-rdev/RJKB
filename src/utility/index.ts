import _ from "lodash"
import { RemData } from "../rem-json"
import { map, root_child_map, map_all_parents, getDoc } from "../data"
import { Rem_obj, deleted_rem, portal_rem } from "../rem-json"
import { Render_Docs_BFS } from "../components/App"
import { uptime } from "process"
import { get_path_from_id } from "../../initDocs"

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

export function id_to_mdx(id: string, key_type?: "key" | "value") {
  const doc = getDoc(id)
  if (!doc) return
  if (!key_type || key_type === "key") return make_mdx(doc.key)
  if (key_type === "value") return make_mdx(doc.value!) // TODO: fix assertion here
}
export function id_to_plaintext(id: string, key_type?: "key" | "value") {
  const doc = getDoc(id)
  if (!doc) return
  if (!key_type || key_type === "key") return make_plaintext(doc.key)
  if (key_type === "value") return make_plaintext(doc.value!) // TODO: fix assertion here
}
export function id_to_tags(id: string) {
  const doc = getDoc(id)
  if (!doc) return
  const key = make_plaintext(doc.key)
  let output = [key]
  if (!doc.value) return [key]
  const value = doc.value
  if (typeof value === "string") return output.push(value)
  let link_ids = [""]
  link_ids.pop()
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
 * @param input aray of remData_objects to map over and
 * @returns array of
 */

export function make_mdx(input: RemData[] | []): string {
  let output_arr = input?.map((el: RemData) => obj_to_mdx(el))
  if (Array.isArray(output_arr)) return output_arr.join("")
  return output_arr
}

/** PLAINTEXT version of make_str
 *
 * @param input aray of remData_objects to map over and
 * @returns array of
 */

export function make_plaintext(input: RemData[] | []): string {
  let output_arr = input?.map((el: RemData) => obj_to_plaintext(el))
  if (Array.isArray(output_arr)) return output_arr.join("")
  return output_arr
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

export function obj_to_plaintext(el: RemData, input_str = ""): string {
  let output_str: string = input_str

  if (typeof el === "string") output_str += el
  if (typeof el === "object") {
    if (el["i"]) {
      if (el["i"] === "o") return "" // if code
      if (el["i"] === "m") {
        if (el["qId"]) {
          // const qId_href = map.get(el["qId"])?.crt?.b?.u?.s
          output_str += `${el["qId"] ? `${el["text"]}` : ""}` // just show plaintext for reference link
        }
        // output_str += `${el["q"] ? "<code>" : ""}` // ignore code styling
        // output_str += `${el["b"] ? "<b>" : ""}` // ignore bold style
        // output_str += `${el["u"] ? "<u>" : ""}` // ignore underline style
        // output_str += `${el["l"] ? "<i>" : ""}` // ignore italic style
        // output_str += `${el["cId"] ? `{{<mark id='#${el["cId"]}'>` : ""}` // ignore Cloze/mark style
        output_str += `${el["q"] ? `${el["text"]}` : `${el["text"]}`}`
        // output_str += `${el["cId"] ? "</mark>}}" : ""}`
        // output_str += `${el["l"] ? "</i>" : ""}`
        // output_str += `${el["u"] ? "</u>" : ""}`
        // output_str += `${el["b"] ? "</b>" : ""}`
        // output_str += `${el["q"] ? "</code>" : ""}`
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
 * if "i" === "q"
 *
 */

// export const Aliases_UID = "2n8Gw7PvXGPcFQm7i"

export function obj_to_mdx(el: RemData, input_str = ""): string {
  let output_str: string = input_str

  if (typeof el === "string") output_str += el
  if (typeof el === "object") {
    if (el["i"]) {
      if (el["i"] === "o") {
        output_str += `\n\`\`\`${resolve_lang_mdx(el["language"])}\n
        ${_.escape(el["text"])}\n
        \`\`\`\n`
      }
      if (el["i"] === "m") {
        if (el["qId"]) {
          const qId_href = map.get(el["qId"])?.crt?.b?.u?.s
          output_str += `${el["i"] === "m" ? "`" : ""}` // Ref HYPERLINKS
          output_str += `${
            el["qId"]
              ? `\nimport Link from '@docusaurus/Link';
            \n<Link to=${qId_href}>${_.escape(el["text"])}</Link>`
              : ""
          }`
          output_str += `${el["i"] === "m" ? "`" : ""}` // Ref Rem
        }
        // href found at el["qId"] = _id at crt.b.s
        output_str += `${el["q"] ? "`" : ""}` // Ref Rem
        output_str += `${el["b"] ? "**" : ""}` // bold
        // output_str += `${el["b"] ? "**" : ""}`; // bold md
        output_str += `${el["u"] ? "__" : ""}` // underline
        output_str += `${el["l"] ? "*" : ""}`
        output_str += `${el["cId"] ? `<mark id='#${el["cId"]}'>` : ""}` // id to Cloze cId
        output_str += `${el["q"] ? `${_.escape(el["text"])}` : `${el["text"]}`}`
        output_str += `${el["cId"] ? "</mark>" : ""}`
        output_str += `${el["l"] ? "*" : ""}`
        output_str += `${el["u"] ? "__" : ""}`
        output_str += `${el["b"] ? "**" : ""}`
        output_str += `${el["q"] ? "`" : ""}`
      }
      if (el["i"] === "q") {
        if (el["aliasId"]) {
          const aliasId = el["aliasId"] // look up alternative key for aliasId
          const aliasKey = map.get(aliasId)?.["key"] || "__ERROR_NO_ALIAS_KEY" //! fallback to original key if no alias key was found
          output_str += `__ALIAS=${aliasId} - __ALIASKEY=${aliasKey} typeof __typealiasKey=${typeof aliasKey}`
          //TODO: get key from aliasId
        }
        if (el["_id"] === "2n8Gw7PvXGPcFQm7i") output_str += "__Aliases"
        // if (!el["textOfDeletedRem"]) {
        if (el["_id"] !== "2n8Gw7PvXGPcFQm7i") {
          const find_doc = map.get(el["_id"]) // return doc obj for link
          const find_key = find_doc?.key!

          output_str += `[\`${make_mdx(find_key)}\`](${get_path_from_id(
            el["_id"]
          )})`
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
        output_str += `\n![Image](${(el["url"] as string).replace(
          `%LOCAL_FILE%`,
          `@site/files/`
        )})\n`
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

export function LOG_CLI_PROGRESS( //ORIGINAL SIMPLE FAST
  i: number,
  length: number,
  element: string,
  task: string,
  progress: string,
  completed: string,
  init_time: number
) {
  process.stdout.write(
    `${i < length - 1 ? progress : completed}: ${(
      (100 * (i + 1)) /
      length
    ).toPrecision(3)}% of ${task} for ${i} ${element}${
      i === length - 1
        ? ` in ${(uptime() - init_time).toPrecision(3)}s\n\n`
        : ""
    }`
  )
  process.stdout.clearLine(1)
  process.stdout.cursorTo(0)
}
//!   process.stdout.clearScreenDown() DESTROYS performance whereas process.stdout.clearLine() doesn't?!
//! Adding terminal colors adds latency!
