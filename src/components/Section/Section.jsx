import React from "react"
import c from './style.module.css'

const Section = ({classNameArray = [], children}) => {
    return <section className={c.section + ' '  + classNameArray.join(' ')}>{children}</section>
}



export default Section