import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Home from './components/Home'
import Login1 from './components/Login1'
import SignUp1 from './components/SignUp1';
import  './assets/style.css';

export class App extends Component {
  render() {
    return (

      <div className='app'>
        <Login />
      </div>

      // <BrowserRouter>
      //   <div className='App'>
      //       <Route exact path='/' component={Home} />
      //       <Route path='/login' component={Login} />
      //       <Route path='/signup' component={SignUp} />
      //   </div>
      // </BrowserRouter>
    )
  }
}

export default App;
