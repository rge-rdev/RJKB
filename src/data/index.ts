import rem_json from "./rem.json"
import { Rem_DB, Rem_obj } from "../rem-json"
import { make_mdx } from "../utility"
// import { get_rem_list } from "../utility"

export const rem: Rem_DB = rem_json as Rem_DB
// console.log(JSON.stringify(rem).length);
// import fs from "fs-extra"

/**
 * IIFE on app load to del unused props from JSON to save space
 * TODO: benchmark diff in speed after deleting unused
 */
;(function Load() {
  rem.docs.forEach((doc: Rem_obj) => {
    Object.keys(doc).forEach((key: string) => {
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
        key !== "crt" //&&
        // key !== "createdAt"&&
        // key !== "references"
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

export const map = new Map(rem.docs.map((doc) => [doc._id, doc]))
export const root = rem.docs.filter((doc) => doc.n)
export const root_child_map = new Map(
  root.map((doc) => [doc._id, doc.children])
)

// export const map_parent = new Map(map.map((doc) => [id, doc.parent]))

/**
 * map_parent = hash map each doc ID to ONE direct parent
 * map_all_parents = hash map doc ID to ID string[] of parent path .push() to add itself to path
 */

export const map_parent = new Map(rem.docs.map((doc) => [doc._id, doc.parent]))
export const map_all_parents = new Map(
  rem.docs.map((doc) => [
    doc._id,
    [...calcParentIDsArray(doc.parent as string), doc._id], // TARGET NODE TO LAST INDEX
  ])
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

// export const map_doc_to_key = new Map(rem.docs.map((doc) => [doc._id, __RAW_KEY_TEXT))

// console.log(map_all_parents)
/**
 *
 * @param id string ID for direct parent to search (or return undefined early if no string input)
 * @returns undefined || string for one direct parent ID
 */

function getParentStr(id?: string) {
  if (!id) return
  return map_parent.get(id)
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
  let new_parent_id = getParentStr(id)
  while (new_parent_id !== null && new_parent_id !== undefined) {
    if (typeof new_parent_id === "string") array_out.unshift(new_parent_id)
    new_parent_id = getParentStr(new_parent_id)
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

map_all_parents.forEach((id) => {
  const ID_strings_array = id
  const final_ID =
    ID_strings_array.toString().split(",")[
      ID_strings_array.toString().split(",").length - 1
    ] //! disgusting repetition! why can't JS have negative indexing!
  // console.log(final_ID)
  // let output_key_text_strings_array = ["root"]
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

console.log(array_output)
console.log("array_output=", array_output)

export const map_to_mdx = new Map(array_output.map((x) => [x[0], x.slice(1)]))

function slugify_mdx(str: string) {
  return str.replace(/[:space:]/g, "-")
}

export const map_to_mdx_slug = new Map(
  array_output.map((x) => [x[0], x.slice(1).map((str) => str)])
)

console.log("map_to_mdx_slug=", map_to_mdx_slug)

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
