import { TypeApiXferStatus, TypeWhisky, TypeUser } from './baseTypes';

export const WHISKIES_GET_ALL_REQUESTED = 'WHISKIES_GET_ALL_REQUESTED';
export const WHISKIES_GET_ALL_SUCCEEDED = 'WHISKIES_GET_ALL_SUCCEEDED';
export const WHISKIES_GET_ALL_FAILED = 'WHISKIES_GET_ALL_FAILED';

export const WHISKIES_GET_SELECTED_REQUESTED = 'WHISKIES_GET_SELECTED_REQUESTED';
export const WHISKIES_GET_SELECTED_SUCCEEDED = 'WHISKIES_GET_SELECTED_SUCCEEDED';
export const WHISKIES_GET_SELECTED_FAILED = 'WHISKIES_GET_SELECTED_FAILED';

export const WHISKIES_UPDATE_FILTERED = 'WHISKIES_UPDATE_FILTERED';

export const USERS_GET_ALL_REQUESTED = 'USERS_GET_ALL_REQUESTED';
export const USERS_GET_ALL_SUCCEEDED = 'USERS_GET_ALL_SUCCEEDED';
export const USERS_GET_ALL_FAILED = 'USERS_GET_ALL_FAILED';

export const USERS_GET_SELECTED_REQUESTED = 'USERS_GET_SELECTED_REQUESTED';
export const USERS_GET_SELECTED_SUCCEEDED = 'USERS_GET_SELECTED_SUCCEEDED';
export const USERS_GET_SELECTED_FAILED = 'USERS_GET_SELECTED_FAILED';

interface IWhiskiesGetAllKeys {
  WHISKIES_GET_ALL_REQUESTED: 'WHISKIES_GET_ALL_REQUESTED',
  WHISKIES_GET_ALL_SUCCEEDED: 'WHISKIES_GET_ALL_SUCCEEDED',
  WHISKIES_GET_ALL_FAILED: 'WHISKIES_GET_ALL_FAILED',
};
interface IWhiskiesGetSelectedKeys {
  WHISKIES_GET_SELECTED_REQUESTED: 'WHISKIES_GET_SELECTED_REQUESTED',
  WHISKIES_GET_SELECTED_SUCCEEDED: 'WHISKIES_GET_SELECTED_SUCCEEDED',
  WHISKIES_GET_SELECTED_FAILED: 'WHISKIES_GET_SELECTED_FAILED',
};
interface IWhiskiesUpdateFilteredKeys {
  WHISKIES_UPDATE_FILTERED: 'WHISKIES_UPDATE_FILTERED',
};
interface IUsersGetAllKeys {
  USERS_GET_ALL_REQUESTED: 'USERS_GET_ALL_REQUESTED',
  USERS_GET_ALL_SUCCEEDED: 'USERS_GET_ALL_SUCCEEDED',
  USERS_GET_ALL_FAILED: 'USERS_GET_ALL_FAILED',
};
interface IUsersGetSelectedKeys {
  USERS_GET_SELECTED_REQUESTED: 'USERS_GET_SELECTED_REQUESTED',
  USERS_GET_SELECTED_SUCCEEDED: 'USERS_GET_SELECTED_SUCCEEDED',
  USERS_GET_SELECTED_FAILED: 'USERS_GET_SELECTED_FAILED',
};

export type TypeBaseDispatch = {
  payload?: any;
  error?: any;
};

export type TypeWhiskiesGetAllDispatch = TypeBaseDispatch & {
  type: keyof IWhiskiesGetAllKeys;
};
export type TypeWhiskiesGetSelectedDispatch = TypeBaseDispatch & {
  type: keyof IWhiskiesGetSelectedKeys;
};
export type TypeWhiskiesUpdateFilteredDispatch = TypeBaseDispatch & {
  type: keyof IWhiskiesUpdateFilteredKeys;
};
export type TypeUsersGetAllDispatch = TypeBaseDispatch & {
  type: keyof IUsersGetAllKeys;
};
export type TypeUsersGetSelectedDispatch = TypeBaseDispatch & {
  type: keyof IUsersGetSelectedKeys;
};

export type TypeWhiskiesDispatch =
  | TypeWhiskiesGetAllDispatch
  | TypeWhiskiesGetSelectedDispatch
  | TypeWhiskiesUpdateFilteredDispatch;
export type TypeUsersDispatch = TypeUsersGetAllDispatch | TypeUsersGetSelectedDispatch;

export type TypeWhiskiesReducer = {
  getWhiskiesAllXferStatus: TypeApiXferStatus;
  all: TypeWhisky[];
  filtered: TypeWhisky[];
};

export type TypeUsersReducer = {
  getUsersAllXferStatus: TypeApiXferStatus;
  all: TypeUser[];
};

export type TypeAppState = {
  whiskies: TypeWhiskiesReducer;
  users: TypeUsersReducer;
};

export type TypeAppDispatch = TypeWhiskiesDispatch | TypeUsersDispatch;

