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
};

const SectionSlider = ({children, items}) => {

    const Mapped = () =>
        items.map((item) => (
            <SplideSlide>
                <Item item={item}/>
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