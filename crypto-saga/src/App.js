import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import {Navbar} from './components/Navbar';
import {HomePage} from './components/HomePage';
import './App.css';
import { Exhanges } from './components/Exhanges';
import { Cryptocurrencies } from './components/Cryptocurrencies';
import { CryptoDetails } from './components/CryptoDetails';
import { News } from './components/News';

const App = () => {
  return (
    <div>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route path='/' element={<HomePage />} />
            </Routes>
            <Routes>
              <Route path='/exchanges' element={<Exhanges/>} />
            </Routes>
            <Routes>
              <Route path='/cryrocurrencies' element={<Cryptocurrencies/>} />
            </Routes>
            <Routes>
              <Route path='/crypto/:coinid' element={<CryptoDetails/>} />
            </Routes>
            <Routes>
              <Route path='/news' element={<News/>} />
            </Routes>
          </div>
        </Layout>
      </div>
      <div className='footer'>
        {/* Add footer content here */}
      </div>
    </div>
  );
};

export default App;
