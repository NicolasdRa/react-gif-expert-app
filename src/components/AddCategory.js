import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim().length > 2) {
      // to pass a function as an argument even if the argument in the function is not available at this component level

      // use this technique to solve Myitinerary's create itinerary Photo edit functionality
      setCategories((categories) => [inputValue, ...categories])
      setInputValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="subtitle">To search gifs type text and press enter</h3>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  )
}

export default AddCategory

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}
