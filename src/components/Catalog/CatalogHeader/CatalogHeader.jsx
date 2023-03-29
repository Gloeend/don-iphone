import React from "react"
import c from './style.module.css'
import {useSelector} from "react-redux";

const title = 'iPhone'
const count = 117


const CatalogHeader = () => {
    return (
        <div className={c.header}>
            <h1>{title}</h1>
            <span>{count}</span>
        </div>
    )
}

export default CatalogHeader