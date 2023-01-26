import _ from "lodash"
import { RemData } from "../rem-json"
import { map, root_child_map } from "../data"
import { Rem_obj, deleted_rem, portal_rem } from "../rem-json"
import { render_chunk } from "../components/App"
// import Cloze from "../components/Cloze"

export function get_rem_list(list: string[] = []) {
  return list.map((id) => map.get(id)!)
}

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

export function make_str(input: RemData[] | []): string {
  let output_arr = input?.map((el: RemData) => obj_to_str(el))
  if (Array.isArray(output_arr)) return output_arr.join("")
  return output_arr
}

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
