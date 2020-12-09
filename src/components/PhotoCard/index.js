import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Article, ImgWrapper, Img, Button } from './styles';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (e) {
      return initialValue
    }
  })

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    } catch (error) {
      console.log(error)
    }
  }
  return [storedValue, setLocalStorage]
}

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {

  const element = useRef(null)
  const [show, setShow] = useState(false)
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  useEffect(() => {
    import('intersection-observer')
      .then(() => {
        const observer = new window.IntersectionObserver((entries) => {
          //console.log(entries)
          const { isIntersecting } = entries[0]
          if (isIntersecting) {
            //console.log('si')
            setShow(true)
            observer.disconnect()
          }
        })
        //console.log(element)
        observer.observe(element.current)
      })


  }, [element])



  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={element}>
      {
        show &&
        <Fragment>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button onClick={() => setLiked(!liked)}>
            <Icon size="24px" />{likes} Likes!
          </Button>
        </Fragment>
      }

    </Article>
  )
}