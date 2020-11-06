import {
  loginRequest,
  loginSuccess,
  loginFailure,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
} from "./../actions";

describe("login actions", () => {
  it("loginRequest returns with the right value", () => {
    const results = {
      type: LOGIN_REQUEST,
      payload: {
        email: "123@gmail.com",
        password: "4567890",
        endpoint: "/api/login",
      },
      loading: true,
      types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
    };

    expect(loginRequest("123@gmail.com", "4567890")).toEqual(results);
  });

  it("loginSuccess returns with the right value", () => {
    const results = {
      type: LOGIN_SUCCESS,
      token: "QpwL5tke4Pnpja7X4",
      loading: false,
    };

    expect(loginSuccess("QpwL5tke4Pnpja7X4")).toEqual(results);
  });

  it("loginFailure returns with the right value", () => {
    const results = {
      type: LOGIN_SUCCESS,
      error: "Missing password",
      loading: false,
    };

    expect(loginFailure("Missing password")).toEqual(results);
  });
});
