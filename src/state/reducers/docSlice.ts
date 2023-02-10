import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { id_to_key_slug } from "../../data"
import { id_to_mdx, id_to_plaintext } from "../../utility"
import { RootState } from "../store"

export const docSlice = createSlice({
  name: "doc",
  initialState: {
    target: { uid: "root", plaintext: "", key_slug: "", key_mdx: "" }, // "target" to set doc UID string to control which doc to render. "root" for top-level
    path_uid: ["root"], // UID_string[] to track where
    path_slug: ["./"],
  },
  reducers: {
    set_target: (
      state,
      action: PayloadAction<{
        uid: string
        plaintext: string
        key_slug: string
        key_mdx: string
      }>
    ) => {
      const { uid } = action.payload
      state.target.uid = uid
      if (uid === "root") state.target.plaintext = ""
      if (uid !== "root") {
        state.target.plaintext = id_to_plaintext(uid) || ""
        state.target.key_slug = id_to_key_slug(uid) || ""
        state.target.key_mdx = id_to_mdx(uid) || ""
      }
    },
    set_path: (state, action: PayloadAction<string>) => {
      state.path_uid = [action.payload]
    },
  },
})

export const { set_target, set_path } = docSlice.actions
export const select_doc_target = (state: RootState) => state.doc.target
export const select_doc_path = (state: RootState) => state.doc.path_uid

export default docSlice.reducer
