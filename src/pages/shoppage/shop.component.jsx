import React from "react";
import CollectionOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from "../collection/collection.component";

import { Route, Routes, useParams } from "react-router-dom";

import './shop.styles.scss';

const ShopPage = () => {
    let params = useParams();
    return (<div className="shop-page">
        <Routes>
            <Route path="/" element={<CollectionOverview />} />
            <Route path="/:categoryId" element={<CollectionPage collectionId={params['*'].split('/')[0]} />} />
        </Routes>
    </div>)
}

export default ShopPage;