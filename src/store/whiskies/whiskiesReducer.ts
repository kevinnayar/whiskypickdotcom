import { apiXferInit, apiXferRequested, apiXferSucceeded, apiXferFailed } from '../../utils/baseUtils';

import {
  TypeWhiskiesReducer,
  TypeWhiskiesDispatch,
  WHISKIES_GET_ALL_REQUESTED,
  WHISKIES_GET_ALL_SUCCEEDED,
  WHISKIES_GET_ALL_FAILED,
  WHISKIES_UPDATE_FILTERED,
} from '../../types/reducerTypes';

const initialState: TypeWhiskiesReducer = {
  getWhiskiesAllXferStatus: apiXferInit(),
  all: [],
  filtered: [],
};

export function whiskiesReducer(state: TypeWhiskiesReducer = initialState, action: TypeWhiskiesDispatch): TypeWhiskiesReducer {
  switch (action.type) {
    case WHISKIES_GET_ALL_REQUESTED:
      return { ...state, getWhiskiesAllXferStatus: apiXferRequested() };
    case WHISKIES_GET_ALL_SUCCEEDED:
      return {
        ...state,
        getWhiskiesAllXferStatus: apiXferSucceeded(),
        all: action.payload,
        filtered: action.payload,
      };
    case WHISKIES_GET_ALL_FAILED:
      return { ...state, getWhiskiesAllXferStatus: apiXferFailed(action.error) };
    case WHISKIES_UPDATE_FILTERED:
      return { ...state, filtered: action.payload };
    default:
      return state;
  }
}
