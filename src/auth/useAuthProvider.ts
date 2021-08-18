import {useState} from 'react';
import fakeAuth from "./fakeAuth";

export interface IUseAuthProvider {
    signIn: (cb: () => void) => void;
    signOut: (cb: () => void) => void;
    user: null | string;
}

//function
const useAuthProvider = (): IUseAuthProvider => {
    const [user, setUser] = useState<null | string>(null);

    const signIn = (cb: () => void) =>{
        fakeAuth.signIn(() => {
            // setUser('Henrique Fernandes');
            setUser(JSON.stringify(localStorage.setItem('teste', 'henrique')));
        });
    };

    const signOut = (cb: () => void) =>{
        fakeAuth.signOut(() => {
            // setUser(null);
            setUser(JSON.stringify(localStorage.removeItem('teste')));
        });
    };

    return{
        user,
        signIn,
        signOut
    };
};

export default useAuthProvider;