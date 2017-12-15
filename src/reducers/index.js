import {SET_PRODUCTS, PROD_FETCHED} from '../actions/actionProduct';

export default function products(state = [], action = {}) {
    switch (action.type){

        case PROD_FETCHED:
            const index = state.findIndex(item => item._id === action.product._id);
            if (index > -1) {
                return state.map(item => {
                    if (item._id === action.product._id) return action.product;
                    return item;
                });
            } else {
                return [
                    ...state,
                    action.product
                ];
            }

        case SET_PRODUCTS:
            return action.products;
        default: return state;
    }
}