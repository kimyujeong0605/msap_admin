import { combineReducers } from 'redux';
//import { all } from 'redux-saga/effects';
import write from './write';

const rootReducer = combineReducers({
  write,
});

export default rootReducer;
