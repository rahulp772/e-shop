import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItem } from "../../redux/cart/cart.selector";

import './cart-dropdown.styles.scss';
import { toggleCartHidden } from "../../redux/cart/cart.action";

const CartDropdown = ({cartItems, dispatch}) => {
    let navigate = useNavigate();
    return (<div className="cart-dropdown">
        <div className="cart-items">
            {   
                cartItems.length ? (
                cartItems.map(cartItem => 
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
                : <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {navigate('/checkout'); dispatch(toggleCartHidden())}}>GO TO CHECKOUT</CustomButton>
    </div>)
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem
});

export default connect(mapStateToProps)(CartDropdown);