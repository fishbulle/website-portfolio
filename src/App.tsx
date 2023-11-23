import './App.css'
import "./styles/Global.css"
import Intro from './components/Intro'
import { Cat } from './components/Cat'
import SidebarNav from './components/SidebarNav'
import About from './components/About'
import Experience from './components/Experience'
import Creations from './components/Creations'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className="App">
        <div id="content">
          <Cat />
          <Intro />
          <About />
          <Experience />
          <Creations />
          <Footer />
        </div>
        <SidebarNav />
      </div>
    </>
  )
}

export default App
