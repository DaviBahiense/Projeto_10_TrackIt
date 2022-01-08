import styled from 'styled-components';

const Conteudo = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
`
const Opcoes = styled.div`
    width: 100vw;
    height: 70px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    position: fixed;
    z-index:1;
    bottom: 0;
    left: 0;
    background: #ffffff;

    p{
        font-size: 18px;
        color: #52B6FF;
        padding: 0px 30px;
    }
`

const Barra =styled.div`
    width: 91px;
    height: 91px;
    display: flex;

    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 6px;
    
    position: fixed;
    z-index:2;
    bottom: 10px;

    background-color:#52B6FF;
    border-radius: 100%;
`
export{
    Conteudo,
    Opcoes,
    Barra
}

