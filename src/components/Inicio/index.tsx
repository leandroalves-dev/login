import { useNavigate } from "react-router-dom"

//components
import Container from "../Container"

//auth
import { useAuth } from "../../config/useAuth"


const Inicio = () => {

    const { logout, user } = useAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
        await logout();
        navigate("/login");
    }

    console.log('USER', user?.displayName)

    return (
        <Container>
            <div className="w-[450px] bg-white/15 backdrop-blur-md border-2 border-white/20 p-10 rounded-lg">
                <div className="flex items-center justify-center gap-5">
                    <h2 className="text-white text-3xl">Bem-vindo {user?.displayName}</h2>
                    <button onClick={handleLogout} className="text-zinc-800 cursor-pointer text-[20px]">Logout</button>
                </div>
                
            </div>
        </Container>
    )
}

export default Inicio
