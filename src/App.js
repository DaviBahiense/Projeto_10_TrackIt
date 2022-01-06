import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './componentes/Login';
import Cadastro from './componentes/Cadastro';

export default function App(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />    
               <Route path="/cadastro" element={<Cadastro />} />               
            </Routes>
        </BrowserRouter>
    )
}