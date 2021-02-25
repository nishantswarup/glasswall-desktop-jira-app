import React          from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField      from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  form_controled: {
    width: "100%",
    paddingLeft: "40px",
    color: "#000",
  },
  form_controled: {
    "& .MuiFormLabel-root": {
      color: "#000",
      left: "30px !important",
      width: "100%",
    },
    "& .MuiFilledInput-input": {
      color: "#000",
      paddingLeft: "40px",
    },
  },
}));

const EmailInputFeild = () => {
  const classes = useStyles();

  return (
    <>
      <TextField
        id="filled-helperText"
        label="Enter Email Address"
        variant="filled"
        className={classes.form_controled}
      />
    </>
  );
};

export default EmailInputFeild;
