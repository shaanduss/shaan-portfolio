import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import WelcomeDialog from './components/WelcomeDialog'
import { HomeView } from './views/HomeView'
import { ThemeProvider } from './components/theme-provider'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <WelcomeDialog />
        <div className="min-h-screen flex-col">
          <Navbar/>
          <Routes>
            <Route path="/" element={<HomeView />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
