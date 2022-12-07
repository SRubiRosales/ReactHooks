import { useState } from "react";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Marvel', 'DC']);
  const onAddCategory = () => {
    setCategories([...categories, 'Disney']);
  }
  return (
    <>
    {/* Título */}
      <h1>Gif Expert App</h1>
    {/* Input */}
    {/* Listado de Gif */}
    <button onClick={onAddCategory}>Agregar</button>
    <ol>
      { categories.map(category => {
        return <li key={category}>{category}</li>
      })}
    </ol>
    {/* Gif item */}
    </>
  )
}
