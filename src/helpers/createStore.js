import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const reducers = {};
const initialState = {};
const enhancers = applyMiddleware(thunk);

export default () => {
    const store = createStore(reducers, initialState, enhancers);

    return store
}
