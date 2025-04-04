import { useState, useEffect } from "react";
import { auth } from "./firebaseConfig";

import { signInWithEmailAndPassword, signOut, onAuthStateChanged, User, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { FirebaseError } from "firebase/app";

export function useAuth() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const authentication = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false);
        })

        return () => authentication()
    },[]);


    async function register(email: string, password: string, name: string) {
        try {
            const useRegister = await createUserWithEmailAndPassword(auth, email, password);
            const newUser =  useRegister.user

            await updateProfile(newUser, { displayName: name });

            setUser({ ...newUser, displayName: name });
            
        } catch (error) {
            console.log('Erro ao registrar o usuário', error);
            throw error;
        }
    }

    async function login(email: string, password: string){

        try {

            const login = await signInWithEmailAndPassword(auth, email, password);
            setUser(login.user);
            
        } catch (error: unknown) {
            if (error instanceof FirebaseError) {
                if (error.code === "auth/invalid-credential") {
                    throw new Error("E-mail ou senha incorretos. Verifique os dados e tente novamente.");
                } else if (error.code === "auth/invalid-email") {
                    throw new Error("Formato de e-mail inválido.");
                } else if (error.code === "auth/user-not-found") {
                    throw new Error("Usuário não encontrado. Verifique o e-mail e tente novamente.");
                } else if (error.code === "auth/wrong-password") {
                    throw new Error("Senha incorreta. Tente novamente.");
                } else {
                    throw new Error("Ocorreu um erro inesperado. Tente novamente.");
                }
            }
        }
    }


    async function logout(){
        await signOut(auth)
        setUser(null);
    }

    
    return { user, loading, register, login, logout }

}

