import rem_json from "./rem.json"
import { Rem_DB, Rem_obj } from "../rem-json"
import { make_mdx, make_plaintext, LOG_CLI_PROGRESS } from "../utility"
import { uptime } from "process"
import { exec } from "child_process"
// import { get_rem_list } from "../utility"

export const rem: Rem_DB = rem_json as Rem_DB
// console.log(JSON.stringify(rem).length);
// import fs from "fs-extra"

process.stdout.write(
  "\x1b[36m================================================\nINIT: ROGER JIANG JSON TO SSG MDX SCRIPTS © 2023\n================================================\n\x1b[89m\n\n"
)
// export let docs_wiped = false
// ;(function wipe_docs_dir() {
//   const wipe_init_time = uptime()
//   process.stdout.write(`🧹 Wiping Docusuaurus docs dir (.\\docs\\*)...`)
//   try {
//     exec("rm -r ./docs/*")
//   } catch (err) {
//     console.log(err)
//   }
//   process.stdout.clearLine(1)
//   process.stdout.cursorTo(0)
//   process.stdout.write(
//     `✅ WIPE COMPLETE: ..\\docs\\* CLEARED in ${(
//       uptime() - wipe_init_time
//     ).toFixed(2)}s`
//   )
// })

/**
 * IIFE on app load to del unused props from JSON to save space
 * TODO: benchmark diff in speed after deleting unused
 */
;(function Load() {
  const docs_length = rem.docs.length
  const json_cleanup_init_time = uptime()

  rem.docs.forEach((doc: Rem_obj, i) => {
    LOG_CLI_PROGRESS(
      i,
      docs_length,
      "JSON trim unused props",
      "🧹 CLEANING",
      "✅ CLEAN COMPLETE",
      json_cleanup_init_time
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
export const map = new Map(
  rem.docs.map((doc, i) => {
    LOG_CLI_PROGRESS(
      i,
      docs_length,
      "JSON to HASH table",
      "⏳ MAPPING",
      "✅ MAP COMPLETE",
      init_json_map_time
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
      "IDs to Adjancency List of Parent IDs",
      "⏳ MAPPING",
      "✅ MAP COMPLETE",
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

export function getDocKey(id: string, val?: "key" | "value") {
  const doc = getDoc(id)
  if (!doc) return
  val = val ? "value" : "key"

  const text_array = doc[val]
  if (!text_array) return
  const text = make_plaintext(text_array)
  return text
}

/**
 *
 * @param id
 * @returns
 */

export function id_to_key_slug(id: string) {
  const text = getDocKey(id)
    ?.replace(/[?/\\@[\\^{}\]|`~:;,=+ ]/g, "-")
    ?.replace(/[![\]"'*()<>]/g, "")
    ?.replace(/[-]{2,}/g, "-")
    ?.replace(/[^A-z0-9_-]/g, "") // clear anything not approved
  if (!text) return
  // console.log(text)
  if (text.length > 24)
    return (
      text
        // .slice(0, 24)
        .split("/")
        .map((str) => str.slice(0, 9))
        .join("-")
    ) // ignore super-long
  return text.split("/").join("-")
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

/**Recursive func to get ID_STTRING[] from SINGLE ID string
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
    `${l < max - 1 ? "⏳ GENERATING" : "✅ GENERATION COMPLETE for"}: ${(
      (100 * (l + 1)) /
      max
    ).toPrecision(3)}% of ${l} for Breadcrumbs ARRAY generated ${
      l === max - 1
        ? `in ${(uptime() - init_breadcrumb_time).toPrecision(3)}s\n\n`
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

// console.log("map_to_mdx_slug=", map_to_mdx_slug)

/*
  const path_IDs_array = getParentIDsArray(id).filter(
    (x) => x !== null && x !== undefined
  )
  */

// console.log(array_output)

//TODO: try nest map within map? How affect speed?
/*
export const db_map = new Map(
  root.map((doc) => [
    doc._id,
    new Map(
      doc.children.map((id) => [
        id,
        new Map(
          map
            .get(id)
            ?.children.map((id) => [id, map.get(id)?.children])
        ),
      ])
    ),
  ])
);
console.table(db_map);
*/

// export const db_map = root_child_map.forEach((child_list) => {
//   if (!child_list) return;
//   child_list.forEach((id) => console.log(id));
// });
// console.log(map.get("2n8Gw7PvXGPcFQm7i"));

process.stdout.write(
  `================================================\nCOMPLETE: All JSON mapping scripts in ${uptime()}\n================================================\n\n`
)
