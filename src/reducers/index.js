import { combineReducers } from 'redux';

import info from './reducers_info';

//by importing info here, it connects to universal state with combineReducers
//combineReducer is like our universal state
//need to import info here to send to universal state

//this still needs connected back to app components

const rootReducer = combineReducers({
  info
});

export default rootReducer;
