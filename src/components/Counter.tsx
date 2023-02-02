// import React, { useState } from "react"

import { useAppSelector, useAppDispatch } from "../hooks"

import { decrement, increment } from "../state/reducers/countSlice"

export function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state?.count?.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <b>{count}</b>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}
