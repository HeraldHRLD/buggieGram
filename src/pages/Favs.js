import React from 'react';
import { FavButton } from '../components/FavButton';
import { FavsWithQuery } from '../container/GetFavorites';
import { Layout } from '../components/Layout/index';

export const Favs = () => {
  return (
    <>
      <Layout TitleUp='Favorites' title="Tus favoritos"
        subtitle='Aquí puedes encontrar tus favoritos'
      >
        <FavsWithQuery />
      </Layout>
    </>
  )
}