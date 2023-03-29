import React from "react";
import c from './style.module.css'

const Tab = ({title, description, preview}) => {
    return (
        <article className={c.article}>
            <img src={preview} alt={"Preview of " + title}/>
            <div className={c.container}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </article>
    )
}

export default Tab