import React from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import Form from "../../Components/input/Input";
import { rootState } from "../../types";

import "./Login.scss";

interface Props {
  state: rootState;
}

const Login: React.FC<Props> = ({ state }) => {
  return (
    <div className="login">
      <Form />
      {state.token && <Redirect to="/dashboard" />}
    </div>
  );
};

const stateToProps = (state: rootState) => {
  return {
    state: state.login,
  };
};

export default connect(stateToProps)(Login);
