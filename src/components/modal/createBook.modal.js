import React from "react";
import { Container, Input } from "../modal/style";

const Modal = props => {
    const { className, modalRef } = props;
    return (
        <div ref={modalRef} className={`${className} modal`}>
            <Container>
                <h2>Adicionar Livro à Pratileira</h2>
                <Input placeholder="Nome do Livro" />
                <Input placeholder="Ano de Publicação" />
                <Input placeholder="Autor" />
                <Input placeholder="Url imagem do livro (Opcional)" />
                <button>Adicionar</button>
            </Container>
        </div>
    );
}

export default Modal;