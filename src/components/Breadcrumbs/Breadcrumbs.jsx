import Link from 'next/link'
import React from 'react'
import c from './style.module.css'

const Mapped = ({items}) => items.map((el) => <li className={c.link}><Link href={el.link}>{el.name}</Link></li>)

const Breadcrumbs = ({items}) => {
  return (
    <nav>
      <ul className={c.container}>
        <Mapped items={items} />
      </ul>
    </nav>
  )
}

export default Breadcrumbs
