import React from 'react'

const ColorInput = ({colorValue}) => {
  
    return (
    <input type="color" onChange={(e) => colorValue(e.target.value)} />
  )
}

export default ColorInput