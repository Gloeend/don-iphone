import React from "react";
import c from './style.module.css';

const CatalogFilterRange = ({callback = () => null}) => {
    return (
        <div>
            <p className={c.title}>Цена</p>
            <div className={c.form}>
                <input type="number" placeholder="от 6000"/>
                <input type="number" placeholder="до 129 320"/>
            </div>
        </div>
    )
}

export default CatalogFilterRange
