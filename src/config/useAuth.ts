import { useState, useEffect } from "react";
import { auth } from "./firebaseConfig";

import { signInWithEmailAndPassword, signOut, onAuthStateChanged, User, createUserWithEmailAndPassword } from 'firebase/auth'

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


    async function register(email: string, password: string) {
        try {
            const useRegister = await createUserWithEmailAndPassword(auth, email, password);
            setUser(useRegister.user);
            
        } catch (error) {
            console.log('Erro ao registrar o usuário', error);
        }
    }

    async function login(email: string, password: string){

        try {

            const login = await signInWithEmailAndPassword(auth, email, password);
            setUser(login.user);
            
        } catch (error) {
            console.log('Erro ao logar', error);
        }
    }


    async function logout(){
        await signOut(auth)
        setUser(null);
    }

    
    return { user, loading, register, login, logout }

}

