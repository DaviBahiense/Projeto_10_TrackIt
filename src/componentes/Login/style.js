import styled from 'styled-components';

const Conteudo = styled.div `
    min-height: 68vh;

    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    gap:32px;

    form {
        display: flex;
        flex-direction:column;
        justify-content:center;
        align-items: center;
        gap:6px;
    }
    a {
        margin-top: 25px; 
    }
    `
    
export{
    Conteudo
}