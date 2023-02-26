import React from "react";
import "../styles/global.scss";
import { Howitworks } from "../containers/Howitworks";
import { Stepbystep } from "../containers/Stepbystep";
import { Navbar } from "./Navbar";
import { Landing } from "../containers/Landing";

const App = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <Howitworks />
      <Stepbystep />
    </div>
  );
};

export { App };
