import React                      from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
   Grid, TableBody, TableCell, TableHead,
  TableRow, TableSortLabel, Table
}                                 from '@material-ui/core';
import { green, pink, orange }    from '@material-ui/core/colors';
import CssBaseline                from "@material-ui/core/CssBaseline";
import Box                        from "@material-ui/core/Box";
import Container                  from "@material-ui/core/Container";
import                                 "../dashboard/Dashboard.css";
import Copyright                  from "../../components/Copyright";
import Header                     from "../../components/pages-layout/header/Header";
import Sidebar                    from "../../components/pages-layout/sidebar/Sidebar";


const drawerWidth = 240;

const styles = (theme) => ({
  table: {
    minWidth: 980,
    [theme.breakpoints.down("sm")]: {
      width: "1000px",
      minWidth: "initial",
    },
    [theme.breakpoints.down("xs")]: {
      width: "700px",
      minWidth: "initial",
    },
    overflow: "auto",
  },
  nameContainer: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: "16px",
  },
  actions: {
    justifyContent: "flex-end",
  },
  pink: {
    cursor: "pointer",
    marginLeft: "10px",
    color: pink[500],
    fontSize: "18px",
  },
  locked: {
    cursor: "pointer",
    marginLeft: "10px",
    color: "#adadad",
    fontSize: "18px",
  },
  lockopen: {
    color: orange[500],
    cursor: "pointer",
    marginLeft: "10px",
    fontSize: "18px",
  },

  green: {
    cursor: "pointer !important",
    color: green[500],
    marginRight: "5px",
    fontSize: "18px",
  },
  TableCell: {
    $lastChild: {
      width: "100%",
    },
  },
  tableRow: {
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.07)!important",
    },
    gridTableContainer: {
      width: "100%",
      overflow: "auto",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  table: {
    minWidth: 700,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

const divStyle = {
  paddingBottom: "0px",
};

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    color: "#fff",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(id, issue, assignee, description) {
  return { id, issue, assignee, description };
}

const rows = [
  createData(1, "Not Working", "Abhishek", "Will fix it asap."),
  createData(2, "Not Opening", "Anish", "Will fix it asap."),
  createData(3, "Auto Closing", "Abhishek", "Will fix it asap."),
  createData(4, "Not Working", "Amit", "Will fix it asap."),
  createData(5, "Not Working", "Sanchit", "Will fix it asap."),
];


export default function CustomizedTables() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Sidebar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  Jira ID
                  <TableSortLabel />
                </TableCell>
                <TableCell>Issue </TableCell>
                <TableCell>
                  Assignee
                  <TableSortLabel />
                </TableCell>
                <TableCell>
                  Modified At
                  <TableSortLabel />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow className={classes.tableRow} hover key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.assignee}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.issue}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}