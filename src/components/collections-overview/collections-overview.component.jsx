import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview  from "../preview-collection/collection-preview.component";
import { selectCollectionsPreview } from "../../redux/shop/shop.selector";

import './collections-overview.styles.scss';

const CollectionOverview = ({collections}) => {
    return (
        <div className="collection-overview">
        {
            collections.map(({id, ...otherCollectionProps}) => {
                return <CollectionPreview key={id} {...otherCollectionProps} /> 
            })
        }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsPreview
})

export default connect(mapStateToProps)(CollectionOverview);