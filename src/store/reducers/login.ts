import { ACTION_TYPES } from "./../../types/index";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../action/actions";

export const loginReducer = (
  state = { loading: false, error: null, token: null },
  action: ACTION_TYPES
) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return { ...state, loading: true };
    }
    case LOGIN_SUCCESS: {
      return { ...state, loading: false, token: action.token, error: null };
    }
    case LOGIN_FAILURE: {
      return { ...state, loading: false, error: action.error, token: null };
    }
    case LOGOUT: {
      return { ...state, loading: false, error: null, token: null };
    }

    default: {
      return state;
    }
  }
};
