import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import "./SuggestionBox.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SuggestionBox(props) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [inProgress, setInProgress] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setInProgress(true);
    setShowSuccess(false);
    setShowError(false);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        createdAt: new Date(),
        fromId: name,
        "flow-id": uuidv4(),
        suggestion: message,
      }),
    };
    fetch(
      "https://gd7sh5ppj3.execute-api.us-east-1.amazonaws.com/prod/",
      requestOptions
    )
      .then((response) => response.json())
      .then((responseJson) => {
        setInProgress(false);
        setShowSuccess(true);
      })
      .catch((error) => {
        console.error(error);
        setInProgress(false);
        setShowSuccess(false);
      });
  };

  return (
    <div className="suggestion-form">
      <form onSubmit={handleSubmit}>
        <div>
          <h5>
            Comments and Feedback form
            <div
              onClick={props.onClick}
              style={{ float: "right", cursor: "pointer", color: "#ae0403" }}
            >
              x
            </div>
          </h5>
        </div>
        <div style={{ margin: "30px" }}>
          <TextField
            id="name"
            label="Name (Optional)"
            value={name}
            onChange={(evt) => setName(evt.target.value)}
            style={{ width: "100%", marginBottom: "20px" }}
          />
          <br />

          <TextareaAutosize
            id="comments_feedback"
            placeholder="Enter your Comments here..."
            value={message}
            onChange={(evt) => setMessage(evt.target.value)}
            style={{ width: "100%", height: "100px", resize: "none" }}
            required
          ></TextareaAutosize>
        </div>
        <div style={{ margin: "30px" }}>
          Contact: vk31881@gmail.com,{" "}
          <a href="https://github.com/vikaskulkarni">My GIT</a>
        </div>
        <button>
          {!inProgress && "Send"}
          {inProgress && "Sending"}
        </button>
        {showSuccess && (
          <Alert style={{ margin: "20px 20px 0 20px" }} severity="success">
            Thanks for your feedback!
          </Alert>
        )}
        {showError && (
          <Alert style={{ margin: "20px 20px 0 20px" }} severity="error">
            Sorry, Something went wrong!
          </Alert>
        )}
      </form>
    </div>
  );
}
