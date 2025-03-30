import { useState } from "react";

class Auth{
    privateSign: string;
    userName: string;

    constructor(){
        this.privateSign = '';
        this.userName = '';
    }

    isAuthentificated = ():boolean => {
        return this.privateSign != undefined && this.privateSign != ''
    }
}

const useAuth = (): Auth => {
    const [auth, setAuth] = useState(new Auth);
    //TODO
    return auth;
}

export default useAuth;