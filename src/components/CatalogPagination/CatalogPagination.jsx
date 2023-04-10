import React, {useState} from "react";
import c from './style.module.css'


const CatalogPagination =  ({count = 10, def = 1, callback = () => null}) => {

    const CatalogPaginationItem = ({ind, callback = () => null}) => <button className={c.item + ' ' + (active === ind ? c['active'] : null)} onClick={() => callback(ind)}>{ind}</button>

    const MappedItems = ({count, callback = () => null}) => {

        let res = [];

        for (let i = 1; i < count; i++) {
            res.push(<CatalogPaginationItem ind={i} callback={callback} />)
        }
        return res.map((el) => el)
    }

    const [active,setActive] =useState(def)

    const emitter = (el) => {
        setActive(el)
        callback(el)
    }

    return (
        <div className={c.pagination}>
            <MappedItems count={count} callback={emitter} />
        </div>
    )
}

export default CatalogPagination
