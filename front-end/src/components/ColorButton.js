import { useState } from 'react'
import { useSnapshot } from 'valtio'

const ColorButton = ({ state }) => {
  const snap = useSnapshot(state)
  const colors = ['#ffffff', '#009b48', '#b71234', '#0046ad', '#ff5800', '#ffd500']
  const [selectedColor, setSelectedColor] = useState('#ffffff')

  const changeColor = (color) => {
    state.color = color
    setSelectedColor(color)
  }

  return (
    <div className={`color-button-container ${snap.current ? 'show' : ''}`}>
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => changeColor(color)}
          className={selectedColor === color ? 'selected' : ''}
          style={{
            background: color
          }}
        />
      ))}
    </div>
  )
}

export default ColorButton
