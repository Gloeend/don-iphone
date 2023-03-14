import React from "react";
import { useSelector } from "react-redux";
import c from "./style.module.css";
import Button from "../Button/Button";

const ModalCart = ({ items }) => {
  const Item = ({ item }) => {
    return (
      <article className={c.article}>
        <img src={item.preview} alt={"Preview of " + item.name} className={c.preview} />
        <h5>{item.name}</h5>
        <div className={c.item__ui}>
          <button className={c.counter + " " + c["counter--remove"]}>
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 5.48522H5.48522H9.97044"
                stroke="white"
                stroke-width="0.792883"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <span>{item.count}</span>
          <button className={c.counter + " " + c["counter--add"]}>
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 5.48522H5.48522M5.48522 5.48522V1M5.48522 5.48522V9.97044M5.48522 5.48522H9.97044"
                stroke="white"
                stroke-width="0.792883"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <span className={c.price + " purple-gradient"}>{item.price}</span>
        <button className={c.close}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              opacity="0.6"
              d="M1 1L9 9M9 9L17 1M9 9L1 17M9 9L17 17"
              stroke="#232323"
              strokeWidth="2"
              strokeLinecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </article>
    );
  };

  const Empty = () => {};

  const Default = () => {
    return (
      <div className={c.modal}>
        <div className={c.container}>
          <Mapped />
        </div>
        <div className={c.ui}>
          <Button color="purple" undegged={true}>
            <span className={c["button-span"]}>Оформить</span>
          </Button>
          <p className={c['overall-price']}><span>Итого:</span><span>289 970₽</span></p>
        </div>
      </div>
    );
  };

  const Mapped = () => items.map((item, ind) => <Item item={item} key={ind} />);

  return !items.length || items.length === 0 ? <Empty /> : <Default />;
};

export default ModalCart;
