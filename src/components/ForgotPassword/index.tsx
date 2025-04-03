import { useState } from "react"

//components
import Container from "../Container"
import Input from "../Input"
import Button from "../Button";
import { IoIosMail } from "react-icons/io";

const ForgotPassword = () => {

    const [forgot, setForgot] = useState('');

    return (
        <Container>
            <div className="w-[450px] bg-white/15 backdrop-blur-md border-2 border-white/20 p-10 rounded-lg">
                <h2 className="text-white text-3xl mb-4">Resetar sua Senha</h2>
                <form>
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
                </form>
            </div>
            
        </Container>
    )
}

export default ForgotPassword