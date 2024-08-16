import React from 'react'
import { Switch , Route , Link  } from 'react-router-dom';
import { Layout , Typography , Space } from 'antd';
import { Navbar } from './components/Navbar';

const  App = () => {
  return (
    <div>
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className='main'>

      </div>
      <div className='footer'>

      </div>
    </div>
  )
}
export default App;