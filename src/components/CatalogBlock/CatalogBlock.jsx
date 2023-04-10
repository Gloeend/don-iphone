import React from "react";
import c from "./style.module.css";
import TabRow from "@components/TabRow/TabRow";
import CatalogPagination from "@components/CatalogPagination/CatalogPagination";
import Item from "@components/Item/Item";
import CatalogFilter from "@components/CatalogFilter/CatalogFilter";

const CatalogBlock = ({items = []}) => {

    const MappedItems = () => items.map((item) => <Item name={item.name} price={item.price} preview={item.preview}></Item>)

    return (
        <div className={c['catalog']}>
            <div className={c['catalog-container']}>
                <TabRow classNameArray={[c['catalog-row']]}>
                    <MappedItems></MappedItems>
                </TabRow>
                <CatalogPagination></CatalogPagination>
            </div>
            <CatalogFilter></CatalogFilter>
        </div>
    )
}

export default CatalogBlock
