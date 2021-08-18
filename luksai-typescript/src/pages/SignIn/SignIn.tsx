import React, {useState} from 'react';
import {useAuth} from "../../contexts/auth";


const SignIn: React.FC = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { signIn } = useAuth();


    function handleSubmit(e: any){
        e.preventDefault();

        if(email.trim() !== '' && password.trim() !== ''){
            signIn(email, password)
        }
    }

    return(
        <div>
            SIGNIN - PAGE - PRECISO REDIRECIONAR PRA PAGINA INICIAL CASO ACESSE ALGUM LINK INEXISTENTE E EU ESTOU LOGADO OU NAO
            <h3>FALTA CRIAR VALIDACAO DE LOGIN E SENHA DE MANEIRA MAIS CONSISTENTE</h3>

            <div className="container-center">
                    <form onSubmit={handleSubmit}>
                        <h1>Entrar</h1>
                        <input type="text" placeholder="email@email.com" value={email} onChange={ (e) => setEmail(e.target.value) }/>
                        <input type="password" placeholder="*******" value={password} onChange={(e) => setPassword(e.target.value) } />
                        <button type="submit">Acess</button>
                    </form>
            </div>

        </div>
    );

}

export default SignIn;