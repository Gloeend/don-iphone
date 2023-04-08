import React from "react";
import c from './style.module.css'
import Link from "next/link";

const Tab = ({title = 'title', description = 'description', preview = '', link = '/'}) => {
    return (
        <Link href={link} className={c.article}>
            <img src={preview} alt={"Preview of " + title}/>
            <div className={c.container}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </Link>
    )
}

export default Tab