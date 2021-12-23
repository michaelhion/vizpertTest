import React, { useState } from "react";
import { Container } from "../List/style";
import { MdAdd } from "react-icons/md";
import Card from "../Card/index";
export default function List({ data, index: listIndex}) {
    const [state,setState] = useState([]);
    const handleOrder = e => {
        setState (data.cards.sort(function (a, b) {
            return a.content < b.content ? -1 : a.content > b.content ? 1 : 0;
        }))
        data = state;
        console.log(data);
        return(
            data
        )
    };

    //função do youtube 
    //ORDENAÇÃO
    //MODAL

    //MODAL

    return (
        <Container>
            <header>
                <h2>{data.title}</h2>

            </header>
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
