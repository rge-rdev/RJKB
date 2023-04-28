/**
 * Copyright(c) Roger Jiang
 */

import { useSelector, useDispatch } from "../hooks"

import { decrement, increment, selectCount } from "../state/reducers/countSlice"

/**
 * BAD RTK doc snippet suggests
 * const count = useAppSelector((state) => state?.count?.value)
 */

export function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  // const count = useAppSelector((state) => state?.count?.value)
  const count = useSelector(selectCount)
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <b>{count}</b>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}
