import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

// import { syncHistoryWithStore } from 'react-router-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// import {createBrowserHistory} from 'history';

import {Provider} from 'react-redux';
import Layout from '../../containers/layout';
import Products from '../../containers/products';
import SignIn from '../../containers/registration';
import Security from '../../containers/security'


import reducers from "../../reducers";

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
));
// const history = syncHistoryWithStore(createBrowserHistory(), store);
const Routes = () => {
    return(
        <Provider store={store}>
                <BrowserRouter >
                    <div>
                            <Route path="/" exact component={Layout} />
                            <Route path="/sign-in" component={SignIn} />
                            <Route path='/products' component={Products} />
                            <Route path='/security' component={Security} />
                    </div>
                </BrowserRouter>
        </Provider>

    )
};

export default Routes;
