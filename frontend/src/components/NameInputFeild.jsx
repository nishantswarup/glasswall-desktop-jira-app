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

const NameInputFeild = () => {

  const { register } = useForm(); 

  const classes = useStyles();

  return (
    <>
      <TextField
        id="filled-helperText"
        label="default-administrator"
        variant="filled"
        className={classes.form_controled}
        name="username" defaultValue="raj.mb.coderx@gmail.com" ref={register}
      />
    </>
  );
};

export default NameInputFeild;
