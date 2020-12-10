import React from 'react';
import Context from '../Context';
import { UserForm } from '../components/UserForm/index';


export const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          return (
            <>
            <UserForm title={'Iniciar Sesion'} onSubmit={activateAuth} />
            <UserForm title={'Registrate'} onSubmit={activateAuth} />
            </>
          )
        }
      }
    </Context.Consumer>
  )
}