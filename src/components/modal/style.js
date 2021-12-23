import styled from "styled-components";

export const Container = styled.div`
    width:500px;
    margin:10px;
    buttom{
        margin-bottom:10px;
    }
    @media screen and (max-width: 720px) {
        flex-direction:column;
        margin-bottom:50px;
        margin-right:50px;
        padding-bottom:50px;
        background-color:#b3c0e3;
    }
    
`
export const Input = styled.input`
    display-flex:column;
    width:100%;
    margin:10px;
`