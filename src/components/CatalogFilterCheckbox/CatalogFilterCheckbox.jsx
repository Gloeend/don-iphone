import React, {useState} from "react";
import c from './style.module.css';
const CheckboxItem = ({value, title, callback = () => null}) => {
    const [active, setActive] = useState(false)

    const emitter = () => {
        setActive(!active)
    }

    return <li><button className={c.button + ' ' + (active ? c.active : null)} onClick={() => emitter()}>{title}</button></li>
}

const CatalogFilterCheckbox = ({title = '', items = [], callback = () => null }) => {

    const Mapped = ({items}) => items.map((item, index) => <CheckboxItem value={index} title={item} />)

    return (
        <div className={c.container}>
            <p>{title}</p>
            <ul className={c.list}>
                <Mapped items={items} />
            </ul>
        </div>
    )
}

export default CatalogFilterCheckbox
