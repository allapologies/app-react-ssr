import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../client/reducers'

const initialState = {};
const enhancers = applyMiddleware(thunk);

export default () => {
    const store = createStore(reducers, initialState, enhancers);

    return store
}
