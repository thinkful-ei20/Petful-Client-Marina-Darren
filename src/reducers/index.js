import { combineReducers } from 'redux';
import catReducer from './cat';
import dogReducer from './dog';

const rootReducer = combineReducers({
  catReducer,
  dogReducer
});

export default rootReducer;