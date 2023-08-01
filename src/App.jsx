import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'

function App() {

  return (
    <div className='px-5 sm:px-20 xl:px-32'>
      <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App
