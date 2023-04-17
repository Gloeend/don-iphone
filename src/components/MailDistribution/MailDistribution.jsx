import React from "react";
import c from './style.module.css';
import Link from "next/link";

const MailDistribution = () => {

    // const storage = localStorage
    //
    // if (storage.getItem('new')) {
    //     return null
    // }

    return (
        <div className={c.modal}>
            <p className={c.title}>Хотите узнать больше?</p>
            <p className={c.text}>
                Подпишитесь на рассылку <Link className={c.link} href="/">Don.iPhone</Link> — <br/>
                расскажем о новинках Apple, акциях и событиях
            </p>
            <button className={c.button}>
                Хочу!
            </button>
        </div>
    )
}

export default MailDistribution
