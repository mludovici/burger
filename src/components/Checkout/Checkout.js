import React, { useContext } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route, Redirect} from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import {connect} from 'react-redux';
//import * as actions from '../../store/actions/index';

import {someContext} from '../../../src/index';

const checkout = props => {
    const {message} = useContext(someContext);

    const checkoutCancelled = () => {
        props.history.goBack();
    }

    const checkoutContinued = () => {
        props.history.replace('/checkout/contact-data');
    }

        let summary = <Redirect to ="/" />
        if (props.ings) {
            const purchasedRedirect = props.purchased ? <Redirect to ="/" /> : null;

            summary = (
                <someContext.Consumer>
                    {value => (
                        <div>
                        {console.log("message from context:", message)}
                        {purchasedRedirect }
                        <CheckoutSummary 
                            ingredients={props.ings}
                            checkoutCancelled={checkoutCancelled}
                            checkoutContinued={checkoutContinued}
                        />  
                        <Route 
                            path={props.match.path + '/contact-data'} 
                            component={ContactData}
                        />
                    </div> 
                    )}                       
                </someContext.Consumer>             
            )
        }
        return summary;
    
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
}


export default connect(mapStateToProps) (checkout);