Este é um sistema de autenticação simples e funcional, desenvolvido com React e integrado ao Firebase Authentication. O objetivo principal é oferecer uma base sólida para fluxos básicos de autenticação de usuários.

## Funcionalidades

**Cadastro de usuário (Register)**
-  Permite que novos usuários criem uma conta utilizando e-mail e senha.

**Login**
-  Acesso ao sistema através de e-mail e senha previamente cadastrados.

**Reset de senha (Esqueci a senha)**
-  Envio de link de recuperação de senha via e-mail, com suporte ao Firebase.

**Logout**
-  Encerramento seguro da sessão do usuário autenticado.

## Tecnologias usadas

- ![JavaScript](https://img.shields.io/badge/JavaScript-yellow?style=flat&logo=javascript&logoColor=white) 
- ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
- ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) 
- ![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat&logo=html5&logoColor=white)
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=whit;e)

## Configurando Firebase Authentication no DevCusto

1.   **Criar e Configurar um Projeto no Firebase**

-   Acesse o Firebase Console.
-   Clique em Adicionar Projeto e siga as instruções para criá-lo.
-   No painel do Firebase, vá até Build → Authentication.
-   Clique na aba Sign-in method.
-   Habilite a opção E-mail/Senha e clique em Salvar.

2.   **Instalar o Firebase no Projeto**

-   npm install firebase

3.   **Configurar o Firebase no Projeto**

-   Vá até Configurações do Projeto → Configuração → Credenciais.
-   Copie o JSON de configuração do Firebase e adicione no seu código:

```javascript
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "VITE_FIREBASE_API_KEY",
  authDomain: "VITE_FIREBASE.firebaseapp.com",
  projectId: "VITE_FIREBASE_PROJETO",
  storageBucket: "VITE_FIREBASE.appspot.com",
  messagingSenderId: "VITE_FIREBASE_ID",
  appId: "VITE_FIREBASE_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
````

##  Demonstração do projeto

![Image](https://github.com/user-attachments/assets/e3139091-5fdd-4470-9221-0f344fc7684c)
![Image](https://github.com/user-attachments/assets/418ed699-460a-40c3-8778-aa9e000dc5b0)
![Image](https://github.com/user-attachments/assets/bed57d1a-ebdc-455c-b81a-a909a03df766)
![Image](https://github.com/user-attachments/assets/1bd5376e-8e5a-4603-aa77-d7f077dae279)

## Como rodar o projeto

1. Clone este repositório:
   ```bash
    git clone https://github.com/leandroalves-dev/login.git

2. Instale as dependências:
   ```bash
   npm install

3. Rode o projeto
    ```bash
    npm run dev
