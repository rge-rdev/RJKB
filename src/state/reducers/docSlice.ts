import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

export const docSlice = createSlice({
  name: "doc",
  initialState: {
    target: "root",
  },
  reducers: {
    set_target: (state, action: PayloadAction<string>) => {
      state.target = action.payload
    },
  },
})

export const { set_target } = docSlice.actions
export const select_doc_target = (state: RootState) => state.doc.target

export default docSlice.reducer
