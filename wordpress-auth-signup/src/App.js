import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Home from './components/Home'

export class App extends Component {
  render() {
    return (

      <div>
        <SignUp />
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
