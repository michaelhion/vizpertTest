import React from 'react';
import {DndProvider} from'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend'

import GlobalStyle from './styles/Global';

import Header from './components/Header/index';
import Board from'./components/Board/index';

function App() {
  return(
    <DndProvider backend={HTML5Backend} backend={TouchBackend}>
      <Header/>
      <Board/>
      <GlobalStyle/>
    </DndProvider>
  );
}

export default App;