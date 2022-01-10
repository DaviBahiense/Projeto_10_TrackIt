import React, { useState, useContext }  from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

import {ThreeDots} from "react-loader-spinner"

import  Context from "../Context"
import Conteudo from './style'
import Button from '../Button'
import Input from '../Input'
import Logo from '../Logo'

function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [loading, setLoading]= useState(false);
    const {setToken} = useContext(Context);
    const navegar = useNavigate()

    function tratandoLogin(e){
        e.preventDefault()

        const promessa = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login',{
            email: email,
            password: senha
        })
        promessa.then(resposta => {
            setToken(resposta.data.token);
            
        
           navegar('/hoje')
        })
      setLoading(true)
        promessa.catch(()=>{
            alert("Verifique novamente email e senha")
            setLoading(false);
        })
    }

    return (
        <div>
            <Conteudo>
                <Logo />
                <form onSubmit={tratandoLogin}>
                    <Input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)} value = {email} loading={loading} disabled={loading}/>
                    <Input type="password" placeholder='senha' onChange={(e)=>setSenha(e.target.value)} value = {senha} loading={loading} disabled={loading}/>
                    <Button type="submit" loading={loading}> {
                        loading ? <ThreeDots color="#ffffff" height={50} width={60} /> : "Entrar"
                        }
                    </Button>
                    <Link to="/cadastro">Não possui conta? Cadastre-se</Link>
                </form>
            </Conteudo>
        </div>
    );
}

export default Login;