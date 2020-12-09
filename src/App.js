import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles';
import { ListOfPhotoCards } from './components/ListOfPhotoCard/index';
import Logo from './components/Logo/index';
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards />
    </>
  )
}

export default App;
