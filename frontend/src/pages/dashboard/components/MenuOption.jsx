import React, { useState, useEffect } from "react";
import Button                         from '@material-ui/core/Button';
import Menu                           from '@material-ui/core/Menu';
import MenuItem                       from '@material-ui/core/MenuItem';
import profile                        from "../../../images/faces/male/1.jpg";
import PersonOutlineIcon              from '@material-ui/icons/PersonOutline';
import KeyboardArrowDownIcon          from '@material-ui/icons/KeyboardArrowDown';
import ExitToAppIcon                  from '@material-ui/icons/ExitToApp';
import { useHistory }                 from "react-router-dom";
import { makeStyles }                 from "@material-ui/core/styles";
import { Auth }                       from 'aws-amplify';

const useStyles = makeStyles((theme) => ({
  user_icon: {
    color: "#253053",
  },
  menu_ul: {
    padding: "0",
  },

  menu_icon: {
    marginRight: "9px",
    fontSize: "20px",
  },
  menu_class1: {
    borderBottom: "1px solid #13486e",
    color: "#fff",
    "& :hover": {
      background: "#103d5c",
    },
  },
  menu_class2: {
    color: "#fff",
    "& :hover": {
      background: "#103d5c",
    },
  },
  profile_name: {
    color: "#253053",
    display: "block",
    textTransform: "none",
    padding: "0 0 0 10px",
    textAlign: "left",
    fontWeight: "600",
  },
  email: {
    color: "#555",
    display: "block",
    textTransform: "none",
    fontSize: "12px",
    lineHeight: "12px",
    fontWeight: "400",
  },
  profile_heading: {
    color: "#fff",
    padding: "0 18px",
    margin: "10px 0 10px 0px",
    fontSize: "17px",
  },
  profile_img: {
    width: "36px",
    borderRadius: "6rem!important",
    height: "36px",
  },
  menuBox: {
    textAlign: "center",
    margin: "1px 10px 10px 10px",
    padding: "20px 10px",
    background: "#2e5c8f4a",
    borderRadius: "6px",
    "& :focus": {
      outline: "0",
    },
  },
  profile_name1: {
    textAlign: "center",
    color: "#fff",
  },
}));

export default function MenuOption() {
  const classes = useStyles();
  const history = useHistory();
  const navigateToLogin = () => history.push("/login"); //eg.history.push('/login');

  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    currentUser();
  }, []);

  const currentUser = async () => {
    let cUser = await Auth.currentAuthenticatedUser();
    setUser(cUser);
    console.log("cUser" + cUser);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      navigateToLogin();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <img src={profile} alt="Profile" className={classes.profile_img} />
        <div className={classes.profile_name}>
        {user ? user.attributes.email.split("@")[0] : ""} <div className={classes.email}> {user ? user.attributes.email: ""}</div>
        </div>
        <KeyboardArrowDownIcon className={classes.arrow_down} />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.menu_ul}
      >
        <div className={classes.menuBox}>
          <img src={profile} alt="Profile" className={classes.profile_img} />
          <div className={classes.profile_name1}>
            {" "}
            <div className={classes.email1}> {user ? user.attributes.email : ""}</div>
          </div>
        </div>
        <MenuItem className={classes.menu_class1} onClick={handleClose}>
          <PersonOutlineIcon className={classes.menu_icon} />{" "}
          {user ? user.attributes.email.split("@")[0] : ""}
        </MenuItem>
        <MenuItem className={classes.menu_class2} onClick={handleLogout}>
          <ExitToAppIcon className={classes.menu_icon} /> Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
