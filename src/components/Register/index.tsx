/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"

//icons
import { Link } from "react-router-dom";
import { FaLock, FaUser } from "react-icons/fa";

//componets
import Container from "../Container"
import Input from "../Input";
import Button from "../Button";
import { IoIosMail } from "react-icons/io";
import { useAuth } from "../../config/useAuth";
import AlertMessage from "../AlertMessage";

const Register = () => {

    const { register } = useAuth()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();

        if(!email || !password || !name){
            setError('Preencha todos os campos')
            setTimeout( () => { setError('') },1500)
            return;
        }

        try {
            await register(email, password, name)
            setSuccess('Usuário cadastrado com sucesso!');
            setEmail('');
            setPassword('');
            setName('');
            setTimeout( () => { setSuccess('') },1500)

        } catch (error: any) {
            if(error.code === 'auth/email-already-in-use'){
                setError('Esse e-mail já está cadastrado!')
                setTimeout( () => { setError('') },1500)
            }else{
                setError('Erro ao registrar usuário')
                setTimeout( () => { setError('') },1500)
            }
        }
    }

    return (
        <Container>
            <div className="w-[450px] bg-white/15 backdrop-blur-md border-2 border-white/20 p-10 rounded-lg">
                <h2 className="text-white text-3xl mb-4">Registrar-se</h2>
                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                    <div className="relative">
                        <Input
                            type="text"
                            name="name"
                            value={name}
                            placeholder="Insira seu nome"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <FaUser size={16} color="#FFF" className="absolute right-5 top-3.5" />
                    </div>
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
                            <p className="text-white">Já tem conta?</p>
                            <Link to="/login" className="text-zinc-800 hover:underline">Logar</Link> 
                        </div>
                    </div>
                    <Button title="Registrar" />
                </form>
                <AlertMessage type="error" message={error} />
                <AlertMessage type="success" message={success} />
            </div>
        </Container>
    )
}

export default Register