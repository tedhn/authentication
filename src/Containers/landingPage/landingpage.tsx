import React from "react";
import { connect } from "react-redux";
import { logOut } from "../../store/action/actions";

import "./landingpage.scss";

interface Props {
  logout: any;
}

const Landing: React.FC<Props> = ({ logout }) => {
  const handleLogOut = () => {
    logout();
  };

  return (
    <div className="wrapper">
      <div className="text">Welcome</div>
      <button className="button-logout" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
};

const actionToProps = (dispatch: any) => {
  return {
    logout: () => {
      dispatch(logOut());
    },
  };
};

export default connect(null, actionToProps)(Landing);
