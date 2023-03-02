import rem_json from "./rem.json"
import { Rem_DB, Rem_obj } from "../rem-json"
import {
  make_mdx,
  make_plaintext,
  LOG_CLI_PROGRESS,
  id_to_plaintext,
  id_to_mdx,
} from "../utility"
import { uptime } from "process"

export const rem: Rem_DB = rem_json as Rem_DB

process.stdout.write(
  "\x1b[36m================================================\nINIT: JSON TO SSG MDX SCRIPTS © ROGER JIANG 2023\n================================================\x1b[89m\nSTEP 1: CONVERT JSON TO HASH MAPS"
)

/**
 * IIFE on app load to del unused props from JSON to save space
 * TODO: benchmark diff in speed after deleting unused
 */
;(function Load() {
  const docs_length = rem.docs.length
  const json_cleanup_init_time = uptime()
  let deleted_props = 0

  rem.docs.forEach((doc: Rem_obj, i) => {
    LOG_CLI_PROGRESS(
      i,
      docs_length,
      "docs",
      "trim JSON",
      "⏳ ✂ ",
      "✅ CLEAN",
      json_cleanup_init_time,
      deleted_props,
      "unused prop deleted"
    )

    Object.keys(doc).forEach((key) => {
      if (
        key !== "forget" &&
        key !== "key" &&
        key !== "value" &&
        key !== "_id" &&
        key !== "n" &&
        key !== "type" &&
        key !== "enableBackSR" &&
        key !== "children" &&
        key !== "parent" &&
        key !== "crt" &&
        key !== "references"
        // key !== "createdAt"&&
      )
        //@ts-ignore
        delete doc[key]
      deleted_props += 1
    })
    //   delete doc["owner"];
    //   delete doc["subBlocks"];
    //   delete doc["portalsIn"];
    //   delete doc["createdAt"];
    //   delete doc["u"];
    //   delete doc["srcRemId"];
    //   delete doc["srcRemC"];
    //   delete doc["portalsIn,prev"];
    //   delete doc["subBlocks,prev"];
    //   delete doc["children,prev"];
    //   delete doc["references"];
    //   delete doc["preMigrationPortalsIn"];
  })
})()

//! Permanently overwrite and delete original JSON w/o crap data fields!
//! Execute only when close to publishing or exposing original JSON!
// fs.writeJSON("./src/data/new.JSON", rem)

/**
 * map = ID hash to document JSON
 * root = root-level nodes (n=1)
 * root_child_map = adjacency list of ID map to direct children (IDs)
 */

const docs_length = rem.docs.length
const init_json_map_time = process.uptime()
let num_docs_mapped = 0
export const map = new Map(
  rem.docs.map((doc, i) => {
    num_docs_mapped += 1
    LOG_CLI_PROGRESS(
      i,
      docs_length,
      "docs",
      "HASH JSON to map",
      "⏳ 🔎 ",
      "✅ MAP",
      init_json_map_time,
      num_docs_mapped,
      "docs mapped to ID"
    )

    return [doc._id, doc]
  })
)

export const map_size = 13592 + 1 // map.size includes also non-main topics + children which were filtered out for docusaurus build
export const map_all = new Map(
  rem.docs.map((doc) => [
    doc._id,
    {
      key: doc.key,
      value: doc.value,
      children: doc.children,
      parent: doc.parent,
    },
  ])
)
export const root = rem.docs.filter((doc) => doc.n)
export const root_child_map = new Map(
  root.map((doc) => [doc._id, doc.children])
)

// export const map_parent = new Map(map.map((doc) => [id, doc.parent]))

export function getChildren(id: string) {
  const children = map_all.get(id)?.children
  // console.log(children)
  return children
}

export function getChildIDs(id: string) {
  const childIDs = map_all.get(id)?.children
  return childIDs
}
// getChildren("6CexCG2iqE2PMEtRW") // [ "wSpuzHZAcmcDRsogo","kJhdZnTW7hZvdkQi3","7rrTRyYMQCtb2Sr2J","MDkQBLiqe4h2LMbQp","wsze9LrGuNubTX4Zq",]

/**
 * map_parent = hash map each doc ID to ONE direct parent
 * map_all_parents = hash map doc ID to ID string[] of parent path .push() to add itself to path
 */

