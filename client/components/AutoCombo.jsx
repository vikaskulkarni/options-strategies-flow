/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function AutoCombo(props) {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={dropdownValues}
      getOptionLabel={(option) => option.title}
      style={{}}
      renderInput={(params) => (
        <TextField {...params} label={props.label} variant="outlined" />
      )}
    />
  );
}

const dropdownValues = [

];
