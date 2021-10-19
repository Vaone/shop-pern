import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import userReducer from './userReducer';
import deviceReducer from './deviceReducer';

const rootReducer = combineReducers({
  user: userReducer,
  device: deviceReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));