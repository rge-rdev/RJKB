/**
 * Copyright(c) Roger Jiang
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

export const debugSlice = createSlice({
  name: "debug",
  // `createSlice` will infer the state type from the `initialState` argument

  initialState: {
    debug_mode: true,
    render_mode: "tree", // set legacy chunk loading mode to showcase terrible performance of synchronous React with loops with loops with loops with ...
    mdx_mode: true, // toggle new MDX render mode (for docusaurus) or switch to legacy HTML equivalent
    log_mode: false, // toggle console log spam for debug text rendering for every node
    uid_mode: false, // toggle showing UID for breadcrumbs || paths
  },
  reducers: {
    toggle_debug: (state) => {
      state.debug_mode = !state.debug_mode
    },
    set_render_mode: (state, action: PayloadAction<string>) => {
      state.render_mode = action.payload
    },
    toggle_mdx: (state) => {
      state.mdx_mode = !state.mdx_mode
    },
    toggle_log: (state) => {
      state.log_mode = !state.log_mode
    },
    toggle_uid: (state) => {
      state.uid_mode = !state.uid_mode
    },
  },
})

export const {
  toggle_debug,
  set_render_mode,
  toggle_mdx,
  toggle_log,
  toggle_uid,
} = debugSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectDebug = (state: RootState) => state.debug.debug_mode
export const select_debug_mode = (state: RootState) => state.debug.debug_mode
export const select_debug_render_mode = (state: RootState) =>
  state.debug.render_mode
export const select_debug_mdx_mode = (state: RootState) => state.debug.mdx_mode
export const select_debug_log = (state: RootState) => state.debug.log_mode
export const select_debug_uid = (state: RootState) => state.debug.uid_mode

export default debugSlice.reducer
