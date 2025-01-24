import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Navigate } from 'react-router'

const UserAuthCheck = ({ children }) => {
    // const navigate = useNavigate()
    // const { email , _id } = useSelector((state) => state?.user?.data)
    // useEffect(() => {
    //     if (!email && !_id) {
    //         navigate("/signin", { replace: true })
    //     }
    // },[ email , _id])

    // if(!email && !_id){
    //     return <Navigate to="/signin" replace={true} />
    // }
    return (
        <>{children}</>
    )
}

export default UserAuthCheck