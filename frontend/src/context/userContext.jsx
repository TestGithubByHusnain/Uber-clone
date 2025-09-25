import React, { createContext } from 'react'
export const UserDataContext= createContext();
import { useState } from 'react'

const UserContext = ({children}) => {
    const [user, setUser] = useState({
        email:'',
        fullname:{
            firstName:'',
            lastName:''
        }
    })
  return (
    <div>
        <UserDataContext.Provider value={{user, setUser}}>
        {children}
        </UserDataContext.Provider>
    </div>
  )
}

export default UserContext