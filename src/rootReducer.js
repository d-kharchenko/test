import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import products from './reducers/index';
import callback from './reducers/reducerCallback';


export default combineReducers({
    routing: routerReducer,
    products,
    callback
})