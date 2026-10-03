import React, { useState } from 'react'

export const ColorGenerator = () => {
  const [typeOfColor, setTypeOfColor] = useState('HEX')
  const [color, setColor] = useState('#000000')

  // Generate HEX color
  function handleCreateHexColor() {
    const hex = [
      1, 2, 3, 4, 5, 6, 7, 8, 9,
      'A', 'B', 'C', 'D', 'E', 'F'
    ]

    let hexColor = '#'

    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)]
    }

    setColor(hexColor)
  }

  // Generate RGB color
  function handleCreateRGBColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    const rgbColor = `rgb(${r}, ${g}, ${b})`

    setColor(rgbColor)
  }

  // HEX button
  function handleHexClick() {
    setTypeOfColor('HEX')
    handleCreateHexColor()
  }

  // RGB button
  function handleRGBClick() {
    setTypeOfColor('RGB')
    handleCreateRGBColor()
  }

  // Random Color button
  function handleRandomColor() {
    if (typeOfColor === 'HEX') {
      handleCreateHexColor()
    } else {
      handleCreateRGBColor()
    }
  }

  return (
    <div
      className="Container"
      style={{
        background: color,
        width: '100vw',
        height: '100vh'
      }}
    >

      <button onClick={handleHexClick}>
        Generate HEX Color
      </button>

      <button onClick={handleRGBClick}>
        Generate RGB Color
      </button>

      <button onClick={handleRandomColor}>
        Generate Random Color
      </button>

      <div
        style={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontSize: '20px',
          flexDirection: 'column',
          gap: '10px'
        }}
      >
        <h3>
          Type of Color: {typeOfColor}
        </h3>

        <p>
          Current Color: {color}
        </p>
      </div>

    </div>
  )
}