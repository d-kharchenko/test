import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';


import {Provider} from 'react-redux';
import Layout from '../../containers/layout';
import Products from '../../containers/products';
import SignIn from '../../containers/registration';
import Security from '../../containers/security'
import Product from '../../containers/product'


import rootReducer from "../../rootReducer";

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

const Routes = () => {
    return(
        <BrowserRouter >
            <Provider store={store}>
                <div>
                    <Route path="/" exact component={Layout} />
                    <Route path="/sign-in" component={SignIn} />
                    <Route path='/products' component={Products} />
                    <Route path='/security' component={Security} />
                    <Route path='/product/:_id' component={Product} />
                </div>
            </Provider>
        </BrowserRouter>

    )
};

export default Routes;
