import React          from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField      from "@material-ui/core/TextField";
import { useForm }                 from 'react-hook-form';

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

const PasswordInputFeild = () => {

  const { register } = useForm(); 

  const classes = useStyles();

  return (
    <>
      <TextField
        id="filled-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="filled"
        className={classes.form_controled}
        name="password" defaultValue="Sanchi#4321" ref={register}
      />
    </>
  );
};

export default PasswordInputFeild;
