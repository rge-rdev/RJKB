import { configureStore } from "@reduxjs/toolkit"
import CountSlice from "./reducers/countSlice"
import testSlice from "./reducers/testSlice"
import debugSlice from "./reducers/debugSlice"

export const store = configureStore({
  reducer: {
    count: CountSlice,
    test: testSlice,
    debug: debugSlice,
  },
})

// Infer & Export types for RootState & AppDispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
