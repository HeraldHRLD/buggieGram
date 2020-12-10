import React from 'react';
import { PhotoCard } from '../components/PhotoCard'

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import Spinner from '../assets/spinner'
import Error from '../assets/error'

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id:ID!){
  photo(id:$id){
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`
const renderProp = ({ loading, error, data = { photo: {} } }) => {
  if (loading) return <Spinner />
  if (error) return <Error />

  const { photo = {} } = data
  return (<PhotoCard {...photo} />)
}


export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {
      renderProp
    }
  </Query>
)