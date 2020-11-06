import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { loginRequest } from "../../store/action/actions";
import { rootState } from "../../types";
import "./Input.scss";

interface Props {
  login: any;
  state: rootState;
}

const Form: React.FC<Props> = ({ state, login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("Login");

  const handleLogin = () => {
    login(email, password);
  };

  useEffect(() => {
    if (state.loading) {
      setText("Loging In");
    } else {
      setEmail("");
      setPassword("");
      setText("Login");
    }
  }, [state]);

  return (
    <>
      {state.error ? <div className="error">{state.error}</div> : <div></div>}
      <input
        className="username"
        data-testid="test-input-username"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <input
        className="password"
        data-testid="test-input-password"
        placeholder="Password"
        value={password}
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <button
        className="button-login"
        data-testid="test-input-button"
        onClick={handleLogin}
      >
        {text}
      </button>
    </>
  );
};

const stateToProps = (state: rootState) => {
  return {
    state: state.login,
  };
};

const actionToProps = (dispatch: any) => {
  return {
    login: (email: string, password: string) => {
      dispatch(loginRequest(email, password));
    },
  };
};

export default connect(stateToProps, actionToProps)(Form);
