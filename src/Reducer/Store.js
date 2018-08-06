import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import ProductReducer from './Products';
import ActiveProductReducer from './Reducer-active-product';

const allReducer = combineReducers({
    products: ProductReducer,
    activeProduct: ActiveProductReducer,
    form: formReducer
});

export default allReducer;