import React, { useState, useEffect } from "react";
import Button                         from '@material-ui/core/Button';
import Menu                           from '@material-ui/core/Menu';
import MenuItem                       from '@material-ui/core/MenuItem';
import AccountCircleIcon              from '@material-ui/icons/AccountCircle';
import { useHistory }                 from "react-router-dom";
import { makeStyles }                 from "@material-ui/core/styles";
import { Auth }                       from 'aws-amplify';

const useStyles = makeStyles((theme) => ({
  user_icon: {
    color: "#fff",
  }

}));

export default function MenuOption() {
  const classes = useStyles();

  const history = useHistory();
  const navigateToLogin = () => history.push("/login"); //eg.history.push('/login');

  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    currentUser()
  },[]);


  const currentUser=async()=>{
    let cUser = await Auth.currentAuthenticatedUser();
    setUser(cUser);
    console.log("cUser" + cUser)
  }

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
      console.log('error signing out: ', error);
    }
  }

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <AccountCircleIcon className={classes.user_icon} />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>{ (user ? user.attributes.email.split("@")[0]: "")}</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
