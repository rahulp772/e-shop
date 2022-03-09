import { CartActionType } from './cart.types';
import { addToCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionType.TOGGLE_CART_HIDDEN:
            return { ...state, hidden: !state.hidden };
            
        case CartActionType.ADD_ITEM:
            return {
                // state.cartItems + action.payload will return both old and new state values
                ...state, cartItems: addToCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;