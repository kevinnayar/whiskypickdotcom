import { combineReducers, Reducer } from 'redux';
import { whiskiesReducer } from './whiskies/whiskiesReducer';
import { usersReducer } from './users/usersReducer';

import { 
  TypeWhiskiesReducer,
  TypeUsersReducer,
  TypeAppDispatch,
} from '../types/reducerTypes';


const rootReducer: Reducer<{
  whiskies: TypeWhiskiesReducer;
  users: TypeUsersReducer;
}, TypeAppDispatch> = combineReducers({
  whiskies: whiskiesReducer,
  users: usersReducer,
});


export default rootReducer;

