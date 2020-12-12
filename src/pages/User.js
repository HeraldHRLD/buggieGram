import React, { useContext } from 'react';
import { Context } from '../Context'
import { SubmitButton } from '../components/SubmitBottom/index'
import { Layout } from '../components/Layout/index';

export const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <>
      <Layout TitleUp='User'>
        <h1>User</h1>
        <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>

      </Layout>
    </>
  )
}