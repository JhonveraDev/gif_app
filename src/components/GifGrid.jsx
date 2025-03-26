import { useEffect, useState } from "react"
import { getGifs } from "../helpers/GetGifs"
import { GifItem } from "./GifItem"


export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages)
  }

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h4>{category}</h4>
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {... image} />
        ))}
      </div>
    </>
  )
}
