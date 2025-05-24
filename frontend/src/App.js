import React from 'react'
import Calculer_frais from './components/Calculer_frais'   
import CaculerPage from './pages/CaculerPage'
import Verification from './components/Verification'
import {BrowserRouter , Route, Routes} from 'react-router-dom' 
import Dossier from './pages/Dossier' 
import Main from './Layouts/Main'
export default function App() {
  return (
  <>
  <BrowserRouter>
    <Routes> 
        <Route path='/' element={<Main/>} >
            <Route index element={<CaculerPage />} />  
            <Route path='/list'  element={<Dossier/>}/>
            <Route path="/:id" element={<Verification />} /> 
        </Route>
    </Routes>
    
    </BrowserRouter>
    
  </>
  )

}
