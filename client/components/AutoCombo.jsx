/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function AutoCombo(props) {
  return (
    <Autocomplete
      id={props.instrumentType}
      options={props.strategyValues}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField {...params} label={props.label} variant="outlined" />
      )}
      onChange={(event, newValue) => {
        props.showStrategy(newValue.id, props.instrumentType);
      }}
    />
  );
}
