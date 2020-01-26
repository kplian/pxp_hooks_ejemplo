import React, {useContext} from 'react';
import {Redirect} from "react-router-dom";
import {UserContext} from "./UserContext";
import useFetch from "./useFetch";
import Item from "./Item";

const Select = () => {
    const {userContext} = useContext(UserContext)

    //x: ../../sis_mercado/control/Marca/listarMarca
    const {data, loading} = useFetch("mercado/Marca/listarMarca");

    return (
        <div>
            Select
            {userContext === null && <Redirect to="/Login" />}
            {loading && "loading"}
            {
                <ul>
                    {
                        data && data.datos.map((i)=>(


                            <Item nombre={i.nombre} />
                        ))
                    }
                </ul>

            }

            {JSON.stringify(userContext)}

        </div>
    );
};

export default Select;