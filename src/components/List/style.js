import styled from "styled-components";

export const Container = styled.div`
    padding:0 15px;
    height:100%;
    flex:0 0 320px;
    background-color:#b3c0e3;
    margin-left:50px;
    padding-bottom:25px;
    & + div{
        border-left: 1px solid rgba(0,0,0,0.5)
    }

    header{
        display:flex;
        justify-content: space-between;
        align-items: center;
        height:42px;

        h2{
            text-align: center;
            font-weight:500;
            font-size:16px;
            padding: 0 10px;
        }
        
        
    }
    button{
        width:25px;
        height:25px;
        border-radius:18px;
        border:0;
        cursor:pointer;
        margin-bottom:5px;
    }

    .order{
        width:100%;
        border-radius:5px;
    }

    @media screen and (max-width: 720px) {
        flex-direction:column;
        margin-bottom:50px;
        margin-right:50px;
        padding-bottom:50px;
        background-color:#b3c0e3;
    }
    
`
