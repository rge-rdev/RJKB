import { configureStore } from "@reduxjs/toolkit"
import CountSlice from "./reducers/countSlice"

export const store = configureStore({
  reducer: {
    count: CountSlice,
  },
})

// Infer & Export types for RootState & AppDispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
