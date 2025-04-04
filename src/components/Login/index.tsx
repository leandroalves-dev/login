import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

//icons
import { FaLock } from "react-icons/fa"
import { IoIosMail } from "react-icons/io";

//components
import Input from "../Input";
import Button from "../Button";
import Container from "../Container";

//auth
import { useAuth } from "../../config/useAuth";
import AlertMessage from "../AlertMessage";

const Login = () => {

    const { login } = useAuth()
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();

        if(!email || !password){
            setError('Preencha todos os campos')
            setTimeout( () => { setError('') },1500)
            return;
        }

        try {
            await login(email, password);
            setSuccess('Login efetuado com sucesso!');
            setEmail('');
            setPassword('');
            setTimeout( () => {
                setSuccess('')
                navigate('/inicio')
            },1500)

        } catch (error) {
            setError(error instanceof Error ? error.message : 'Erro ao fazer login.');
            setTimeout(() => setError(''), 3000);
        }
    }

    return (
       <Container>
            <div className="w-[450px] bg-white/15 backdrop-blur-md border-2 border-white/20 p-10 rounded-lg">
                <h2 className="text-white text-3xl mb-4">Acesse o sistema</h2>
                <form onSubmit={handleSubmit}>
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
                <AlertMessage type="error" message={error} />
                <AlertMessage type="success" message={success} />
            </div>
       </Container>
    )
}

export default Login