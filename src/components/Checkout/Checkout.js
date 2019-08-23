import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route, Redirect} from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import {connect} from 'react-redux';
//import * as actions from '../../store/actions/index';

import {someContext} from '../../../src/index';

class Checkout extends Component {
    static contextType = someContext;

    checkoutCancelled = () => {
        this.props.history.goBack();
    }

    checkoutContinued = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        let weirdMessage = this.context;
        let summary = <Redirect to ="/" />
        if (this.props.ings) {
            const purchasedRedirect = this.props.purchased ? <Redirect to ="/" /> : null;

            summary = (
                <someContext.Consumer>
                    {value => (
                        <div>
                        {console.log("Global value from Context:", value)}
                        {console.log("The weird message from context is also:", weirdMessage)}
                        {purchasedRedirect }
                        <CheckoutSummary 
                            ingredients={this.props.ings}
                            checkoutCancelled={this.checkoutCancelled}
                            checkoutContinued={this.checkoutContinued}
                        />  
                        <Route 
                            path={this.props.match.path + '/contact-data'} 
                            component={ContactData}
                        />
                    </div> 
                    )}                       
                </someContext.Consumer>             
            )
        }
        return summary;
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
}


export default connect(mapStateToProps) (Checkout);