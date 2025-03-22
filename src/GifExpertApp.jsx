import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'DBZ', 'Naruto'])

  const addCategory = () => {

  }

  return (
    <>
      <h1>Gif Expert</h1>
      <AddCategory setCategories = {setCategories}/>
      <button onClick={addCategory}>Agregar</button>
      <ol>
        {categories.map(category => {
          return <li key={category}>{category}</li>
        })}
      </ol>
    </>
  )
}
