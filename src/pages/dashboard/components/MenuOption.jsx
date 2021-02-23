import React             from 'react';
import Button            from '@material-ui/core/Button';
import Menu              from '@material-ui/core/Menu';
import MenuItem          from '@material-ui/core/MenuItem';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useHistory }    from "react-router-dom";
import { makeStyles }    from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
user_icon: {
  color: "#fff",  
}

}));   

export default function MenuOption() {
  const classes = useStyles();

  const history = useHistory();
  const navigateTo = () => history.push("/login"); //eg.history.push('/login');

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={navigateTo}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
