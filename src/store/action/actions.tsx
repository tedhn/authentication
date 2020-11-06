export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

export const loginRequest = (email: string, password: string) => {
  return {
    type: LOGIN_REQUEST,
    payload: { email, password, endpoint: "/api/login" },
    loading: true,
    types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
  };
};

export const loginSuccess = (token: string) => {
  return {
    type: LOGIN_SUCCESS,
    token,
    loading: false,
  };
};

export const loginFailure = (error: string) => {
  return {
    type: LOGIN_SUCCESS,
    error,
    loading: false,
  };
};

export const logOut = () => {
  return {
    type: LOGOUT,
  };
};
