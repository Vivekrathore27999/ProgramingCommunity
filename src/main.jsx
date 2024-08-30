import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './styles/app.css'

import { createContext } from 'react'

export const Context = createContext({isAuthenticated:false})

const AppWrapper = ()=>{
  const [isAuthenticated,setisAuthenticated] = useState(false)
  const [loading,setloading] = useState(false)
  const [User,setUser] = useState({})
  const [clicked,setclicked] = useState(false)
  return(
  <Context.Provider value={{
    isAuthenticated,
    setisAuthenticated,
    loading,
    setloading,
    User,
    setUser,
    clicked,
    setclicked
  }}>
    <App />
    </Context.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AppWrapper/>
  </React.StrictMode>,
)
