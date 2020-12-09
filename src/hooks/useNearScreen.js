import {useEffect, useState, useRef} from 'react';

export const useNearScreen = () =>{
  const element = useRef(null)
  const [show, setShow] = useState(false)

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
  
  return [show, element]
}