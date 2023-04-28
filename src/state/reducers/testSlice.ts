/**
 * Copyright(c) Roger Jiang
 */

import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

export const testSlice = createSlice({
  name: "TEST",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: {
    num: 0,
    users: 100,
  },
  reducers: {
    increment: (state) => {
      state.num += 1
    },
    decrement: (state) => {
      state.num -= 1
    },
    addUser: (state, action: PayloadAction<number>) => {
      state.users += action.payload
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.num += action.payload
    },
  },
})

export const { increment, decrement, addUser, incrementByAmount } =
  testSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.test.num

export default testSlice.reducer
