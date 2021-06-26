import { AuthRouter, useAuth  } from "./contexts/AuthContext"

import Chat from "./components/Chat/Chat"
import Login from "./components/Login/Login"

export default function App () {

    return (
        <AuthRouter>
            <Chat />
        </AuthRouter>
    )
}