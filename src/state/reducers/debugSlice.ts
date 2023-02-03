import { createSlice } from "@reduxjs/toolkit"
// import type { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

export const debugSlice = createSlice({
  name: "Debug Settings",
  // `createSlice` will infer the state type from the `initialState` argument

  initialState: {
    debug_mode: true,
    chunk_mode: true, // set legacy chunk loading mode to showcase terrible performance of synchronous React with loops with loops with loops with ...
    mdx_mode: true, // set render mode to switch
  },
  reducers: {
    toggle_debug: (state) => {
      state.debug_mode = !state.debug_mode
    },
    toggle_chunk: (state) => {
      state.chunk_mode = !state.chunk_mode
    },
    toggle_mdx: (state) => {
      state.mdx_mode = !state.mdx_mode
    },
  },
})

export const { toggle_debug, toggle_chunk, toggle_mdx } = debugSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectDebug = (state: RootState) => state.debug.debug_mode

export default debugSlice.reducer
