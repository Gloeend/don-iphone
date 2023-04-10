import React, {useState} from "react";
import c from './style.module.css';

const CatalogFilterUsed = ({callback = () => null}) => {
    const [active, setActive] = useState(0)

    const emitter = (el) => {
        setActive(el)
        callback(el)
    }

    return (
        <div className={c.form}>
            <button className={c.button + ' ' + (active === 0 ? c.active : null)} onClick={() => emitter(0)}>Б/У</button>
            <button className={c.button + ' ' + (active === 1 ? c.active : null)} onClick={() => emitter(1)}>Новое</button>
        </div>
    )
}

export default CatalogFilterUsed
