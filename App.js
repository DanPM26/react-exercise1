import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react'
import InputText from './components/inputext/InputText';
import ColorInput from './components/ColorInput/ColorInput';
import SizeInput from './components/SizeInput/SizeInput';

function App() {

  const [text,setText] = useState('hola')
  const [color,setColor] = useState('#00000') 
  const [size,setSize] = useState('15')

  const handleChange =(e) =>{
    console.log(e.target.value)
    setText(e.target.value)
  }

  return (
    <div className="App">
     <h1 style={{
      color : color, 
      fontSize: `${size}px`
     }}>
       {text}
     </h1>
     <ColorInput colorValue={setColor} />
     <InputText textValue={setText} />
     <SizeInput sizeValue={setSize} />
    </div>
  );
}

export default App;
