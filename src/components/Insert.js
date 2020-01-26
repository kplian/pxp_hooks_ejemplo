import React, {useContext, useState} from 'react';
import {UserContext} from "./UserContext";
import {Redirect} from "react-router-dom"

const Insert = () => {
    const {userContext} = useContext(UserContext)

    const [marca, setMarca] = useState('');

    const handleMarca = e => {
        setMarca(e.target.value);
    }
    const handleGuardarMarca = e => {
        /*
        x: ../../sis_mercado/control/Marca/insertarMarca
        p: {"id_marca":"","nombre":"patito"}
        */


        var params = new URLSearchParams();
        params.append('nombre', marca); // some param for example


        userContext.client.request('mercado/Marca/insertarMarca', params, function (resp) {
            console.log('resp', resp)
            setMarca('');
        });

    }
    return (
        <div>
            insert
            {userContext === null && <Redirect to="/Login" />}

            <input
                type="text"
                name="marca"
                value={marca}
                onChange={handleMarca}

            />

            <button onClick={handleGuardarMarca}>Guardar Marca</button>

            {JSON.stringify(userContext)}

        </div>
    );
};

export default Insert;