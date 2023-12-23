import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './Profile.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div><App/></div>}/>
        <Route path='/profile' element={<div><Profile/></div>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
