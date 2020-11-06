import { loginfailure } from "./../../action/actions";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../../action/actions";
import { loginReducer } from "../login";
import { loginrequest, loginsuccess } from "../../../types";

describe("login Reducer", () => {
  it("returns with the initial value", () => {
    const action = {};

    expect(
      //@ts-ignore
      loginReducer({ loading: false, token: null, error: null }, action)
    ).toEqual({
      loading: false,
      token: null,
      error: null,
    });
  });

  it("should handle LOGIN_REQUEST", () => {
    const action: loginrequest = {
      type: LOGIN_REQUEST,
      email: "123@gmail.com",
      password: "4567890",
      endpoint: "/api/login",
      loading: true,
      types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
    };

    expect(
      loginReducer({ loading: false, token: null, error: null }, action)
    ).toEqual({ loading: true, token: null, error: null });
  });

  it("should handle LOGIN_SUCCESS", () => {
    const action: loginsuccess = {
      type: LOGIN_SUCCESS,
      token: "QpwL5tke4Pnpja7X4",
      loading: false,
    };

    expect(
      loginReducer({ loading: false, token: null, error: null }, action)
    ).toEqual({
      loading: false,
      token: "QpwL5tke4Pnpja7X4",
      error: null,
    });
  });

  it("returns with the initial value", () => {
    const action: loginfailure = {
      type: LOGIN_FAILURE,
      error: "Missing password",
      loading: false,
    };

    expect(
      loginReducer({ loading: false, token: null, error: null }, action)
    ).toEqual({
      loading: false,
      token: null,
      error: "Missing password",
    });
  });
});
