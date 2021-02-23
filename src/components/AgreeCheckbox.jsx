import React              from "react";
import { makeStyles }     from "@material-ui/core/styles";
import FormControlLabel   from "@material-ui/core/FormControlLabel";
import Checkbox           from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  checkinput: {
    "& svg": {
      fill: "#fff",
    },
  },
}));

const AgreeCheckbox = () => {
  const classes = useStyles();

  return (
    <>
      <FormControlLabel
        className={classes.checkinput}
        control={<Checkbox value="remember" color="primary" />}
        label="Agree terms of use"
      />
    </>
  );
};

export default AgreeCheckbox;
