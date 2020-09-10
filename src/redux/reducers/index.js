import { combineReducers } from 'redux';
import filterReducers from './filters';
import pizzasReducers from './pizzas';
import cart from './cart';

const rootReducer = combineReducers({
    filters: filterReducers,
    pizzas: pizzasReducers,
    cart,
});

export default rootReducer;
