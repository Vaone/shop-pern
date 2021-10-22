import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import userReducer from './userReducer';
import deviceReducer from './deviceReducer';
import typeReducer from './typeReducer';
import brandReducer from './brandReducer';

const rootReducer = combineReducers({
  user: userReducer,
  device: deviceReducer,
  type: typeReducer,
  brand: brandReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));