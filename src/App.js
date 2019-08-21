import React, { Component, Suspense, lazy } from 'react';
import {Route, Switch, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
//import Checkout from './components/Checkout/Checkout';
//import Orders from './containers/Orders/Orders';
//import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import {connect} from 'react-redux';
import * as actions from './store/actions/index';

const Checkout = lazy(() => import('./components/Checkout/Checkout'));
const Orders = lazy(() => import('./containers/Orders/Orders'));
const Auth = lazy(() => import('./containers/Auth/Auth'));

 

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }


  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />    
        <Route path="/" component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/checkout" component={Checkout} />  
          <Route path="/orders" component={Orders} />         
          <Route path="/logout" component={Logout} />  
          <Route path="/auth" component={Auth} />   
          <Route path="/" component={BurgerBuilder} />
        </Switch>
      )
    }

    return (
      <div>
        <Layout> 
          <Suspense fallback={<div>Loading...</div>} >
            {routes}
          </Suspense>
        </Layout>        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