export const map_parent = new Map(rem.docs.map((doc) => [doc._id, doc.parent]))
const map_all_parents_init_time = uptime()
export const map_all_parents = new Map(
  rem.docs.map((doc, i) => {
    LOG_CLI_PROGRESS(
      i,
      docs_length,
      "docs",
      "Map ID to Parent ID",
      "⏳ 🔎 ",
      "✅ MAP",
      map_all_parents_init_time
    )

    return [
      doc._id,
      [...calcParentIDsArray(doc.parent as string), doc._id], // TARGET NODE TO LAST INDEX
    ]
  })
)

/**
 * root_main_topics = root level doc for main topics - excludes orphans/"powerups"
 */

export const root_main_topics = root.filter(
  (doc) =>
    doc._id === "35nBdhDNJLwCCyz6A" ||
    doc._id === "76YZFGLsBuRNyEMqN" ||
    doc._id === "HWLTjZrhernsLocy7" ||
    doc._id === "G887bqycfCYCmncMh" ||
    doc._id === "bcxqhqezdr3iRjhNq" ||
    doc._id === "bcxqhqezdr3iRjhNq" ||
    doc._id === "9izw8RoFY6epyxXYK" ||
    doc._id === "5jxvqtuiTvhdhxys7"
)

export const root_main_topic_ids = root_main_topics.map((doc) => doc._id)

// export const map_doc_to_key = new Map(rem.docs.map((doc) => [doc._id, __RAW_KEY_TEXT))

// console.log(map_all_parents)

/**start to refactor map.get(id) => doc logic here
 *
 * @param id UID for doc in JSON DB
 * @returns doc object
 */

export function getDoc(id: string) {
  if (!map.get(id)) return console.log(`ID: ${id} could not be found!`)
  return map.get(id)
}
// added overload to fix type error on return type not being possibly both string and string[] - which prevented string chaining methods
export function get_doc_plaintext(
  id: string,
  val?: "key" | "value"
): string | undefined
export function get_doc_plaintext(id: string, val?: "key" | "value" | "both") {
  const doc = getDoc(id)
  if (!doc) return
  if (!val) val = "key"

  if (val === "key" || val === "value") {
    const text_array = doc[val]
    if (!text_array) return
    const text = make_plaintext(text_array)
    return text
  }
  if (val === "both") {
    const key_array = doc["key"]
    const value_array = doc["value"]
    if (!key_array && !value_array) return
    if (key_array && !value_array) return make_plaintext(key_array)
    if (key_array && value_array)
      return [make_plaintext(key_array), make_plaintext(value_array)]
  }
}

/**
 * KEEP _ as part of plaintext to retain for special terms such as __proto__
 * - separaters when next to _, ie delete -_ and _-
 *
 * @param id
 * @returns
 */

