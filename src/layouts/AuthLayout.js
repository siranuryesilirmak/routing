import React from 'react'
import { Outlet } from 'react-router-dom'

function AuthLayout() {
  return (
    <div>
      <h2>Auth layout</h2>
      <hr/>
      <Outlet/>
    </div>
  )
}

export default AuthLayout
