import React from "react";
import c from './style.module.css';
import CatalogFilterRange from "@components/CatalogFilterRange/CatalogFilterRange";
import CatalogFilterUser from "@components/CatalogFilterUsed/CatalogFilterUsed";
import Button from "@components/Button/Button";
import CatalogFilterCheckbox from "@components/CatalogFilterCheckbox/CatalogFilterCheckbox";
import sample from "@app/common/samples/examples";

const CatalogFilter = () => {
    return (
        <div className={c.filter}>
            <CatalogFilterRange />
            <CatalogFilterUser />
            <CatalogFilterCheckbox title="Серия" items={sample} />
            <CatalogFilterCheckbox title="Серия" items={sample} />
            <CatalogFilterCheckbox title="Серия" items={sample} />
            <CatalogFilterCheckbox title="Серия" items={sample} />

            <div className={c.submit_wrapper}>
                <Button color="gray" >Применить</Button>
            </div>
        </div>
    )
}

export default CatalogFilter
