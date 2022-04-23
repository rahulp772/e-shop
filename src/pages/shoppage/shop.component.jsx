import React, {useEffect} from "react";
import CollectionOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from "../collection/collection.component";

import { connect } from "react-redux";
import { fetchCollectionStartAsync } from "../../redux/shop/shop.actions";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching, selectIsCollectionLoaded } from "../../redux/shop/shop.selector";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import { Route, Routes, useParams } from "react-router-dom";

import './shop.styles.scss';

// This is higher order component...
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({fetchCollectionStartAsync, selectIsCollectionLoaded}) => {

    useEffect(() => {
        fetchCollectionStartAsync();
    },[fetchCollectionStartAsync]);

    let params = useParams();
    return (<div className="shop-page">
        <Routes>
            {/* <Route path="/" element={<CollectionOverview />} />
            <Route path="/:categoryId" element={<CollectionPage collectionId={params['*'].split('/')[0]} />} /> */}
            {/* Use of higher order component */}
            <Route path="/" element={<CollectionOverviewWithSpinner isLoading={!selectIsCollectionLoaded}  />} />
            <Route path="/:categoryId" element={<CollectionPageWithSpinner collectionId={params['*'].split('/')[0]} isLoading={!selectIsCollectionLoaded} />} />
        </Routes>
    </div>)
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    selectIsCollectionLoaded: selectIsCollectionLoaded
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);