import React                      from "react";
import clsx                       from "clsx";
import { makeStyles }             from "@material-ui/core/styles";
import CssBaseline                from "@material-ui/core/CssBaseline";
import Box                        from "@material-ui/core/Box";
import Container                  from "@material-ui/core/Container";
import                                 "../dashboard/Dashboard.css";
import Copyright                  from "../../components/Copyright";
import Sidebar                    from "../../components/pages-layout/sidebar/Sidebar";
import AppBar                     from "@material-ui/core/AppBar";
import Toolbar                    from "@material-ui/core/Toolbar";
import IconButton                 from "@material-ui/core/IconButton";
import MenuIcon                   from "@material-ui/icons/Menu";
import Typography                 from "@material-ui/core/Typography";
import MenuOption                 from "../dashboard/components/MenuOption";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
}));

export default function Jira() {
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
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          ></Typography>

          <MenuOption />
        </Toolbar>
      </AppBar>
      <Sidebar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <h2>JIRA</h2>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
