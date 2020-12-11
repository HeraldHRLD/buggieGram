import React from 'react';
import { FavButton } from '../components/FavButton';
import { FavsWithQuery } from '../container/GetFavorites';


export const Favs = () => {
  return (
    <>
      <h1>FAVS</h1>
      <FavsWithQuery />
    </>
  )
}