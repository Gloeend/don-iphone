import React, { useState } from 'react';
import c from './style.module.css'

const ProductGallery = ({items}) => {
  

  const [now, setNow] = useState(0)
  
  const Mapped = () => items.map((el, ind) => <button key={ind} className={ind === now ? c.active : null} onClick={() => setNow(ind)}><img src={el.image} /></button>)

  return (
    <div className={c.container}>
      <div className={c.sidebar}>
        <Mapped />
      </div>
      <div>
        <img className={c.preview} src={items[now].image} alt="Product detailed preview" />
      </div>
    </div>
  )
}

export default ProductGallery
