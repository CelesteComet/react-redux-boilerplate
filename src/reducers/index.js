import { combineReducers } from 'redux';
import tickReducer from './tickReducer';

export default combineReducers({
  tick: tickReducer
})