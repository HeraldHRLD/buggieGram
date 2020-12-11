import React from 'react';
import Context from '../Context';
import { UserForm } from '../components/UserForm/index';
import { RegisterMutation } from '../container/RegisterMutation';
import { LoginMutation } from '../container/LoginMutation';

export const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          return (
            <>
              <RegisterMutation>
                {
                  (register, { data, loading, error }) => {
                    const onSubmit = ({ email, password }) => {
                      const input = { email, password }
                      const variables = { input }
                      register({ variables }).then(activateAuth)
                    }
                    const errorMsg = error && 'El usuario ya existe.'

                    return (
                      <UserForm
                        disabled={loading}
                        error={errorMsg}
                        title={'Registrate'}
                        onSubmit={onSubmit}
                      />
                    )
                  }
                }
              </RegisterMutation>
              <LoginMutation>
                {
                  (login, { data, loading, error }) => {
                    const onSubmit = ({ email, password }) => {
                      const input = { email, password }
                      const variables = { input }
                      login({ variables }).then(activateAuth)
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
            </>
          )
        }
      }
    </Context.Consumer>
  )
}