import { combineReducers } from 'redux';
import dataReducer from './reducer.js';

const rootReducer = combineReducers({
    data: dataReducer,
});

export default rootReducer;
