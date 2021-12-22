import React from 'react';
import { DndProvider } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend'

import GlobalStyle from './styles/Global';

import Header from './components/Header/index';
import Board from './components/Board/index';

function App() {
  const opt = { enableMouseEvents: true }
  return (
      <DndProvider backend={TouchBackend} options={opt}>
        <Header />
        <Board />
        <GlobalStyle />
      </DndProvider>
  
  );
}

export default App;