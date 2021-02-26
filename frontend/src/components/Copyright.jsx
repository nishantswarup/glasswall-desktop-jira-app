import React                       from "react";
import { makeStyles }              from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  copyright: {
    background: "#ffffff",
    color: "#555",
    padding: "5px 10px",
    textAlign: "center",
    left: "0px",
    margin: "0 0 0 0",
    position: "fixed",
    bottom: "0",
    width: "100%",
  },
  red_heart: {
    color: "#fe3030",
  },
  company_link: {
    textDecoration: "none",
    color: "#000",
  },
}));

const Copyright = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.copyright}>
        <p>© Copyright 2021 - Glasswall Solutions Ltd. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Copyright;