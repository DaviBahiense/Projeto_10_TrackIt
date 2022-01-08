import styled from 'styled-components';

const Conteudo = styled.div`
    width: 100vw;
    height: 170vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F2F2F2;
    
    p{
        width: 87%;
        margin-top: 40px;
        display: inline-block;

        color: #666666;
        font-size: 18px;
        line-height: 22px;
    }
`
const AddHabito = styled.div`
    width: 90%;
    margin-top: 100px;

    display: flex;
    justify-content: space-between;

    font-size: 23px;
    color:#126BA5;

    button{
        width: 40px;
        height: 35px;

        background-color: #52B6FF;
        font-size: 27px;
        border:none;
        border-radius: 4.64px;
        color: #ffffff;
        
        line-height: 34px;
        text-align: center;
    }
`
export{
    Conteudo,
    AddHabito
} 