
import React, { useState }  from 'react';
import {Conteudo} from './style';
import {Link} from 'react-router-dom'
import axios from 'axios'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import Button from '../Button';
import Input from '../Input'
import Logo from '../Logo'


function Cadastro() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')
    const [img, setImg] = useState('')
    const [loading, setLoading]= useState(false);


    function tratandoCadastro(e){
        e.preventDefault()

        const promessa = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up',{
            email: email,
            name: nome,
            image: img,
            password: senha
        })
        promessa.then(resposta => console.log(resposta))
        setLoading(true)
        promessa.catch(erro => {
            alert("Verifique novamente os dados do cadastro")
            setLoading(false);
        })
    }

    return (
        <div>
            <Conteudo>
                <Logo />
                <form onSubmit={tratandoCadastro}>
                    <Input type="email" placeholder=' email' onChange={(e)=>setEmail(e.target.value)} value = {email} loading={loading}/>
                    <Input type="password" placeholder=' senha' onChange={(e)=>setSenha(e.target.value)} value = {senha} loading={loading}/>
                    <Input type="name" placeholder=' nome' onChange={(e)=>setNome(e.target.value)} value = {nome} loading={loading} />
                    <Input type="text" placeholder=' foto' onChange={(e)=>setImg(e.target.value)} value = {img} loading={loading} />
                    <Button type="submit" loading={loading}> {
                        loading ? <Loader type="ThreeDots" color="#ffffff" height={50} width={60} /> : "Cadastrar"
                        }</Button>
                    <Link to="/">Já tem uma conta? Faça login!</Link>
                </form>
            </Conteudo>
        </div>
    );
}

export default Cadastro;