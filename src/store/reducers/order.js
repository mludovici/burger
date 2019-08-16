import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';


const initialState = {
    orders: [],
    loading: false,
    purchased: false
}

const purchaseInit = (state,action) => {
    return updateObject(state, { purchased: false })
}

const purchaseStart = (state,action) => {
    return updateObject(state, { loading: true })
}

const purchaseSuccess = (state,action) => {
    const newOrder= updateObject(action.orderData, {
        id: action.orderId
    });
    return updateObject( state, {
        loading: false, 
        purchased: true, 
        orders: state.orders.concat(newOrder)
    });
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT: 
            return purchaseInit(state,action);

        case actionTypes.PURCHASE_BURGER_START: 
            return purchaseStart(state,action);

        case actionTypes.PURCHASE_BURGER_SUCCESS:             
            return purchaseSuccess(state,action);

        case actionTypes.PURCHASE_BURGER_FAIL:
            return {
                ...state,
                loading: false
            };
        case actionTypes.FETCH_ORDERS_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.orders,
                loading: false
            };
        case actionTypes.FETCH_ORDERS_FAIL:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}

export default reducer;