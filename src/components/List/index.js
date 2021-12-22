import React from "react";
import { Container } from "../List/style";
import {MdAdd} from"react-icons/md";
import Card from"../Card/index"
export default function List({ data,index: listIndex}){
   
    return(
        <Container>
            <header>
                <h2>{data.title}</h2>
                {data.creatable &&(
                <button type="button">
                    <MdAdd size={24} color="#3471eb"/>
                </button>
                )}
            </header>
            <ul >
                <button>teste</button>
                { data.cards.map((card,index)=><Card key={card.id} index={index} listIndex={listIndex} data={card}/>)}
            </ul>
        </Container>
    );
}
