
import React, { useState }  from 'react';
import {Conteudo} from './style';
import {Link} from 'react-router-dom'
import Button from '../Button';
import Input from '../Input'
import Logo from '../Logo'


function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    return (
        <div>
            <Conteudo>
                <Logo />
                <form>
                    <Input type="email" placeholder='  email' onChange={(e)=>setEmail(e.target.value)} value = {email} />
                    <Input type="password" placeholder='  senha' onChange={(e)=>setSenha(e.target.value)} value = {senha}/>
                    <Button onClick={() =>alert( `${email} ${senha}`)}>Entrar</Button>
                    <Link to="/cadastro">Não possui conta? Cadastre-se</Link>
                </form>
            </Conteudo>
        </div>
    );
}

export default Login;
 