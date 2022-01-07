
import React, { useState }  from 'react';
import {Conteudo} from './style';
import {Link} from 'react-router-dom'
import axios from 'axios'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import Button from '../Button';
import Input from '../Input'
import Logo from '../Logo'


function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [loading, setLoading]= useState(false);
   // const navigate = useNavigate()

    function tratandoLogin(e){
        e.preventDefault()

        const promessa = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login',{
            email: email,
            password: senha
        })
        promessa.then(resposta => {
            alert("foi")
        })
        setLoading(true)
        promessa.catch(()=>{
            alert("Verifique novamente email e senha")
            setLoading(false);
        })
        setLoading(true);

    }

    return (
        <div>
            <Conteudo>
                <Logo />
                <form onSubmit={tratandoLogin}>
                    <Input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)} value = {email} loading={loading} disabled={loading}/>
                    <Input type="password" placeholder='senha' onChange={(e)=>setSenha(e.target.value)} value = {senha} loading={loading} disabled={loading}/>
                    <Button type="submit" loading={loading}> {
                        loading ? <Loader type="ThreeDots" color="#ffffff" height={50} width={60} /> : "Entrar"
                        }
                    </Button>
                    <Link to="/cadastro">Não possui conta? Cadastre-se</Link>
                </form>
            </Conteudo>
        </div>
    );
}

export default Login;
 