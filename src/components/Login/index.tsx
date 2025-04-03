import { useState } from "react";
import { Link } from "react-router-dom"

//icons
import { FaLock } from "react-icons/fa"
import { IoIosMail } from "react-icons/io";

//components
import Input from "../Input";
import Button from "../Button";
import Container from "../Container";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
       <Container>
            <div className="w-[450px] bg-white/15 backdrop-blur-md border-2 border-white/20 p-10 rounded-lg">
                <h2 className="text-white text-3xl mb-4">Acesse o sistema</h2>
                <form>
                    <div className="flex flex-col gap-4">
                        <div className="relative">
                            <Input
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Insira seu e-mail"
                                onChange={(e) => setEmail(e.target.value)}
                            />                       
                            <IoIosMail size={16} color="#FFF" className="absolute right-5 top-3.5" />
                        </div>
                        <div className="relative">
                            <Input
                                type="password"
                                name="password"
                                value={password}
                                placeholder="Insira sua senha"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <FaLock size={16} color="#FFF" className="absolute right-5 top-3.5" />
                        </div>
                        <div className="flex flex-col text-zinc-800">
                            <Link to='/forgotPassword' className="hover:underline text-right">Esqueceu a senha?</Link>
                    
                            <div className="flex justify-between items-center">
                                <p className="text-white">Não tem conta?</p>
                                <Link to="/register" className="text-zinc-800 hover:underline">Registrar</Link> 
                            </div>
                        </div>
                        <Button title="Acessar o sistema" />
                    </div>
                </form>
            </div>
       </Container>
    )
}

export default Login