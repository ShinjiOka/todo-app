import { combineReducers } from 'redux';
import { todoReducer } from './todoReducer.js';
import { visibleFilterReducer } from './visibleFilterReducer.js';

const rootReducer = combineReducers({
    todos: todoReducer,
    visibleFilter: visibleFilterReducer
})

export default rootReducer;