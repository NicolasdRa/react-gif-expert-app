import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {
  const [categories, setCategories] = useState([''])

  //   const handleAdd = () => {
  //     setCategories([...categories, 'test category'])

  //     // alternative
  //     // setCategories((categories) => [...categories, 'test category'])
  //   }

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((category) => (
          // no usar el index como key = mala practica
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  )
}

export default GifExpertApp
