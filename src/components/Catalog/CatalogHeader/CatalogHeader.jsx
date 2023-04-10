import React from "react"
import c from './style.module.css'
import {useSelector} from "react-redux";


const CatalogHeader = ({title = 'iPhone', count = '117'}) => {
    return (
        <div className={c.header}>
            <h1>{title}</h1>
            <span>{count}</span>
        </div>
    )
}

export default CatalogHeader
