import React, { useState }  from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Login from './componentes/Login';
import Cadastro from './componentes/Cadastro';
import Hoje from './componentes/Hoje'
import Context from "./componentes/Context";

export default function App(){
    const [token, setToken]= useState("");
    const [progresso, setProgresso]= useState("");

    return(
        <Context.Provider value={{token,setToken, progresso, setProgresso}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />    
                    <Route path="/cadastro" element={<Cadastro />} />   
                    <Route path="/hoje" element={<Hoje />} />                
                </Routes>
            </BrowserRouter>
        </Context.Provider>
    )
}