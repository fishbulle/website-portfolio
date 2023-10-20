import './App.css'
import "./styles/Global.css"
import Intro from './components/Intro'
import { Cat } from './components/Cat'
import SidebarNav from './components/SidebarNav'

function App() {

  return (
    <>
      <div className="App">
        <div id="content">
          <Cat />
          <Intro />
        </div>
        <SidebarNav />
      </div>
    </>
  )
}

export default App
