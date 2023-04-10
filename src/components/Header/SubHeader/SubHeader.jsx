import React from "react";
import Button from "@components/Button/Button";
import c from './style.module.css'
import Link from "next/link";


const Dropdown = () => {
  //
}


const LeftLinkCol = () => {
  return (
    <>
      <li><Link href="#"><Button color="purple">Dropdown</Button></Link></li>
      <li><Link href="#"><Button color="red">Скидки %</Button></Link></li>
      <li><Link href="#"><Button color="gray">Apple iPhone</Button></Link></li>
      <li><Link href="#"><Button color="gray">AirPods</Button></Link></li>
      <li><Link href="#"><Button color="gray">Аксессуары</Button></Link></li>
    </>
  )
}

const RightLinkCol = () => {
  return (
    <>
      <li><Link href="/catalog"><Button>Каталог</Button></Link></li>
      <li><Link href="/service"><Button>Сервис</Button></Link></li>
      <li><Link href="/contacts"><Button>Контакты</Button></Link></li>
    </>
  )
}

const SubHeader = () => {
  return (
    <nav className={c.nav + " wrap"}>
      <ul>
        <LeftLinkCol />
      </ul>
      <ul>
        <RightLinkCol />
      </ul>
    </nav>
  );
};

export default SubHeader;
