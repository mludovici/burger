import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
    ingredients: null,
    totalPrice: 0.6,
    error: false,
    building: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

const addIngredient = (state, action) => {
    const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] +1};
    const updatedIngredients = updateObject(state.ingredients,updatedIngredient)
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true             
    }
    return updateObject(state, updatedState);  
}

const removeIngredient = (state,action) => {
    const updatedIng = {[action.ingredientName]: state.ingredients[action.ingredientName] -1};
    const updatedIngs = updateObject(state.ingredients,updatedIng)
    const updatedSt = {
        ingredients: updatedIngs,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
        building: true             
    }
    return updateObject(state, updatedSt);
}

const setIngredients = (state,action) => {
    return {
        ...state,
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat
        },
        totalPrice: 0.6,
        error: false,
        building: false
    }
}

const fetchIngredients =(state,action) => {
    return {
        ...state,
        error: true
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return addIngredient(state,action);        
        case actionTypes.REMOVE_INGREDIENT:
            return removeIngredient(state,action);
        case actionTypes.SET_INGREDIENTS: 
            return setIngredients(state,action);
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return fetchIngredients(state,action);
        
        default: 
            return state;  
    }    
};

export default reducer;