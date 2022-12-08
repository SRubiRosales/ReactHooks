import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Marvel', 'DC']);
  const onAddCategory = () => {
    setCategories(['Disney', ...categories]);
  }
  return (
    <>
    {/* Título */}
      <h1>Gif Expert App</h1>
    {/* Input */}
    <AddCategory setCategories={setCategories}/>
    {/* Listado de Gif */}
    {/* <button onClick={onAddCategory}>Agregar</button> */}
    <ol>
      { categories.map(category => {
        return <li key={category}>{category}</li>
      })}
    </ol>
    {/* Gif item */}
    </>
  )
}
