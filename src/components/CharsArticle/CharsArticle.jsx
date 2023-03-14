import React from 'react'
import c from './style.module.css'

const CharsArticle = ({title, items}) => {


  const Mapped = () => items.map((item) => <li className={c.row}> <span>{item.label}</span> <span> {item.value}</span></li>)

  return (
    <article className={c.article}>
      <h3>{title}</h3>
      <ul className={c.content}>
        <Mapped />
      </ul>
    </article>
  )
}

export default CharsArticle
