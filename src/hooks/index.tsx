import { useState, useLayoutEffect } from "react"
import { rem, root } from "../data"

import { useDispatch, useSelector } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"
import type { RootState, AppDispatch } from "../state/store"

/**
 * Redux Hooks with types
 */

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

/**
 * del @arg step from exports since unused
 *
 * @param mode
 * @returns
 */

export function useDbChunk(mode: string): any {
  const step = 500
  const max_size = rem.docs.length
  const [load, setLoad] = useState(0)
  const [db_chunk, set_db_chunk] = useState(
    rem.docs.slice(load, load + step - 1)
  )

  useLayoutEffect(() => {
    setLoad((load) => load + step)
    if (mode === "chunk") {
      if (load + step > max_size) {
        set_db_chunk(rem.docs.slice(0, max_size))
        setLoad(max_size)
      } else {
        set_db_chunk(rem.docs.slice(0, load + step))
        setLoad((load) => load + step)
      }
    }
    if (mode === "tree") set_db_chunk(root)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [max_size, mode])

  return [load, setLoad, max_size, db_chunk, set_db_chunk]
}

//TODO: convert setMode to hook

export function useMode(cur: string = "tree") {
  const [mode, setMode] = useState("tree")
  cur === "tree" ? setMode("chunk") : setMode("tree")
  return mode
}

/**
 *
 * @returns path as string[] & setPath()
 */

export function usePath() {
  const [path, setPath]: [
    string[],
    React.Dispatch<React.SetStateAction<string[]>>
  ] = useState(["root"])
  return { path, setPath }
}

// TODO: WIP to refactor render_chunk or decide if necessary
// export function useChunk(
//   db_chunk: Rem_obj[],
//   set_db_chunk?: Function
// ) {
//   if (typeof db_chunk === "undefined") return;
//   if (!db_chunk) return;
//   return db_chunk.map((doc, i) => {
//     let text_key: string = "";
//     let text_val: string = "";
//     let card_type = 0;
//     if (!doc["key"].length) return null; // skip empty rem
//     if (doc["key"].length > 0) text_key += make_str(doc["key"]);
//     if (!doc["value"]) card_type = 0;
//     if (doc["value"]) {
//       text_val += make_str(doc["value"]);
//       card_type = 1;
//     }
//     if (!doc["enableBackSR"]) card_type = 2;

//     const _id = doc["_id"];
//     const childDocList = doc?.["children"];
//     let n: undefined | number;
//     if (doc["n"]) n = 1;

//     return (
//       <Suspense
//         key={_id}
//         fallback={
//           <div>
//             <sub>loading each note tree...</sub>
//           </div>
//         }
//       >
//         <Rem
//           i={i}
//           text_key={text_key}
//           text_val={text_val}
//           card_type={card_type}
//           key={_id}
//           _id={_id}
//           children={childDocList}
//           set_db_chunk={set_db_chunk}
//           n={n}
//         ></Rem>
//       </Suspense>
//     );
//   });
// }

// const countRef = createRef();

// export function useCount() {
//   // const [count, setCount] = useState(0);
//   const ref = useRef(0);
//   console.log(ref);
//   console.log(ref.current);
//   return ref.current;
// }
