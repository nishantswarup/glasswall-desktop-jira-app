import React                      from 'react';
import {useState, useEffect}      from 'react'
import axios                      from 'axios'
import { makeStyles, useTheme }   from '@material-ui/core/styles';
import PropTypes                  from 'prop-types';
import Table                      from '@material-ui/core/Table';
import TableBody                  from '@material-ui/core/TableBody';
import TableCell                  from '@material-ui/core/TableCell';
import TableHead                  from '@material-ui/core/TableHead';
import TableFooter                from '@material-ui/core/TableFooter';
import TableSortLabel             from '@material-ui/core/TableSortLabel';
import TablePagination            from '@material-ui/core/TablePagination';
import TableContainer             from '@material-ui/core/TableContainer';
import TableRow                   from '@material-ui/core/TableRow';
import IconButton                 from '@material-ui/core/IconButton';
import FirstPageIcon              from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft          from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight         from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon               from '@material-ui/icons/LastPage';
import CssBaseline                from "@material-ui/core/CssBaseline";
import Box                        from "@material-ui/core/Box";
import Container                  from "@material-ui/core/Container";
import                                 "../dashboard/Dashboard.css";
import Copyright                  from "../../components/Copyright";
import Header                     from "../../components/pages-layout/header/Header";
import Sidebar                    from "../../components/pages-layout/sidebar/Sidebar";



const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

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
    background: "#f7f7f7",
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
  theader: {
    background: "#0d3552",
    "& tr": {
      "& th": {
        color: "#fff",
        fontWeight: "600",
      },
    },
  },
  table: {
    marginBottom: "25px",
    boxShadow: "2px 1px 9px #ccc",
    background: "#fff",
  },
}));

const CustomizedTables = () => {
  const url = "https://jsonplaceholder.typicode.com/users";

  const [data, setData] = useState([]);

  useEffect(() => {
    const users = axios.get(url).then((json) => setData(json.data));
  }, []);

  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Sidebar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <TableContainer>
            <Table
              className={classes.table}
              aria-label="custom pagination table"
            >
              <TableHead className={classes.theader}>
                <TableRow>
                  <TableCell>
                    ID
                    <TableSortLabel />
                  </TableCell>
                  <TableCell>Name </TableCell>
                  <TableCell>
                    Username
                    <TableSortLabel />
                  </TableCell>
                  <TableCell>
                    Email
                    <TableSortLabel />
                  </TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Zip Code</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? data.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : data
                ).map((row) => (
                  <TableRow className={classes.tableRow} hover key={row.name}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.username}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.address.city}</TableCell>
                    <TableCell>{row.address.zipcode}</TableCell>
                  </TableRow>
                ))}

                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    className={classes.paginationdiv}
                    rowsPerPageOptions={[
                      5,
                      10,
                      25,
                      { label: "All", value: -1 },
                    ]}
                    colSpan={6}
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: { "aria-label": "rows per page" },
                      native: true,
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
};

export default CustomizedTables;