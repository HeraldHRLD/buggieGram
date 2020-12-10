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
import Context from './Context';

const App = () => {

  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>

      <Context.Consumer>
        {
          ({ isAuth }) =>
            isAuth ?
              <Router>
                <Favs path='/favs' />
                <User path='/user' />
              </Router>
              :
              <Router>
                <NotRegisteredUser path='/favs' />
                <NotRegisteredUser path='/user' />
              </Router>
        }

      </Context.Consumer>

      <NavBar />

    </>
  )
}

export default App;
