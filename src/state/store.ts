import { configureStore } from "@reduxjs/toolkit"
import CountSlice from "./reducers/countSlice"
import testSlice from "./reducers/testSlice"
import debugSlice from "./reducers/debugSlice"
import docSlice from "./reducers/docSlice"

export const store = configureStore({
  reducer: {
    count: CountSlice,
    test: testSlice,
    debug: debugSlice,
    doc: docSlice,
  },
})

// Infer & Export types for RootState & AppDispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
