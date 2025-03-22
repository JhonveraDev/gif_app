import { useState } from "react"

export const AddCategory = ({setCategories}) => {

  const [inputValue, setInputValue] = useState('')

  const onInputchange = (event) => {
    setInputValue(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    setCategories(categories => [inputValue, ...categories])
    setInputValue('');
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Buscar Gifs"
          value={inputValue}
          onChange={onInputchange}
        />
      </form>
    </>
  )
}