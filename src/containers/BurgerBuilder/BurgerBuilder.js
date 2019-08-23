import React, {useState, useEffect, useCallback} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import axios from '../../axios-orders';


const burgerBuilder  = props => {
    const [purchasing, setPurchasing] = useState(false);
    const dispatch = useDispatch();

    const ings = useSelector(state => {
        return state.burgerBuilder.ingredients;
    });
    const price = useSelector(state => {
        return state.burgerBuilder.totalPrice;
    });
    const error = useSelector(state => {
        return state.burgerBuilder.error;
    });
    const isAuthenticated = useSelector(state => {
        return state.auth.token !== null;
    });

    const onIngredientAdded =  (ingName) => dispatch(actions.addIngredient(ingName));
    const onIngredientRemoved = (ingName) => dispatch(actions.removeIngredient(ingName));
    const onIngredientInit = useCallback(
        () => dispatch(actions.initIngredients()),
        [dispatch]
        );
    const onInitPurchase = () => dispatch(actions.purchaseInit());
    const onSetAuthRedirectPath = (path) => dispatch(actions.setAuthRedirectPath(path)); 

    useEffect(() => {
        onIngredientInit();
    },[onIngredientInit]);

     

    const updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey];
        })
        .reduce((sum, el) => {
            return sum + el;
        }, 0);
        return sum > 0;
    }
    
    const purchaseHandler = () => {
        if (isAuthenticated) {
            setPurchasing(true);
        } else {
            onSetAuthRedirectPath('/checkout');
            props.history.push('/auth');
        }
    }

    const purchaseCancelHandler = () => {
        setPurchasing(false);
    }

    const purchaseContinueHandler = () => {
        onInitPurchase();
        props.history.push('/checkout');
    }

        const disabledInfo = {
            ...ings
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = null;
        if (props.loading) {
            orderSummary = <Spinner />;
        }
        let burger = error ? <p>Ingredients can't be loaded!</p>: <Spinner />;
        if (ings) {
            burger =  (
                <Aux>
                    <Burger ingredients = {ings}/>            
                    <BuildControls
                        isAuth = {isAuthenticated}
                        ingredientAdded={onIngredientAdded} 
                        ingredientRemoved={onIngredientRemoved} 
                        disabled={disabledInfo}
                        purchasable={updatePurchaseState(ings)}
                        ordered={purchaseHandler}
                        price={+price}
                    />
                </Aux> 
            )
            orderSummary = (
            <OrderSummary 
                ingredients = {ings}
                price={price}
                purchaseCancelled= {purchaseCancelHandler}
                purchaseContinued = {purchaseContinueHandler}
            />
            );
        };
        return (
            <Aux>
                <Modal show={purchasing} 
                modalClosed={purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>

        );
    
}

const mapStateToProps = (state) => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.token !== null
    };
}

const mapDispatchToProps = (dispatch) => {
     return {
    //     onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
    //     onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
    //     onIngredientInit: () => dispatch(actions.initIngredients()),
    //     onInitPurchase: () => dispatch(actions.purchaseInit()),
    //     onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))        
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (withErrorHandler(burgerBuilder, axios));