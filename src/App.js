import React, { Fragment } from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles';
import { ListOfPhotoCards } from './container/ListOfPhotoCards';
import Logo from './components/Logo/index';
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery';

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  
  return (
    <>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <Fragment>
            <ListOfCategories />
            <ListOfPhotoCards  />
          </Fragment>
      }

    </>
  )
}

export default App;
