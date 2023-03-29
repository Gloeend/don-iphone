import React from "react"
import c from "./style.module.css"


const SectionHeader = ({title = "Section Header", children}) => <div className={c.section__header}><h2>{title}</h2>  {children}</div>

export default SectionHeader