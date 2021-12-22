import React, { useRef, useContext /*, useState*/ } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import BoardContext from '../Board/context';
import { Container,Label } from "../Card/style";

export default function Card({ data, index,listIndex}){
  //ORDENAÇÃO
  /*const [order,setOrder] = useState(1);
  const [titleOrder,setTitleOrder] = useState('title');

  const handleOrder = titleName =>{
      setOrder(-order)
      setTitleOrder(titleName)
      console.log(order,titleName)
  };
  
  list = list.sort((a,b)=>{
      return a[titleOrder] < b[titleOrder] ? -order : order;
  });
*/
  //ORDENAÇÃO

  //DRAG AND DROP
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
//DRAG AND DROP

    return (
        <Container ref={ref} isDragging={isDragging}>
            <header>
             {data.labels.map(label =><Label key={label} color="label"/>)}
            </header>
            <p >{data.content}</p>
        </Container>
    );
}