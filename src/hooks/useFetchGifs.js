import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {
  const [state, setState] = useState({ data: [], loading: true })

  useEffect(() => {
    getGifs(category)
      // .then((imgs) => setImages(imgs))
      .then((imgs) => {
        setTimeout(() => {
          setState({
            data: imgs,
            loading: false,
          })
        }, 2000)
      })
  }, [category])

  return state
}
