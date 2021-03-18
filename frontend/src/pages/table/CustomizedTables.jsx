import React                    from 'react';
import { useState, useEffect }  from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes                from 'prop-types';
import Table                    from '@material-ui/core/Table';
import TableBody                from '@material-ui/core/TableBody';
import TableCell                from '@material-ui/core/TableCell';
import TableHead                from '@material-ui/core/TableHead';
import TableFooter              from '@material-ui/core/TableFooter';
import TableSortLabel           from '@material-ui/core/TableSortLabel';
import TablePagination          from '@material-ui/core/TablePagination';
import TableContainer           from '@material-ui/core/TableContainer';
import TableRow                 from '@material-ui/core/TableRow';
import IconButton               from '@material-ui/core/IconButton';
import FirstPageIcon            from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft        from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight       from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon             from '@material-ui/icons/LastPage';
import CssBaseline              from "@material-ui/core/CssBaseline";
import Box                      from "@material-ui/core/Box";
import Container                from "@material-ui/core/Container";
import Card                     from '@material-ui/core/Card';
import CardContent              from '@material-ui/core/CardContent';
import SearchIcon               from '@material-ui/icons/Search';
import                                "../dashboard/Dashboard.css";
import Copyright                from "../../components/Copyright";
import Header                   from "../../components/pages-layout/header/Header";
import Sidebar                  from "../../components/pages-layout/sidebar/Sidebar";
import SearchBar                from "../../components/SearchBar";
import Auth                     from '@aws-amplify/auth';
import Lambda                   from 'aws-sdk/clients/lambda';
import awsconfig                from '../../aws-exports';


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
    background: "#000428",
    background: "-webkit-linear-gradient(to right, #004e92, #000428)",
    background: "linear-gradient(to right, #004e92, #000428)",
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
  card_box: {
    marginBottom: "1em",
  },
  form_group: {
    position: "relative",
    width: "360px",
    "& .MuiFormControl-root": {
      width: "100%",
    },
  },
  search_icon: {
    position: "absolute",
    top: "17px",
    left: "8px",
    zIndex: "1",
  },
}));

const CustomizedTables = () => {
  const url = "https://jsonplaceholder.typicode.com/users";

  const [data, setData] = useState([]);
  const [projectname, setProjectname] = useState("");

  Auth.configure(awsconfig);

  useEffect(() => {
    //const users = axios.get(url).then((json) => setData(json.data));

    Auth.currentCredentials().then(credentials => {
      const lambda = new Lambda({ credentials: Auth.essentialCredentials(credentials), 'region': 'eu-west-2' });
      console.log("lambda" + lambda)
      lambda.invoke({
        FunctionName: 'arn:aws:lambda:eu-west-2:785217600689:function:jira-api-dev-getJiradata',
        Payload: "",
      }, function(err, data) {
        if (err) {
          console.log(err, err.stack); // an error occurred
        }
        else{
          console.log("Lambda:" + data.Payload);
          let payload  = data.Payload;
          setProjectname(JSON.parse(payload).projects[0].name);
          setData(JSON.parse(payload).projects[0].issues)
        }                // successful response
      });
    });
    }, []);

    const classes = useStyles();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const emptyRows = data?
      rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage):0;

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
            <Card className={classes.card_box}>
              <CardContent>
                <div className={classes.form_group}>
                  <SearchIcon className={classes.search_icon} />
                  <SearchBar />
                </div>
              </CardContent>
            </Card>
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
                    <TableCell>Project Name </TableCell>
                    <TableCell>
                      Status
                    <TableSortLabel />
                    </TableCell>
                    <TableCell>
                      Summary
                    <TableSortLabel />
                    </TableCell>
                    <TableCell>Reporter</TableCell>
                    <TableCell>Comments</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {data && (rowsPerPage > 0
                    ? data&&data.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                    : data
                  ).map((row) => (
                    <TableRow className={classes.tableRow} hover key={row.externalId}>
                      <TableCell>{row.externalId}</TableCell>
                      <TableCell>{projectname}</TableCell>
                      <TableCell>{row.status}</TableCell>
                      <TableCell>{row.summary}</TableCell>
                      <TableCell>{row.reporter}</TableCell>
                      <TableCell>{JSON.stringify(row.comments)}</TableCell>
                      {/* <TableCell>{row.comments && row.comments[1]}</TableCell> */}
                    </TableRow>
                  ))}

                  {data && emptyRows > 0 && (
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
                      count={data?data.length:0}
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