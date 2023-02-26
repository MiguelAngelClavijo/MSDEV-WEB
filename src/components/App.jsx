import React from "react";
import { Planes } from "../containers/Planes";
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
      <Planes />
    </div>
  );
};

export { App };
