import React from 'react'

const InputText = ({textValue}) => {

    const handleChange =(e) =>{
        console.log(e.target.value)
        textValue(e.target.value)
      }

  return (
    <input  onChange={(e) => handleChange(e)} type="text"></input>
  )
}

export default InputText