import React from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { rootState } from "../../types";
import Landing from "../landingPage/landingpage";

interface Props {
  state: rootState;
}

const Dashboard: React.FC<Props> = ({ state }) => {
  return <>{state.token ? <Landing /> : <Redirect to="/login" />}</>;
};

const stateToProps = (state: rootState) => {
  return {
    state: state.login,
  };
};

export default connect(stateToProps)(Dashboard);
