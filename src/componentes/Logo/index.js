import {Conteudo} from "./styles"
import React from 'react';
import image from './logo.png'

function Logo() {
    return (
        <Conteudo>
            <img src={image} alt="logo" />
        </Conteudo>
    );
}

export default Logo;