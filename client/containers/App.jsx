import React, { useState, useEffect } from "react";
import {
  CounterShortStraddleCtr,
  IronCondorShortStrangleCtr,
} from "./CombinedContainers";
import AutoCombo from "../components/AutoCombo";
import "./styles.scss";
import DisclaimerButton from "../components/DisclaimerButton";
import SuggestionBox from "../components/SuggestionBox";

const strategyValues = [
  { title: "Iron Condor", id: "ironCondor" },
  { title: "Counter - Short Straddle", id: "counterShortStraddle" },
];

const App = (props) => {
  const [showSuggestionBox, setShowSuggestionBox] = useState(false);
  const onClick = () => setShowSuggestionBox(!showSuggestionBox);

  const {
    instrumentValues,
    selectedStrategy,
    selectedInstrument,
    getInstrumentValues,
    showStrategy,
  } = props;

  useEffect(() => {
    getInstrumentValues();
  }, []);

  const [sideBar, setSideBar] = useState(false);
  const handleSidebar = () => {
    setSideBar(!sideBar);
  };

  const getSelectedStrategy = () => {
    switch (selectedStrategy) {
      case "ironCondor":
        return (
          <IronCondorShortStrangleCtr instrumentType={selectedInstrument} />
        );
      case "counterShortStraddle":
        return <CounterShortStraddleCtr instrumentType={selectedInstrument} />;
      case "nIronCondor":
        return (
          <IronCondorShortStrangleCtr instrumentType={selectedInstrument} />
        );
      case "NONE":
        return (
          <div>
            <h1
              data-text="Select a Strategy from the Menu"
              className="bodyText"
            >
              Select a Strategy from the Menu
            </h1>
          </div>
        );
    }
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
                  <AutoCombo
                    strategyValues={strategyValues}
                    label="Create Default Strategy"
                    showStrategy={showStrategy}
                    instrumentType="bnfty"
                  />
                </li>
                <li>
                  NIFTY Spot: <strong>{instrumentValues.nfty}</strong>
                </li>

                <li>
                  <AutoCombo
                    strategyValues={strategyValues}
                    label="Create Default Strategy"
                    showStrategy={showStrategy}
                    instrumentType="nfty"
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
        <div className="wrapper" style={{ zIndex: "6" }}>
          {showSuggestionBox ? <SuggestionBox onClick={onClick} /> : null}
        </div>

        <DisclaimerButton />
        <a href="#" className="float-comments" onClick={onClick}>
          <i className="fa fa-comments"></i>
        </a>
      </div>
    </div>
  );
};

export default App;
