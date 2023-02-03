import _ from "lodash"
import { RemData } from "../rem-json"
import { map, root_child_map, map_all_parents } from "../data"
import { Rem_obj, deleted_rem, portal_rem } from "../rem-json"
import { render_chunk } from "../components/App"
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
  const child_jsx = render_chunk(child_doc_list)
  return child_jsx
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
        output_str += `${el["cId"] ? `{{<mark id=#${el["cId"]}>` : ""}` // Cloze
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
  }
  return alert(lang)
}

/**
 * MDX output version of obj_to_str
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
          output_str += `${
            el["qId"] ? `<a href=${qId_href}>${_.escape(el["text"])}</a>` : ""
          }`
        }
        // href found at el["qId"] = _id at crt.b.s
        output_str += `${el["q"] ? "`" : ""}` // Ref Rem
        output_str += `${el["b"] ? "**" : ""}` // bold
        // output_str += `${el["b"] ? "**" : ""}`; // bold md
        output_str += `${el["u"] ? "__" : ""}` // underline
        output_str += `${el["l"] ? "*" : ""}`
        output_str += `${el["cId"] ? `{{<mark id=#${el["cId"]}>` : ""}` // Cloze
        output_str += `${el["q"] ? `${_.escape(el["text"])}` : `${el["text"]}`}`
        output_str += `${el["cId"] ? "</mark>}}" : ""}`
        output_str += `${el["l"] ? "*" : ""}`
        output_str += `${el["u"] ? "__" : ""}`
        output_str += `${el["b"] ? "**" : ""}`
        output_str += `${el["q"] ? "`" : ""}`
      }
      if (el["i"] === "q") {
        if (el["aliasId"]) {
          const aliasId = el["aliasId"]
          //TODO: get key from aliasId
        }
        if (el["_id"] === "2n8Gw7PvXGPcFQm7i") output_str += "Aliases"
        // if (!el["textOfDeletedRem"]) {
        if (el["_id"] !== "2n8Gw7PvXGPcFQm7i") {
          const find_doc = map.get(el["_id"]) // return doc obj for link
          const find_key = find_doc?.key!

          output_str += `[${el["_id"]}](${make_mdx(find_key)})`
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
        output_str += `\n![](${(el["url"] as string).replace(
          `%LOCAL_FILE%`,
          `files/`
        )})\n`
      }
      // if (el["i"] === "i") {
      //   output_str += `<img src=${(el["url"] as string).replace(
      //     `%LOCAL_FILE%`,
      //     `files/`
      //   )} height=${el["height"] * el["percent"] * 0.01} width=${
      //     el["width"] * el["percent"] * 0.01
      //   } loading="lazy"/>`
      // }
    }
  }

  return output_str
}

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
