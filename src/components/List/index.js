import React, { useState } from "react";
import { Container } from "../List/style";
import { MdAdd } from "react-icons/md";
import Card from "../Card/index";
export default function List({ data, index: listIndex}) {
    //ORDENAÇÃO
    
    const [state,setState] = useState(data);
    const handleOrder = e => {
        let select = document.getElementById('sortList');
	    let option = select.options[select.selectedIndex];
        setState (data.cards.sort(function (a, b) {
            return a[option.value] < b[option.value] ? -1 : a[option.value] > b[option.value] ? 1 : 0;
        }))
        //state(data)
        console.log(setState)
    };

     
    //ORDENAÇÃO
    //MODAL

    //MODAL

    return (
        <Container>
            <header>
                <h2>{data.title}</h2>

            </header>
            <select id="sortList">
                <option defaultValue="default" >Escolha uma opção de Ordenação</option>
                <option  value="bookName">Nome do Livro</option>
                <option value="labels">Cor</option>
                <option value="publicationDate">Ano Publicação</option>
                <option value="author">Nome do Autor</option>
            </select>
            <ul>
                {data.creatable && (
                    <button type="button">
                        <MdAdd size={24} color="#3471eb" />
                    </button>
                )}
                <button className="order" onClick={() => handleOrder(data.cards)}>Organize</button>
                <li id="lista">{data.cards.map((card, index) => <Card key={card.id} index={index} listIndex={listIndex} data={card} />)}</li>
            </ul>
        </Container>
    );
}
