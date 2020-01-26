import React, {useContext, useState} from 'react';
import {clientRestPxp} from "clientpxpjs/js/clientRestPxp";
import {md5} from "clientpxpjs/js/md5";
import {UserContext} from "./UserContext";

const Login = () => {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const {userContext, setUserContext} = useContext(UserContext)


    const handleUser = e => {
        setUser(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const handleEnviar = e => {
        e.preventDefault()

        console.log(` user ${user} password ${password}`)

        let client = new clientRestPxp('admin.disydes.com', 'DOMINIO');
        client.setCredentialsPxp(user, md5(password));
        client.genHeaders();

        client.verifyUser(function (resp) {
            console.log('verifyUser', resp)

            if(resp.success) {

                setUserContext({...resp, client:client, user:user, password:md5(password)})
            }
        });

    }

    return (
        <div>
            Login
            <input
            type="text"
            placeholder="usuario"
            value={user}
            onChange={handleUser}

            />

            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={handlePassword}

            />

            <button onClick={handleEnviar}>Enviar</button>

        </div>
    );
};

export default Login;