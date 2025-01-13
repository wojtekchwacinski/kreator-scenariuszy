import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Homepage from "./pages/HomePage";
import Header from './components/Header';
import Timeline from './components/TimeLIne';
// Pula zdarzeń
const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header/>
      <Homepage/>

    </DndProvider>
    

  );
};

export default App;
