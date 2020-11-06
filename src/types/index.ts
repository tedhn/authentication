import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../store/action/actions";

export interface rootState {
  history: any;
  login: any;
  token: any;
  error: string;
  loading: boolean;
}

export interface loginrequest {
  type: typeof LOGIN_REQUEST;
  payload: any;
  loading: boolean;
  types: any;
}

export interface loginsuccess {
  type: typeof LOGIN_SUCCESS;
  token: string;
  loading: boolean;
}

export interface loginfailure {
  type: typeof LOGIN_FAILURE;
  error: string;
  loading: boolean;
}

export interface logout {
  type: typeof LOGOUT;
}

export type ACTION_TYPES = loginrequest | loginsuccess | loginfailure | logout;
