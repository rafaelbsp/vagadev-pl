import './App.css'
import Contato from './Pages/contato'
import Home from './Pages/home'
import Navbar from './components/Navbar/Navbar'
import {  Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='App' >
        <Navbar/>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/contato' element={<Contato/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
