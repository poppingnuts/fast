import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Privacy from './src/components/Privacy'
import App from './src/App'

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
      setLoading(false);
      
  }, []);

  return (
    <>
      {loading && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span className="loader" style={{ position: 'relative', width: '100px', height: '100px' }}>
            <span style={{ content: '', borderRadius: '50%', position: 'absolute', inset: 0, boxShadow: '0 0 10px 2px rgba(0, 0, 0, 0.3) inset' }}></span>
            <span style={{ boxShadow: '0 2px 0 #915EFF inset', animation: 'rotate 2s linear infinite', content: '', borderRadius: '50%', position: 'absolute', inset: 0 }}></span>
          </span>
        </div>
      )}
      {!loading && (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/privacy' element={<Privacy />} />
          </Routes>
        </BrowserRouter>
      )}
      <style>
        {`.loader {
          position: relative;
          width: 100px;
          height: 100px;
        }

        .loader:before , .loader:after{
          content: '';
          border-radius: 50%;
          position: absolute;
          inset: 0;
          box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3) inset;
        }
        .loader:after {
          box-shadow: 0 2px 0 #915EFF inset;
          animation: rotate 2s linear infinite;
        }

        @keyframes rotate {
          0% {  transform: rotate(0)}
          100% { transform: rotate(360deg)}
        }`}
      </style>
    </>
  )
}

export default Home
