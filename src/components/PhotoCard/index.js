import React, { Fragment } from 'react';
import { Article, ImgWrapper, Img } from './styles';
import { Link } from '@reach/router'

import { useNearScreen } from '../../hooks/useNearScreen';
import { FavButton } from '../FavButton/index';
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {

  const [show, element] = useNearScreen()
  const key = `like-${id}`
  

  //const handleFavClick = () => setLiked(!liked)

  return (
    <Article ref={element}>
      {
        show &&
        <Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  toggleLike({
                    variables: {
                      input: { id }
                    }
                  })
                  
                }
                return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
              }
            }

          </ToggleLikeMutation>
        </Fragment>
      }

    </Article>
  )
}