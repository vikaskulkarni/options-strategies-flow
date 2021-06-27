import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import AutoCombo from "../components/AutoCombo";
import FlowChart from "../components/FlowChart";
import "./styles.scss";

const App = () => {
  const [sideBar, setSideBar] = useState(false);
  const handleSidebar = () => {
    setSideBar(!sideBar);
  };
  return (
    <div>
      <div>
        <header className="header">
          <div className="navContainer">
            <span className="logo" style={{}}>
              <span className="logo_text">Options Strategies</span> IF NOT THIS
              WHAT ELSE
            </span>
            <FlowChart />
            <nav>
              <ul
                className="mainNav"
                style={sideBar ? { transform: "translateX(0)" } : null}
              >
                <li>
                  <AutoCombo />
                </li>
                <li>
                  <AutoCombo />
                </li>
                <li>
                  <TextField
                    label="Offset Reference"
                    // value={values.numberformat}
                    // onChange={handleChange}
                    name="numberformat"
                    id="formatted-numberformat-input"
                    // InputProps={{
                    //   inputComponent: NumberFormatCustom,
                    // }}
                  />
                </li>
              </ul>
            </nav>

            <button
              onClick={handleSidebar}
              className={`navToggle ${sideBar ? "open" : null}`}
            >
              <span />
              <span />
              <span />
            </button>
            <div
              onClick={handleSidebar}
              className={`overlay ${sideBar ? "open" : ""}`}
            />
          </div>
        </header>
        <div className="wrapper"></div>
      </div>
    </div>
  );
};

export default App;
