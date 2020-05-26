import { apiXferInit, apiXferRequested, apiXferSucceeded, apiXferFailed } from '../../utils/baseUtils';

import {
  TypeUsersReducer,
  TypeUsersDispatch,
  USERS_GET_ALL_REQUESTED,
  USERS_GET_ALL_SUCCEEDED,
  USERS_GET_ALL_FAILED,
} from '../../types/reducerTypes';

const initialState: TypeUsersReducer = {
  getUsersAllXferStatus: apiXferInit(),
  all: [],
};

export function usersReducer(state: TypeUsersReducer = initialState, action: TypeUsersDispatch): TypeUsersReducer {
  switch (action.type) {
    case USERS_GET_ALL_REQUESTED:
      return { ...state, getUsersAllXferStatus: apiXferRequested() };
    case USERS_GET_ALL_SUCCEEDED:
      return {
        ...state,
        getUsersAllXferStatus: apiXferSucceeded(),
        all: action.payload,
      };
    case USERS_GET_ALL_FAILED:
      return { ...state, getUsersAllXferStatus: apiXferFailed(action.error) };
    default:
      return state;
  }
}
