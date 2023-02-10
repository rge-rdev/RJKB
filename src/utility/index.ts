import _ from "lodash"
import { RemData } from "../rem-json"
import { map, root_child_map, map_all_parents, getDoc } from "../data"
import { Rem_obj, deleted_rem, portal_rem } from "../rem-json"
import { Render_Docs_BFS } from "../components/App"
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
        // output_str += `${el["cId"] ? `{{<mark id=#${el["cId"]}>` : ""}` // ignore Cloze/mark style
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
          output_str += `${el["i"] === "m" ? "`" : ""}` // Ref Rem
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
        output_str += `${el["cId"] ? `<mark id=#${el["cId"]}>` : ""}` // id to Cloze cId
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
