import { useEffect } from "react"
import { Navigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { getToken } from "../../redux/features/token.js"
import { getFirstName } from "../../redux/features/firstName.js"
import { setLastName } from "../../redux/features/lastName.js"

export default function Logout() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getToken(null))
        dispatch(getFirstName(""))
        dispatch(setLastName(""))
        localStorage.removeItem("token")
    })
        return <Navigate to="/" /> 
}