import { proxy, useSnapshot } from 'valtio'
import Camera from './components/Camera'
import ColorButton from './components/ColorButton'
import SolveButton from './components/SolveButton'

const state = proxy({
  current: null,
  color: '#ffffff',
  items: {
    top_sticker_0: '#ffffff',
    top_sticker_1: '#ffffff',
    top_sticker_2: '#ffffff',
    top_sticker_3: '#ffffff',
    front_sticker_0: '#ffffff',
    front_sticker_1: '#ffffff',
    front_sticker_2: '#ffffff',
    front_sticker_3: '#ffffff',
    right_sticker_0: '#ffffff',
    right_sticker_1: '#ffffff',
    right_sticker_2: '#ffffff',
    right_sticker_3: '#ffffff',
    back_sticker_0: '#ffffff',
    back_sticker_1: '#ffffff',
    back_sticker_2: '#ffffff',
    back_sticker_3: '#ffffff',
    left_sticker_0: '#ffffff',
    left_sticker_1: '#ffffff',
    left_sticker_2: '#ffffff',
    left_sticker_3: '#ffffff',
    bottom_sticker_0: '#ffffff',
    bottom_sticker_1: '#ffffff',
    bottom_sticker_2: '#ffffff',
    bottom_sticker_3: '#ffffff'
  }
})

function App() {
  const snap = useSnapshot(state)

  return (
    <div className="canvas-container">
      <Camera state={state} />
      <ColorButton state={state} />
      <SolveButton snap={snap} />
    </div>
  )
}

export default App
