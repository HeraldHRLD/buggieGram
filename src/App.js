import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles';
import Logo from './components/Logo/index';
import { Detail } from './pages/Detail';
import { Home } from './pages/Home';
import { Router } from '@reach/router';
import { NavBar } from './components/NavBar/index';

import { User } from './pages/User'
import { Favs } from './pages/Favs'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { LoginUser } from './pages/LoginUser';
import Context from './Context';

const App = () => {

  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        {/* <Home exact path='/' /> */}
        <LoginUser path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>

      <Context.Consumer>
        {
          ({ isAuth }) =>
            isAuth ?
              <Router>
                <Home exact path='/home' />
                <Favs path='/favs' />
                <User path='/user' />

              </Router>
              :
              <Router>
                <LoginUser path='/home' />
                <LoginUser path='/login' />
                <LoginUser path='/favs' />
                <LoginUser path='/user' />
                <NotRegisteredUser path='/favs' />
                <NotRegisteredUser path='/user' />
                <NotRegisteredUser path='/register' />
              </Router>

        }

      </Context.Consumer>

      <NavBar />

    </>
  )
}

export default App;
