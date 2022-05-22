import logo from './logo.svg';
import './App.css';
import FormPatiens from './FormPatients/FormPatiens';
import React, { useState } from 'react';

function App() {

  const pacientes = [
    {
      nombre: 'Maria',
      edad: 26,
      altura:160
    },
    {
      nombre: 'Julian',
      edad: 28,
      altura:180
    },
    {
      nombre: 'Alejandra',
      edad: 23,
      altura:150
    },
  ]

  const [patients, setPatients] = useState([])

  const addPatient = (data) => {
    setPatients (
      [...patients, data]
    )
  }

  return (
    <div className="App">

    <FormPatiens formValue={addPatient} />
    
      {
       patients.map((paciente, i) => {
         return (
           <div key={i}>
             <h3>{paciente.name}</h3>
             <p>{paciente.age}</p>
             <p>{paciente.height}</p>
              </div>
         )
       })
      }

      


    </div>
  );
}

export default App;
