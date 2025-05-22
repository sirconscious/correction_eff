import React from 'react'
import Calculer_frais from './components/Calculer_frais'  
import Verification from './components/Verification'
import {BrowserRouter , Route, Routes} from 'react-router-dom'
export default function App() {
  return (
  <>
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Calculer_frais />} /> 
    <Route path="/:id" element={<Verification />} /> 

    </Routes>
    
    </BrowserRouter>
    
  </>
  )

}
