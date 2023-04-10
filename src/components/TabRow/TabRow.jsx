import React from "react"
import c from './style.module.css'

const TabRow = ({classNameArray = [], children}) => <div className={[c.row, ...classNameArray].join(' ')}>{children}</div>

export default TabRow
