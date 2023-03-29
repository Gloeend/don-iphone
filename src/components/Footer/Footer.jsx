import React from "react"
import c from "./style.module.css"
import Logotype from "@components/Logotype/Logotype";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={['wrap', c.footer].join(' ')}>
            <nav>
                <ul style={{justifyContent: "space-between"}}>
                    <li>
                        <Logotype />
                    </li>
                    <li>
                        <p className={[c['plain-text'], c['copyright']].join(' ')}>D.I© All rights reserved</p>
                    </li>
                </ul>
                <ul>
                    <p className={[c['plain-text']].join(' ')}>Don.iphone© 2022</p>
                    <Link className="gradient" href="/">Политика</Link>
                    <Link className="gradient" href="/">Условия</Link>
                    <Link className="gradient" href="/">Гарантия</Link>
                </ul>
                <ul>
                    <Link className="gradient" href="/">Каталог</Link>
                    <Link className="gradient" href="/">Главная</Link>
                    <Link className="gradient" href="/">Новости</Link>
                </ul>

                <ul style={{textAlign: "right", flexGrow: "5", alignItems: "flex-end"}}>
                    <Link className="gradient" href="/">О нас</Link>
                    <Link className="gradient" href="/">Связь с нами</Link>
                    <Link className="gradient" href="/">Вакансии</Link>
                    <Link className="gradient" href="/">Другое</Link>
                </ul>

            </nav>
        </footer>
    )
}

export default Footer