export function id_to_key_slug(id: string) {
  const text = get_doc_plaintext(id, "key")
    ?.replace(/[?/\\@[\\^{}\]|`~:;,=+ ]+/g, "-")
    ?.replace(/[![\]"'*()<>]+/g, "")
    ?.replace(/-{2,}/g, "-")
    ?.replace(/[^A-z0-9-]/g, "") // clear anything not approved
  // ignore _ to allow for plaintext keys such as __proto__
  if (!text) return
  // console.log(text)
  if (text.length <= 30) text.split("/").join("-")
  if (text.length > 30)
    text
      .split("/")
      .map((str) => str.slice(0, 9))
      .join("-")

  return text
    .replace(/-{2,}/g, "-")
    .replace(/^-|-$|^_|_$/g, "")
    .replace(/-_|_-/g, "_")

  // !ligatures make - | - && _ | _ confusing! -|- _|_
  // remove any text that begins with - or _ && end with - or _
}

// id_to_key_slug("F3pfGC5FmxkDPhLeW") // data structure with persistent versioning making copies of state to keep track of changes over time
// id_to_key_slug("F3XGCTu8hZW9Nc2QT") // UR
// id_to_key_slug("HWLTjZrhernsLocy7") //JS
// id_to_key_slug("5jxvqtuiTvhdhxys7") // AI/ML
// getDocKey("65wxDaND8qaAd8G4g") // yarn add PKG@latest
// id_to_key_slug("65wxDaND8qaAd8G4g") // yarn add PKG@latest
/**
 *
 * @param id string ID for direct parent to search (or return undefined early if no string input)
 * @returns undefined || string for one direct parent ID
 */

export function getParentId(id?: string) {
  if (!id) return
  const parent = map_all.get(id)?.parent
  return parent
}

/**Recursive func to get ID_STRING[] from SINGLE ID string
 * will UNSHIFT parent ID onto string[] while one exists
 * //BAD IDEA TO PUSH from 0 leaf to end node
 *
 * @param id string ID for one direct parent to initiate search
 * @returns string_ID[] EXCLUDING the original node
 */

function calcParentIDsArray(id: string) {
  const array_out = [id]
  let new_parent_id = getParentId(id)
  while (new_parent_id !== null && new_parent_id !== undefined) {
    if (typeof new_parent_id === "string") array_out.unshift(new_parent_id)
    new_parent_id = getParentId(new_parent_id)
  }

  return ["root", ...array_out]
}

export function getParentIDsArray(id: string) {
  return map_all_parents.get(id) || []
}

const array_output = [[""]]
//! Ugly fix to get TSC to infer type
//! Also, recall that const array can mutate
array_output.pop()

let l = 0
const max = map_all_parents.size + 1
const init_breadcrumb_time = uptime()
false &&
  map_all_parents.forEach((id) => {
    const ID_strings_array = id
    const final_ID =
      ID_strings_array.toString().split(",")[
        ID_strings_array.toString().split(",").length - 1
      ] //! disgusting repetition! why can't JS have negative indexing!
    // console.log(final_ID)
    // let output_key_text_strings_array = ["root"]
    l += 1
    process.stdout.write(
      `${l < max - 1 ? "⏳ GEN" : "✅ GENERATION for"}: ${(
        (100 * (l + 1)) /
        max
      ).toPrecision(3)}% of ${l} for Breadcrumbs ARRAY generated ${
        l === max - 1
          ? `in ${(uptime() - init_breadcrumb_time).toPrecision(3)}s ⏱\n\n`
          : ""
      }`
    )
    process.stdout.clearLine(1)
    process.stdout.clearLine(1)
    process.stdout.cursorTo(0)
    const output = ID_strings_array.filter(
      (x) => x !== null && x !== undefined
    ).map((id: string) => {
      if (id === "root") return `${final_ID}`
      const key_doc = map.get(id)?.["key"] || null //|| map.get(id)?.["value"]
      // if (!key_doc) console.log(id, "still does not have key or value")
      if (key_doc)
        try {
          const output = make_mdx(key_doc) || "__UNDEFINED__@_@__" //slugify .toLowerCase().split(" ").join("-") || null
          // console.log(output)
          return output
        } catch (err) {
          return "__ERROR__@_@__"
          //!DUMB ignore it and let it silently fail?!
        }
      if (typeof key_doc === "undefined") return "__UNDEFINED__@_@__"
      return "__NULL__@_@__"
      // if (typeof key_doc === "null") return "__NULL__@_@__"
      // const text_key = make_mdx(key_doc)
    })

    // console.log(output)

    if (output) array_output.push(output)
    // if (typeof output === "undefined") array_output.push("__UNDEFINED__@_@__")
  })

// console.log("array_output=", array_output)

export const map_to_mdx = new Map(array_output.map((x) => [x[0], x.slice(1)]))

export function slugify_mdx(str: string) {
  return str.replace(/[:space:]/g, "-")
}

export const map_to_mdx_slug = new Map(
  array_output.map((x) => [x[0], x.slice(1).map((str) => str)])
)

export const path_map: Map<string, string> = new Map()
/**
 * @function get_path_from_id
 *
 * will keep this helper here instead of utilities or data
 * since path_map is set from this folder
 *
 * @param id
 * @returns
 */
export function get_path_from_id(id: string) {
  return path_map.get(id)
}

export const map_alias_ids: Map<string, string[]> = new Map()
export const map_alias_slugs: Map<string, string[]> = new Map()
export function getAliasIDs(id: string) {
  return map_alias_ids.get(id) || []
}
export function getAliasSlugs(id: string) {
  return map_alias_slugs.get(id) || []
}

let num_aliases = 0

const map_path_to_id_time = uptime()
let num_paths_mapped_to_id = 0
let num_child_slugs = 0

;(function loop_dirs_to_make_sure_path_maps_set_up_first() {
  root_main_topic_ids.forEach((id: string, i: number) => {
    const doc_slug = id_to_key_slug(id)
    const dirpath = `/docs/${doc_slug}`
    path_map.set(id, dirpath)
    num_paths_mapped_to_id += 1
    LOG_CLI_PROGRESS(
      num_paths_mapped_to_id,
      map_size,
      "slugs",
      "MAP ID PATH",
      "⏳",
      "✅ MAP",
      map_path_to_id_time,
      num_aliases,
      "Aliases found"
    )
    const children = getChildren(id)
    if (children)
      loop_child_to_make_sure_path_maps_set_up_first(dirpath, children)
  })
})()

function loop_child_to_make_sure_path_maps_set_up_first(
  parent_path: string,
  children: string[]
) {
  children.forEach((id) => {
    const slug_key = id_to_key_slug(id)
    const dirpath = `${parent_path}/${slug_key}`
    path_map.set(id, dirpath)
    num_paths_mapped_to_id += 1
    LOG_CLI_PROGRESS(
      num_paths_mapped_to_id,
      map_size,
      "slugs",
      "MAP ID to PATH",
      "⏳",
      "✅ MAP",
      map_path_to_id_time,
      `${num_aliases} keys mapped to ${num_child_slugs} aliases`
    )
    // Add push_alias_to_parent step to map out IDs to aliases
    if (slug_key === "Aliases") push_alias_to_parent(id)

    // FUCK - don't forget the RECURSION layer!!
    const children = getChildren(id)
    if (children)
      loop_child_to_make_sure_path_maps_set_up_first(dirpath, children)
  })
}

function push_alias_to_parent(id: string) {
  num_aliases += 1
  // process.stdout.write(`Aliases Found: ${num_aliases}\n`)
  // process.stdout.clearLine(1)
  // process.stdout.cursorTo(0)

  const parent_id = getParentId(id)
  const children_ids = getChildIDs(id)
  if (!parent_id || !children_ids) return

  map_alias_ids.set(parent_id, children_ids)
  const children_slugs = children_ids.map((id) => {
    num_child_slugs += 1
    return id_to_key_slug(id)?.replace(/[ ]$/g, "")
    //! Don't use id_to_plaintext - it will output illegal chars that break mdx-loader!
    //! USE id_to_key_slug for now - which guarantees mdx-loader safe chars!
    // REPLACE WHITESPACE AT END
    //! "wasd .mdx" not allowed to have empty space!
  })
  const children_slugs_again_to_please_typescript = children_slugs.filter(
    (child) => child !== undefined
  ) as string[]
  // .filter((child) => child !== undefined) //! Typescript doesn't infer .filter() ?!
  map_alias_slugs.set(parent_id, children_slugs_again_to_please_typescript)
}

// console.table(map_alias_slugs)
// console.log("early exit")

process.stdout.write(
  `\n\n================================================\nCOMPLETE: JSON MAP scripts in ${uptime()} \n================================================\n\nNEXT STEP: MDX SSG Scripts \n================================================\n\n`
)

// console.dir(id_to_mdx("F3pfGC5FmxkDPhLeW"))
// console.dir(id_to_mdx("F3XGCTu8hZW9Nc2QT"))
// console.dir(id_to_mdx("HWLTjZrhernsLocy7"))
// console.dir(id_to_mdx("5jxvqtuiTvhdhxys7"))
// console.dir(id_to_mdx("65wxDaND8qaAd8G4g"))

// process.exit()

// id_to_key_slug("F3pfGC5FmxkDPhLeW") // data structure with persistent versioning making copies of state to keep track of changes over time
// id_to_key_slug("F3XGCTu8hZW9Nc2QT") // UR
// id_to_key_slug("HWLTjZrhernsLocy7") //JS
// id_to_key_slug("5jxvqtuiTvhdhxys7") // AI/ML
// getDocKey("65wxDaND8qaAd8G4g") // yarn add PKG@latest
// id_to_key_slug("65wxDaND8qaAd8G4g") // yarn add PKG@latest
