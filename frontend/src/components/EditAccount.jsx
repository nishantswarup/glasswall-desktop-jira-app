import React, { useState, useEffect } from "react";
import Button                         from "@material-ui/core/Button";
import { makeStyles }                 from "@material-ui/core/styles";
import Grid                           from "@material-ui/core/Grid";
import TextField                      from "@material-ui/core/TextField";


const useStyles = makeStyles((theme) => ({
  form_controled: {
    "& .MuiFormLabel-root": {
      color: "#000",
      width: "100%",
      background: "transparent",
    },
    "& .MuiFilledInput-root": {
      background: "transparent",
      width: "100%",
    },
    "& .MuiFilledInput-input": {
      color: "#000",
      background: "transparent",
    },
  },
  btnsave: {
    position: "relative",
    float: "right",
    marginTop: "20px",
  },
  edit_accont: {
    position: "relative",
    "& h3": {
      position: "relative",
      borderBottom: "1px solid #b2b2b2",
      padding: "8px 20px 20px 20px",
      margin: "0 -16px 8px -16px",
      fontSize: "19px",
    },
  },
}));

const EditAccount = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.edit_accont}>
        <h3>Edit Account Details</h3>
        <form autoComplete="Off">
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                id="filled-firstname-input"
                label="First Name"
                type="text"
                variant="filled"
                autocomplete="new-password"
                className={classes.form_controled}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="filled-lastname-input"
                label="Last Name"
                type="text"
                variant="filled"
                autocomplete="new-password"
                className={classes.form_controled}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                id="filled-email-input"
                label="Email Addrees"
                type="text"
                variant="filled"
                autocomplete="new-password"
                className={classes.form_controled}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="filled-phonenumber-input"
                label="Phone Number"
                type="number"
                variant="filled"
                autocomplete="new-password"
                className={classes.form_controled}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                id="filled-country-input"
                label="Country"
                type="text"
                variant="filled"
                autocomplete="new-password"
                className={classes.form_controled}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="filled-state-input"
                label="State"
                type="text"
                variant="filled"
                autocomplete="new-password"
                className={classes.form_controled}
              />
            </Grid>
          </Grid>
          <Button
            className={classes.btnsave}
            variant="contained"
            color="primary"
          >
            Save Details
          </Button>
        </form>
      </div>
    </>
  );
};

export default EditAccount;