import React, {useMemo, useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from "react-router-dom"
import Insert from "./components/Insert";
import Select from "./components/Select";
import {UserContext} from "./components/UserContext";
import Login from "./components/Login";

function App() {

    const [userContext, setUserContext] = useState(null);

    const value = useMemo(()=> ({userContext, setUserContext}), [userContext, setUserContext])
    return (
        <div className="App">

            <BrowserRouter>
                <nav>
                    <ul>
                        <li><Link to="/Select">Select</Link></li>
                        <li><Link to="/Insert">Insert</Link></li>
                    </ul>
                </nav>
                <UserContext.Provider value={value}>
                    <Route exact path="/" component={Insert}/>
                    <Route path="/Insert" component={Insert}/>
                    <Route  path="/Select" component={Select}/>
                    <Route  path="/Login" component={Login}/>
                </UserContext.Provider>

            </BrowserRouter>


        </div>
    );
}

export default App;
