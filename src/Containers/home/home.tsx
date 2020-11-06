import { Link } from "react-router-dom";
import React from "react";

import "./home.scss";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <>
      <button className="button">
        <Link to={"/login"}>Login</Link>
      </button>
    </>
  );
};

export default Home;
