import React from 'react'
import { Route } from 'react-router-dom'

// @ts-ignore
const PublicRoute = ({ component: Component, restricted = false, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => <Component {...props} />}
    />
  )
}

export default PublicRoute


