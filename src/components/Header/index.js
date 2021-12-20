import React from "react";
import {ReactComponent as Logo} from "../../Assets/logo.svg"
import { Container } from "./styles";

export default function Header(){
    return(
        <Container>
            <Logo/>
        </Container>
    )
}