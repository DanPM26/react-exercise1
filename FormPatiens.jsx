import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const FormPatiens = ({ formValue }) => {

    const [formState,setForm] = useState({})
    

    const handleClick = () =>{
        formValue(formState)

    }

    const setValues = (ev) => {
        console.log(ev)
        setForm({
            ...formState,
            [ev.target.name]: ev.target.value
            
        })
    }

  return (
      <>
       {console.log('->>>', formState)}
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Nombre</Form.Label>
    <Form.Control type="text" name="name" onBlur={(ev) => setValues(ev)} placeholder="Ingresa tu nombre" />
    <Form.Label>Edad</Form.Label>
    <Form.Control type="number" name="age" onBlur={(ev) => setValues(ev)} placeholder="Ingresa tu edad" />
    <Form.Label>Altura</Form.Label>
    <Form.Control type="number" name="height" onBlur={(ev) => setValues(ev)}  placeholder="Ingresa tu altura" />
  </Form.Group>
  <Button  onClick={() => handleClick()} variant="primary" type="button">
    Submit
  </Button>
</Form>
</>
  )
}

export default FormPatiens