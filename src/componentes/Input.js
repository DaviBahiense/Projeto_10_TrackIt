import styled from 'styled-components';

const Input = styled.input`
    width: 303px;
    height: 45px;
    padding-left: 10px;

    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    background-color: ${(props)=> props.loading? "#F2F2F2": "#ffffff"};

    font-family: Lexend Deca;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color: #DBDBDB;
`
export default Input