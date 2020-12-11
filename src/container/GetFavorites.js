import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Spinner from '../assets/spinner'
import Error from '../assets/error'
import { ListOfFavs } from '../components/ListOfFavs/index'

const GET_FAVS = gql`
  query getFavs{
    favs{
      id
      categoryId
      src
      likes
      userId
    }
  }
`
const renderProp = ({ loading, error, data }) => {
  if (loading) return <Spinner />
  if (error) return <Error />
  const { favs } = data

  return <ListOfFavs favs={favs} />
}

export const FavsWithQuery = () => {
  return (
    <Query query={GET_FAVS} fetchPolicy='network-only'>
      {renderProp}
    </Query>
  )
}