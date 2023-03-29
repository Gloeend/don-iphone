import React from "react"
import c from './style.module.css'
import ContactInput from "@components/ContactInput/ContactInput";

const ContactForm = () => {

    return (
        <form className={c.form}>
            <ContactInput placeholder="Ваше имя" />
            <ContactInput placeholder="Ваш телефон" />
            <ContactInput placeholder="Комментарий" textarea={true} />
            <button>Отправить</button>
        </form>
    )
}

export default ContactForm