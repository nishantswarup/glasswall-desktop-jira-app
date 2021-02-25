import React, { useState, useEffect } from "react";
import Button            from '@material-ui/core/Button';
import Menu              from '@material-ui/core/Menu';
import MenuItem          from '@material-ui/core/MenuItem';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ExitToAppIcon     from '@material-ui/icons/ExitToApp';
import { useHistory }    from "react-router-dom";
import { makeStyles }    from "@material-ui/core/styles";
import { Auth }          from 'aws-amplify';

const useStyles = makeStyles((theme) => ({
user_icon: {
  color: "#fff",  
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
"& :hover":{
  background: "#103d5c",
}
},
menu_class2: {
  "& :hover":{
    background: "#103d5c",
  }
  },

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
        <AccountCircleIcon className={classes.user_icon}/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.menu_ul}
      >
        <MenuItem className={classes.menu_class1} onClick={handleClose}>< PersonOutlineIcon className={classes.menu_icon}/> { (user ? user.attributes.email.split("@")[0]: "")}</MenuItem>
        <MenuItem className={classes.menu_class2} onClick={handleLogout}><ExitToAppIcon className={classes.menu_icon}/> Logout</MenuItem>
      </Menu>
    </div>
  );
}
