import {useContext, useEffect, useState} from "react";
import {UserContext} from "./UserContext";

const useFetch = (url) => {
    const { userContext } = useContext(UserContext);

    const [data, setData] = useState(undefined);
    const [loading, setLoading] = useState(true);

    // empty array as second argument equivalent to componentDidMount
    useEffect(() => {
        async function fetchData() {
            let params = new URLSearchParams();

            params.append('start', '0');
            params.append('limit', '50');
            params.append('sort', 'id_marca');
            params.append('dir', 'ASC');

            const response = await fetch(userContext.client._urlRequest(url), {
                method: 'POST',
                body: params,
                headers: Object.assign({
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                }, userContext.client._headers),
            });
            const json = await response.json();
            setData(json);
            setLoading(false)

        }
        userContext && fetchData();
    }, [url, userContext]);

    return {data, loading};
};


export default useFetch;

