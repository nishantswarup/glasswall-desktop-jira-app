import React                       from "react";
import { makeStyles }              from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  copyright: {
    background:
      "linear-gradient(90deg, rgba(12,52,81,1) 35%, rgba(24,100,128,1) 100%)",
    color: "#fff",
    padding: "5px 10px",
    textAlign: "center",
    left: "0px",
    margin: "0 0 0 0",
    position: "fixed",
    bottom: "0",
    width: "100%",
  },
}));

const Copyright = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.copyright}>
        <p>© 2021 copyright. All right reserved</p>
      </div>
    </>
  );
};

export default Copyright;