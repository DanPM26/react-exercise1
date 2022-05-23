import logo from './logo.svg';
import axios from 'axios';
import React, { useState,useEffect } from 'react';
import './App.css';
import Cardquote from './components/Cardquote/Cardquote';

function App() {
   
  const [frase,setfrase] = useState({}) 

  const getQuotes = async() =>{
    const url = 'https://breakingbadapi.com/api/quote/random'
    const resp = await axios.get(url)
    setfrase(resp.data[0])
    console.log(resp.data[0])
  }
  useEffect(()=>{
    getQuotes()
  }, [])
  

  return (
    <div className="App">
      <Cardquote info={frase}></Cardquote>
      <button onClick={() => getQuotes()}>Click for more!</button>
    </div>
  );
}

export default App;
