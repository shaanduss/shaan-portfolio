import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import WelcomeDialog from './components/WelcomeDialog'
import { HomeView } from './views/HomeView'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex-col">
        <WelcomeDialog />
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomeView />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
