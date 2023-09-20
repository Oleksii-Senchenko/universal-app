import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ component: Component, redirectTo }) => {
    const isLogin = useSelector(state => state.auth.isLogin)
    return !isLogin ? <Navigate to={redirectTo} /> : <Component />
}
export default PrivateRoute