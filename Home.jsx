import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Privacy from './src/components/Privacy'
import App from './src/App'

const Home = () => {
  return (

    <BrowserRouter>
    <Routes>
        <Route path='/' element={ <App/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
        
    </Routes>
    </BrowserRouter>
  )
}

export default Home