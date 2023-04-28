/**
 * Copyright(c) Roger Jiang
 */

import { createContext, useState } from "react"

const UserContext = createContext({})
export default UserContext

interface UserProps {
  children?: React.ReactNode
}

export function UserProvider({ children }: UserProps) {
  const [user, setUser] = useState(null)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
