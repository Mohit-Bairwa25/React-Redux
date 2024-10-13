import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // This should now work correctly

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;