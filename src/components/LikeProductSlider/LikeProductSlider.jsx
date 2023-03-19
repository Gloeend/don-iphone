import React from "react";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Item from "@components/Item/Item";

const options = {
    rewind: true,
    width: "100%",
    gap: "1.875rem",
    perPage: 5,
    arrows: false,
};

const LikeProductSlider = ({name, items}) => {
    const Mapped = () =>
        items.map((item) => (
            <SplideSlide>
                <Item item={item}/>
            </SplideSlide>
        ));

    return (
        <Splide aria-label={name} options={options}>
            <Mapped/>
        </Splide>
    );
};

export default LikeProductSlider;
