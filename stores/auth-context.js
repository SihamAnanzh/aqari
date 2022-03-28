import { createContext, useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
export const AuthContext = createContext({
  userId: "",
  token: '',
  isLoggedIn: false,
  login: (token) => { },
  logout: () => { },
  isLoadding: true,
  loadding: () => { },
  premiumAdd: 0,

})


export const AuthContextProvider = (props) => {
  const session=useSession()
  let intitToken
  let intiId = '' 
  // const ISSERVER = typeof window === "undefined";

  // if (!ISSERVER) {
  //   intitToken = sessionStorage.getItem('token')
  //   intiId = sessionStorage.getItem('userId')

  // }

  const [token, setToken] = useState(intitToken)
  const [loadding, setloadding] = useState(true)
  const [userId, setUserId] = useState(intiId)
  const [premiumAdd, setPremiumAdd] = useState(0)
  const route = useRouter()
  const userIsLoggedIn = !!token








  const loginHandler = (token, userId) => {
    // sessionStorage.setItem('token', token)
    sessionStorage.setItem('userId', userId)
    setToken(token)
    setUserId(userId)


  }
  const logoutHandler = () => {
    setloadding(!loadding)
    route.replace('/')
    setToken(null)
    sessionStorage.clear()

  }
  const loaddingHandler = (state) => {
    setloadding(state)

  }
  const premiumHablder = (add) => {
    setPremiumAdd(add)
  }



  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    isLoadding: loadding,
    login: loginHandler,
    logout: logoutHandler,
    loadding: loaddingHandler,
    userId: userId,
    premiumAdd: premiumHablder,
    premiumAdd: premiumAdd
  }
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  )
}