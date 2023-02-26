import React from "react";
import { Howitworks } from "../containers/Howitworks";
import "../styles/global.scss";
import { Navbar } from "./Navbar";
import { Landing } from "../containers/Landing";

const App = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <Howitworks />
    </div>
  );
};

export { App };
