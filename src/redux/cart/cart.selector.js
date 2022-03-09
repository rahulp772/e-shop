import { createSelector } from "reselect";

const selectCart = state => state.cart;


export const selectCartItem = createSelector(
    [selectCart], //input selector collection
    (cart) => cart.cartItems //return value from selectedcart
)

export const selectCartItemsCount = createSelector(
    [selectCartItem],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => 
        accumulatedQuantity + cartItem.quantity, 0
    )
)