import React, { createContext, useState, useContext } from 'react';
import userService from "../services/userService";

interface IAuthContext {
    logged: boolean;
    signIn(email: string, password: string): void;
    signOut(): void;
}

//UTILIZAR OBJETO COMO TIPO DO createConext?
const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {

    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('luksai.support.logged');

        return !!isLogged;
    });

    const signIn = async (email: string, password: string) => {
        //if(email === 'henriquedeof@gmail.com' && password === 'Abcd@1234'){
        // O codigo estava como abaixo
        // localStorage.setItem('luksai.support.logged', 'true');
        // setLogged(true);

        // }else{
        //     alert('Senha ou usuário inválidos!');
        // }

            await userService.authenticate({email, password})
                .then(response => {
                    //localStorage.addItem('luksai.support.logged', response.data.data); //Create a global config object and use its info as the key
                    console.log('FUNCIONOU =========> ' + response.data);
                    localStorage.setItem('luksai.support.logged', 'true'); //ESSA CHAVE DEVE SER UMA CONSTANTE
                    setLogged(true);

                })
                .catch(error => {
                    //console.log(error);
                    //localStorageService.removeItem('luksai.staging.storage'); //Do I need this line?

                    //VERIFICAR SE PRECISO REMOVER ITEM OU FAZER UM CLEAR()
                    console.log('NAOOOO FUNCIONOU =========> ' + error)
                    localStorage.removeItem('luksai.support.logged');
                    setLogged(false);
                })
    }

    const signOut = () => {
        localStorage.removeItem('luksai.support.logged');
        setLogged(false);
    }

    return (
        <AuthContext.Provider value={{logged, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}

//Transformar numa arrow function
function useAuth(): IAuthContext {
    const context = useContext(AuthContext);
    return context;
}

// function useAuth() {
//     return useContext(AuthContext);
// }

export { AuthProvider, useAuth };