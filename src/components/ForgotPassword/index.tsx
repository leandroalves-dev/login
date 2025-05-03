import { useState } from "react"
import { Link, useNavigate  } from "react-router-dom";

//components
import Container from "../Container"
import Input from "../Input"
import Button from "../Button";
import { IoIosMail } from "react-icons/io";
import AlertMessage from "../AlertMessage";
//Auth
import { useAuth } from '../../config/useAuth';

const ForgotPassword = () => {

    const { resetPassword } = useAuth();    

    const [forgot, setForgot] = useState('');
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('');

    const navigation = useNavigate();

    const handleSubmit = async(e: React.FormEvent) =>{
        e.preventDefault();

        if(!forgot){
            setError('Por favor, digite um e-mail válido');
            setTimeout(() => { setError('') },2000)
            return
        }

        try {
            await resetPassword(forgot);
            setSuccess("Se este e-mail estiver cadastrado, você receberá um link para redefinir sua senha.");
            setForgot("");
    
            setTimeout(() => {
                setSuccess("")
                navigation('/login')
            }, 4000);
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("Ocorreu um erro inesperado. Tente novamente.");
            }
            setTimeout(() => setError(""), 4000);
        }
    }

    return (
        <Container>
            <div className="w-[450px] bg-white/15 backdrop-blur-md border-2 border-white/20 p-10 rounded-lg">
                <h2 className="text-white text-3xl mb-4">Resetar sua Senha</h2>
                <form onSubmit={handleSubmit}>
                    <div className="relative">
                        <Input
                            type="text"
                            name="forgot"
                            value={forgot}
                            placeholder="Insira seu e-mail"
                            onChange={(e) => setForgot(e.target.value)}
                            className="mb-3"
                        />
                        <IoIosMail size={16} color="#FFF" className="absolute right-5 top-3.5" />
                    </div>
                    <Button title="Enviar" />
                    <Link to="/" className="text-zinc-800 hover:underline mt-3 inline-block">Voltar</Link> 
                </form>
                <AlertMessage type="error" message={error} />
                <AlertMessage type="success" message={success} />
            </div>
            
        </Container>
    )
}

export default ForgotPassword