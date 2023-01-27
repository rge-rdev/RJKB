import rem_json from "./rem.json"
import { Rem_DB, Rem_obj } from "../rem-json"
import _ from "lodash"
import { isEqual } from "lodash"
// import { get_rem_list } from "../utility"

export const rem: Rem_DB = rem_json as Rem_DB
// console.log(JSON.stringify(rem).length);
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
        key !== "crt"
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
    [doc._id, ...getParentIDsArray(doc.parent as string)], // TODO WTF FIX
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

/**Recursive func to PUSH parent ID onto string[] while one exists
 *
 * @param id string ID for one direct parent to initiate search
 * @returns string_ID[] EXCLUDING the original node
 */

function getParentIDsArray(id: string) {
  const array_out = [id]
  let new_parent_id = getParentStr(id)
  while (new_parent_id) {
    if (typeof new_parent_id === "string") array_out.push(new_parent_id)
    new_parent_id = getParentStr(new_parent_id)
  }

  return array_out
}

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
