import React, { useState, useEffect } from "react";
import { CounterShortStraddleCtr, IronCondorShortStrangleCtr } from "./CombinedContainers";
import "./styles.scss";

const App = (props) => {
  const { instrumentValues, selectedStrategy, getInstrumentValues, showIronCondor } = props;

  useEffect(() => {
    getInstrumentValues();
  }, []);

  const [sideBar, setSideBar] = useState(false);
  const handleSidebar = () => {
    setSideBar(!sideBar);
  };

  const getSelectedStrategy = () => {
    switch (selectedStrategy) {
      case "bnIronCondor": return <IronCondorShortStrangleCtr instrumentType="bnfty" />;
      case "counterShortStraddle": return <CounterShortStraddleCtr />;
      case "nIronCondor": return <IronCondorShortStrangleCtr instrumentType="nfty" />;
      case "NONE": return <div><h1 data-text="Select a Strategy from the Menu" className="bodyText">Select a Strategy from the Menu</h1></div>
    }
  }

  return (
    <div>
      <div>
        <header className="header">
          <div className="navContainer">
            <span className="logo" style={{}}>
              <span className="logo_text">Options Strategies</span> IF NOT THIS
              WHAT ELSE
            </span>

            {getSelectedStrategy()}

            <nav>
              <ul
                className="mainNav"
                style={sideBar ? { transform: "translateX(0)" } : null}
              >
                <li>
                  BANKNIFTY Spot: <strong>{instrumentValues.bnfty}</strong>
                </li>

                <li>
                  <div style={{ textAlign: "center" }}>Create Default<button className="rkmd-btn btn-flat ripple-effect" onClick={() => showIronCondor("bnIronCondor")}>[BNFTY] IRON CONDOR</button></div>
                </li>

                <li>
                  NIFTY Spot: <strong>{instrumentValues.nfty}</strong>
                </li>

                <li>
                  <div style={{ textAlign: "center" }}>Create Default<button className="rkmd-btn btn-flat ripple-effect" onClick={() => showIronCondor("nIronCondor")}>[NFTY] IRON CONDOR</button></div>
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
