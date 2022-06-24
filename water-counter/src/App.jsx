import React from 'react';
import './App.css';
import Water from './components/Water';
import { useState } from 'react';

function App() {
  const [theLevel, setLevel] = useState(5);

  const increase = () => {
    setLevel(theLevel + 10);
    console.log(theLevel);
  };

  const reset = () => {
    setLevel(0);
  };

  return (
    <div>
      <Water increase={increase} reset={reset} theLevel={theLevel} />
    </div>
  );
}

export default App;
