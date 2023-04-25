import React from "react";
import c from "./style.module.css";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import Item from "@components/Item/Item";
import "@splidejs/react-splide/css";

const options = {
    rewind: true,
    width: "100%",
    gap: "1.875rem",
    perPage: 5,
    arrows: false,
    pagination: false,
    breakpoints: {
        1440: {
            perPage: 4,
        },
        990: {
            perPage: 3,
        },
        768: {
            perPage: 3,
        },
        700: {
            perPage: 2,
            gap: "1rem"
        },
        375: {
            perPage: 1
        }
    }
};

const SectionSlider = ({children, items}) => {

    const Mapped = () =>
        items.map((item) => (
            <SplideSlide>
                <Item name={item.name} price={item.price} preview={item.preview} />
            </SplideSlide>
        ));

    return (
        <section className={c.section}>
            <div className={c.section__header}>
                {children}
            </div>
            <Splide aria-label="slider" options={options}>
                <Mapped/>
            </Splide>
        </section>
    )
}

export default SectionSlider
