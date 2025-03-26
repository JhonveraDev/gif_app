import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['DBZ'])

  const onAddCategory = (NewCategory) => {
    console.log(NewCategory)
    if (categories.includes(NewCategory)) return;
    setCategories([NewCategory, ...categories])
  }

  return (
    <>
      <h1>Gif Expert</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((category) => (
        <GifGrid category={category} key={category} />
      ))}
    </>
  )
}
