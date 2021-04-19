import { combineReducers } from 'redux';
import healtReducer from './healt.reducer'
import professionalsReducer from './professionals.reducer'

export default combineReducers({
  healtReducer,
  professionalsReducer
});
