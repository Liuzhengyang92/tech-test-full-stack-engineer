import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {
  UPDATE_CAPSULES_DATA,
  UPDATE_LANDING_PAD_DATA
} from './constants';

const { NODE_ENV } = process.env;
const isDevelopment = NODE_ENV === 'development';

const initialState = {
  capsulesData: [],
  landingPadData: {}
}

const reducers = {
    spaceData: (state = initialState, action) => {
        const { type } = action;
        switch (type) {
            case UPDATE_CAPSULES_DATA:
                return {...state, capsulesData: action.payload };
            case UPDATE_LANDING_PAD_DATA:
                return {...state, landingPadData: action.payload };
            default:
                return state;
        }
    },
};

const slices = combineReducers({ ...reducers });

const  composeEnhancers = isDevelopment && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })
    : compose;


const store = createStore(
    slices,
    composeEnhancers(applyMiddleware(thunkMiddleware)),
);

export default store;
