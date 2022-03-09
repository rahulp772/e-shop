import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden, cartCount}) => {
    return <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{cartCount}</span>
    </div>
};

const mapDispatchToProps = dispatch => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
}

const mapStateToProps = (state) => {
    return { cartCount: selectCartItemsCount(state)}
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);