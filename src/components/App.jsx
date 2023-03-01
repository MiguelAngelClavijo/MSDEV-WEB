import React from "react";
import "../styles/global.scss";
import { Navbar } from "./Navbar";
import { Landing } from "../containers/Landing";
import { Howitworks } from "../containers/Howitworks";
import { Stepbystep } from "../containers/Stepbystep";
import { Planes } from "../containers/Planes";
import { Calltoaction } from "../containers/Calltoaction";
import { Footer } from "../containers/Footer";

const App = () => {
  return (
    <div className="MainContainer">
      <Navbar />
      <Landing />
      <Howitworks />
      <Stepbystep />
      <Planes />
      <Calltoaction />
      <Footer />
    </div>
  );
};

export { App };
