import './App.css'
import { Navbar } from './components/Navbar'
import WelcomeDialog from './components/WelcomeDialog'

function App() {
  return (
    <div>
      <WelcomeDialog />
      <Navbar/>
      <div className="mt-10 h-[150vh]">
        Bodyy
      </div>
    </div>
  )
}

export default App
