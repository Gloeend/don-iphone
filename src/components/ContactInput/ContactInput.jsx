import React from "react"
import c from "./style.module.css"

const ContactInput = ({type=  'text', textarea = false, placeholder = 'type...', callback = (el) => {}}) => {

    const input = <input type={type} placeholder={placeholder} onChange={() => {callback(event.target.value)}} className={c.input} />
    const area = <textarea rows="5" className={[c.input, c.textarea].join(' ')} placeholder={placeholder} onChange={() => callback(event.target.value)}></textarea>

    return textarea ? area : input
}


export default ContactInput