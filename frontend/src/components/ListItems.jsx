import React                   from "react";
import { NavLink }             from "react-router-dom";
import ListItemIcon            from "@material-ui/core/ListItemIcon";
import DashboardOutlinedIcon   from '@material-ui/icons/DashboardOutlined';
import InfoOutlinedIcon        from '@material-ui/icons/InfoOutlined';
import TableChartIcon          from '@material-ui/icons/TableChart';
import AppsIcon                from '@material-ui/icons/Apps';
import SettingsIcon            from '@material-ui/icons/Settings';
import { makeStyles }          from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  navbar_nav: {
    listStyleType: "none",
    padding: "0",
  },
  nav_item: {
    display: "block",
    padding: "0px 20px",
    borderBottom: "1px solid #eeeeee",
    " :hover": {
      backgroundColor: "#333",
    },
  },
  nav_link: {
    padding: "15px 0px 13px",
    textDecoration: "none",
    fontSize: "14px",
    letterSpacing: ".04em",
    color: "#ffffff",
    display: "block",
    textTransform: "uppercase",
  },
  icon_cover: {
    display: "inline-block",
    position: "relative",
    marginRight: "2px",
    verticalAlign: "middle",
  },
}));

const ListItems = () => {
  const classes = useStyles();

  return (
    <>
      <div>
        <ul className={classes.navbar_nav}>
          <li className={classes.nav_item}>
            <NavLink exact className={classes.nav_link} to="/">
              <ListItemIcon className={classes.icon_cover}>
                <DashboardOutlinedIcon />
              </ListItemIcon>
              Home
            </NavLink>
          </li>
          <li className={classes.nav_item}>
            <NavLink className={classes.nav_link} to="/jira">
              <ListItemIcon className={classes.icon_cover}>
                <AppsIcon />
              </ListItemIcon>
              JIRA
            </NavLink>
          </li>
        
          {/* <li className={classes.nav_item}>
            <NavLink className={classes.nav_link} to="/tables">
              <ListItemIcon className={classes.icon_cover}>
                <TableChartIcon />
              </ListItemIcon>
              User Table
            </NavLink>
          </li> */}
          <li className={classes.nav_item}>
            <NavLink className={classes.nav_link} to="/settings">
              <ListItemIcon className={classes.icon_cover}>
                <SettingsIcon />
              </ListItemIcon>
              Settings
            </NavLink>
          </li>
          <li className={classes.nav_item}>
            <NavLink className={classes.nav_link} to="/about">
              <ListItemIcon className={classes.icon_cover}>
                <InfoOutlinedIcon />
              </ListItemIcon>
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ListItems;