import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

const red = "red";
const yellow = "yellow";
const green = "green";

function App() {
  
  const [color, setColor] = useState(red);
  
  useEffect(() => {
    setRed();
  }, []);

  const setRed = () => {
    setColor(red);
    setTimeout(() => setGreen(), 10000)
  }
  const setGreen = () => {
    setColor(green);
    setTimeout(() => setYellow(), 10000);
  }
  const setYellow = () => {
    setColor(yellow);
    setTimeout(() => setRed(), 2000);
  }


  return (
    <div className="App">
        <div className="container">
          <div className={color === red ? "red-active" : "red"}></div>
          <div className={color === yellow ? "yellow-active" : "yellow"}></div>
          <div className={color === green ? "green-active" : "green"}></div>
        </div>
    </div>
  );

}

export default App;
