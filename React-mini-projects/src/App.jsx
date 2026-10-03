import './App.css'
import Accordian from './Components/Accordian/Accordian'
import { ColorGenerator } from './Components/Accordian/Color-generator/Color-generaotor'

function App() {
  return(
  <>
  <Accordian/>
  {/* Random Color Generator */}
  <ColorGenerator/>
  </>
  )
}

export default App
