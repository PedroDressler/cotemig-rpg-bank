import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Index from './Index'
import RPG from './RPG'
import Bank from './Bank'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Index />} />
        <Route path='/rpg' element={<RPG />} />
        <Route path='/bank' element={<Bank />} />
      </Routes>
    </BrowserRouter>
  )  
}

export default App
