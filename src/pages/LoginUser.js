import React, { useContext } from 'react';
import { Link, useNavigate } from '@reach/router'

import { Context } from '../Context';
import { UserForm } from '../components/UserForm/index';
import { LoginMutation } from '../container/LoginMutation';

export const LoginUser = () => {
  const { activateAuth } = useContext(Context)

  return (
    <>
      <LoginMutation>
        {
          (login, { data, loading, error }) => {
            const navigate = useNavigate();
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              login({ variables }).then(({ data }) => {
                const { login } = data
                activateAuth(login)
              })
              navigate('/home', { replace: true })
            }
            const errorMsg = error && 'La contraseña o usuario no es correcta'
            return (
              <UserForm
                disabled={loading}
                error={errorMsg}
                title={'Iniciar Sesion'}
                onSubmit={onSubmit}
              />
            )
          }
        }
      </LoginMutation>
      <h2>No tienes una cuenta? <Link to='/register'>Registrate aquí</Link></h2>
    </>
  )
}