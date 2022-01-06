
import React, { useState }  from 'react';
import {Conteudo} from './style';
import {Link} from 'react-router-dom'
import axios from 'axios'

import Button from '../Button';
import Input from '../Input'
import Logo from '../Logo'


function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function tratandoLogin(e){
        e.preventDefault()

        const promessa = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login',{
            email: email,
            password: senha
        })
        promessa.then(resposta => console.log(resposta))
        promessa.catch(erro => console.log(erro.resposta))
    }

    return (
        <div>
            <Conteudo>
                <Logo />
                <form onSubmit={tratandoLogin}>
                    <Input type="email" placeholder='  email' onChange={(e)=>setEmail(e.target.value)} value = {email} />
                    <Input type="password" placeholder='  senha' onChange={(e)=>setSenha(e.target.value)} value = {senha}/>
                    <Button type="submit">Entrar</Button>
                    <Link to="/cadastro">Não possui conta? Cadastre-se</Link>
                </form>
            </Conteudo>
        </div>
    );
}

export default Login;
 