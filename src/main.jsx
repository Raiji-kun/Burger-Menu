import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Order from './Order.jsx'
import Error from './Error.jsx'
import "./App.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route>
      <Route path='/' element={<App />} />
      <Route path='order/:nom' element={<Order />}/>
      <Route path='*' element={<Error />}/>
      </Route>
    </Routes>
    
    </BrowserRouter>
   
  </StrictMode>,
)
