import React, { useState } from 'react';
import './App.css';
import Clock from './components/Clock'

function App() {
const [showClock, setShowClock] = useState(true);
const handleShow = () =>{
  setShowClock(!showClock);
}
  return (
    <div className="App">
      {showClock ? <Clock /> : null}
      
     <button className='btn' onClick={handleShow}>click me</button>
    </div>
  );
}

export default App;
