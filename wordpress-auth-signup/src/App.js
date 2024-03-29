import { BrowserRouter, Route } from 'react-router-dom';
import React, { Component } from 'react'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Home from './components/Home'
import  './assets/style.css';

export class App extends Component {
  render() {
    return (

      <div className='app'>
        <BrowserRouter>
        <div className='App'>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SignUp} />
        </div>
      </BrowserRouter>
      </div>
    )
  }
}

export default App;
