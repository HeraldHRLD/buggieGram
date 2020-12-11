import React, { useContext } from 'react'
import { GlobalStyle } from './styles/GlobalStyles';
import Logo from './components/Logo/index';
import { Detail } from './pages/Detail';
import { Home } from './pages/Home';
import { Redirect, Router } from '@reach/router';
import { NavBar } from './components/NavBar/index';
import { NotFound } from './pages/NotFound'
import { User } from './pages/User'
import { Favs } from './pages/Favs'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { LoginUser } from './pages/LoginUser';
import { Context } from './Context';

const App = () => {
  const { isAuth } = useContext(Context)

  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home exact path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
        {!isAuth && <Redirect noThrow from='/user' to='/login' />}
        {isAuth && <Redirect from="/login" to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>

      <NavBar />

    </>
  )
}

export default App;
