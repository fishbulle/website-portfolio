import './App.css'
import "./styles/Global.css"
import Intro from './components/Intro'
import { Cat } from './components/Cat'

function App() {

  return (
    <>
      <div className="App">
        <div id="content">
          <Cat />
          <Intro />
        </div>
      </div>
    </>
  )
}

export default App
