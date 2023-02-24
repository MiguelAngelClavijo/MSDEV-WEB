import React from "react";
import "../styles/global.scss";
import { Navbar } from "./Navbar";
import { Landing } from "../containers/Landing";

const App = () => {
  return (
    <div>
      <Navbar />
      <Landing />
    </div>
  );
};

export { App };
