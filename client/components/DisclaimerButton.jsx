/* eslint-disable no-use-before-define */
import React, { Fragment } from "react";
import "./DisclaimerButton.scss";

export default function DisclaimerButton(props) {
  return (
    <Fragment>
      <a href="#" className="float">
        <i className="fa fa-info-circle my-float"></i>
      </a>
      <blockquote className="bubble-agree">
        <p>
          This is just an informational site for eductational purposes only.
          <br />I UNDERSTAND AND AGREE THAT, <br />
          the website or its owners holds no responsibilities in any monetary
          losses or gains using this. The ideas are derived from differen
          sources and all credit goes to them!
        </p>
      </blockquote>
    </Fragment>
  );
}
