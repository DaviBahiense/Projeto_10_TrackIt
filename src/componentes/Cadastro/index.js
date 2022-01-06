
import React, { useState }  from 'react';
import {Conteudo} from './style';
import {Link} from 'react-router-dom'
import axios from 'axios'

import Button from '../Button';
import Input from '../Input'
import Logo from '../Logo'


function Cadastro() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')
    const [img, setImg] = useState('')

    function tratandoCadastro(e){
        e.preventDefault()

        const promessa = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up',{
            email: email,
            name: nome,
            image: img,
            password: senha
        })
        promessa.then(resposta => console.log(resposta))
        promessa.catch(erro => console.log(erro.resposta))
    }

    return (
        <div>
            <Conteudo>
                <Logo />
                <form onSubmit={tratandoCadastro}>
                    <Input type="email" placeholder=' email' onChange={(e)=>setEmail(e.target.value)} value = {email} />
                    <Input type="password" placeholder=' senha' onChange={(e)=>setSenha(e.target.value)} value = {senha}/>
                    <Input type="name" placeholder=' nome' onChange={(e)=>setNome(e.target.value)} value = {nome} />
                    <Input type="text" placeholder=' foto' onChange={(e)=>setImg(e.target.value)} value = {img} />
                    <Button type="submit">Cadastrar</Button>
                    <Link to="/">Já tem uma conta? Faça login!</Link>
                </form>
            </Conteudo>
        </div>
    );
}

export default Cadastro;