import React from "react";
import { UserCtr, IPCtr } from "./CombinedContainers";
import "./styles.scss";

const App = () => (
  <div className="mainStyle">
    <h4>Hello React16, Redux7 (SAGA), Webpack4, Bootstrap4, SCSS !</h4>
    <hr />
    <UserCtr />
    <hr />
    <IPCtr />
  </div>
);

export default App;
