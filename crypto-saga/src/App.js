import React from 'react'
import { Switch , Route , Link  } from 'react-router-dom';
import { Layout , Typography , Space } from 'antd';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import './App.css'
const  App = () => {
  return (
    <div>
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Switch>
              <Route exact path='/'>
                <HomePage/>
              </Route>
            </Switch>
          </div>
        </Layout>
      </div>
      <div className='footer'>

      </div>
    </div>
  )
}
export default App;