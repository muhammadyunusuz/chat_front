import { useEffect } from "react"
import { useAuth } from "../../contexts/AuthContext"
import Login from "../Login/Login"

export default function Chat () {

    const [token, setToken] = useAuth()

    if(!token) {
        return <Login />
    }

    return (
        <h1 onClick={ e => setToken() }>Chat</h1>
    )
}