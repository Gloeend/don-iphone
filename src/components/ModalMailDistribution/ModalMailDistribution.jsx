import React from "react";
import c from './style.module.css';

const ModalMailDistribution = () => {
    return (
        <div className={c.modal}>
            <p className={c.text}>Хотите узнать больше?</p>
            <p className={c.text}>
                Подпишитесь на рассылку Don.iPhone —
                расскажем о новинках Apple, акциях и событиях
            </p>
            <button className={c.button}>
                Хочу!
            </button>
        </div>
    )
}
