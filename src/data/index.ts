import rem_json from "./rem.json"
import { Rem_DB, Rem_obj } from "../rem-json"
// import { get_rem_list } from "../utility"

export const rem: Rem_DB = rem_json as Rem_DB
// console.log(JSON.stringify(rem).length);
;(function Load() {
  rem.docs.forEach((doc: Rem_obj) => {
    Object.keys(doc).forEach((key: string) => {
      if (
        // delete every prop not being used to save speed!
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

export const map = new Map(rem.docs.map((doc) => [doc._id, doc]))
export const root = rem.docs.filter((doc) => doc.n)
export const root_child_map = new Map(
  root.map((doc) => [doc._id, doc.children])
)

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
