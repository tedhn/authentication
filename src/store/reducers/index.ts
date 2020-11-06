import { loginReducer } from "./login";
import { combineReducers } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";
import history from "../../utils/history";

export const createReducer = () => {
  return combineReducers({
    history: connectRouter(history),
    login: loginReducer,
  });
};
