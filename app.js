import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import Component from './components/Component/Component';
import Hello from './components/Hello/Hello';
import InputText from './components/InputText/InputText';
import ColorInput from './components/ColorInput/ColorInput';
import InputSize from './components/InputSize/InputSize';
import FormPatients from './components/FormPatients/FormPatients';
import CardPatient from './components/CardPatient/CardPatient';




function App() {


  const pacientes = [
    {
      nombre: 'maria',
      edad: 26,
      altura: 160
    },
    {
      nombre: 'Fernanda',
      edad: 30,
      altura: 180
    },
    {
      nombre: 'Alejandra',
      edad: 26,
      altura: 150
    },
    {
      nombre: 'Antonio',
      edad: 29,
      altura: 190
    },
  ]

  const [patients, setPatients] = useState([])


  const addPatient = (data) => {
    setPatients(
      [...patients, data]
    )
  }

  return (
    <div className="App">
      

      <FormPatients formValue={addPatient} />

      {
        patients.map((paciente, i) => {
          return (
          <div key={i}> 
          <h3>{paciente.name}</h3>
          <p>{paciente.age}</p>
          <p>{paciente.heigth}</p>
          </div>
          
          )
        })
      }

    </div>
  );
}

export default App;
