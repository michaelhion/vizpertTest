import React, { useRef, useContext /*, useState*/ } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import BoardContext from '../Board/context';
import { Container,Label } from "../Card/style";

export default function Card({ data, index,listIndex}){

  //DRAG AND DROP start
  const { move } = useContext(BoardContext);
  const ref = useRef();
  const [{ isDragging }, dragRef] = useDrag({
    type: 'CARD',
    item: {id:data.id,index,listIndex }, 
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
     const draggedListIndex = item.listIndex;
     const targetListIndex = listIndex;
     const draggedIndex = item.index;
     const targetIndex = index;

     if(draggedIndex === targetIndex && draggedListIndex === targetListIndex){
       return;
     }
     const targetSize = ref.current.getBoundingClientRect()
     const targetCenter = (targetSize.bottom - targetSize.top)/2;
     const draggedOffset = monitor.getClientOffset();
     const draggedTop = draggedOffset.y - targetSize.top;
     
     if(draggedIndex < targetIndex && draggedTop < targetCenter){
       return;
     }

     if(draggedIndex > targetIndex && draggedTop > targetCenter){
      return;
    }
    move(draggedListIndex,draggedIndex,targetIndex, targetListIndex)
    item.index = targetIndex;
    item.listIndex = targetListIndex;
    }
  });

  dragRef(dropRef(ref));
//DRAG AND DROP end

    return (
        <Container ref={ref} isDragging={isDragging}>
            <header>
             {data.labels.map(label =><Label key={label} color="label"/>)}
            </header>
            <p >Livro: {data.bookName}</p>
            <p>Ano Publicação: {data.publicationDate}</p>
            <p>Autor: {data.author}</p>
            { data.image && <img src={data.image} alt=""/> }
        </Container>
    );
}