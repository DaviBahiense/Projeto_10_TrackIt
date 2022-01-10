import styled from "styled-components";

const ConteudoNovoHabito = styled.div`
    margin-top: 25px;
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;
`

const NovaInfo = styled.div`
    width: 90%;
    height: auto;
    padding: 13px;
    background-color: #ffffff;
    
    input{
        width: 95%;
        height: 45px;
        padding-left: 10px;
        
        color:#DBDBDB;
        font-size: 20px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
    }
    p{
        font-size: 20px;
        margin: 0px 10px;
    }
`

const Botao = styled.div`
    display: flex;
    margin-top: 5px;
    justify-content: ${(props)=> props.position || "center"};
    align-items: center;
    
`

const Semana = styled.div`
    margin-left: 5px;
    display: flex;
`

const Dia = styled.div`
    width: 30px;
    height: 30px;

    display:flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    margin-top: 10px;
    
    border-radius: 5px;
    border: 1px solid #D5D5D5;
    font-size: 20px;
    color: #DBDBDB;
    
`

const Cancelar = styled.div`
    width: 84px;
    height: 35px;

    display: flex;
    justify-content: center;
    margin-right: 5px;
    align-items: center;

    color: #52B6FF;
    
`

const Salvar= styled.div`
    width: 84px;
    height: 35px;

    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;

    background-color: #52B6FF;
    border-radius: 5px;
`

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
    Dia,
    Semana,
    NovaInfo,
    ConteudoNovoHabito,
    Botao,
    Cancelar,
    Salvar,
    Conteudo,
    AddHabito
}