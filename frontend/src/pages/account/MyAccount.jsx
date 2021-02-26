import React                      from "react";
import clsx                       from "clsx";
import { Link }                   from "react-router-dom";
import { makeStyles }             from "@material-ui/core/styles";
import CssBaseline                from "@material-ui/core/CssBaseline";
import Box                        from "@material-ui/core/Box";
import Container                  from "@material-ui/core/Container";
import AppBar                     from "@material-ui/core/AppBar";
import Toolbar                    from "@material-ui/core/Toolbar";
import IconButton                 from "@material-ui/core/IconButton";
import MenuIcon                   from "@material-ui/icons/Menu";
import Typography                 from "@material-ui/core/Typography";
import Card                       from '@material-ui/core/Card';
import CardContent                from '@material-ui/core/CardContent';
import Grid                       from '@material-ui/core/Grid';
import Divider                    from '@material-ui/core/Divider';
import MailOutlineIcon            from '@material-ui/icons/MailOutline';
import PhoneIphoneIcon            from '@material-ui/icons/PhoneIphone';
import LocationOnOutlinedIcon     from '@material-ui/icons/LocationOnOutlined';
import AddAPhotoOutlinedIcon      from '@material-ui/icons/AddAPhotoOutlined';
import                                 "../dashboard/Dashboard.css";
import Copyright                  from "../../components/Copyright";
import Sidebar                    from "../../components/pages-layout/sidebar/Sidebar";
import MenuOption                 from "../dashboard/components/MenuOption";
import profile                    from "../../images/faces/male/1-a.jpg";
import EditAccount                from "../../components/EditAccount";


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
  card_content: {
    width: "100%",
  },
  profile_box: {
    textAlign: "center",
    position: "relative",
  },
  profile_name: {
    color: "#253053",
    display: "block",
    textTransform: "none",
    padding: "0 0 20px 0px",
    fontWeight: "600",
    fontSize: "18px",
  },
  info_ul: {
    color: "#0c4273",
    display: "block",
    textTransform: "none",
    fontSize: "14px",
    lineHeight: "24px",
    fontWeight: "400",
    marginBottom: "20px",
    "& svg": {
      marginRight: "10px",
      verticalAlign: "middle",
      float: "left",
      marginBottom: "5px",
      fill: "#004a8c",
      background: "#fff",
      borderRadius: "100px",
      border: "2px solid #004a8c",
      padding: "5px 5px",
      fontSize: "28px",
    },
  },
  profile_img: {
    width: "100px",
    borderRadius: "10rem !important",
    height: "100px",
    marginBottom: "10px",
  },
  profile_box_ul: {
    padding: "15px 0 0",
    marginBottom: "-20px",
  },
  image_box: {
    position: "relative",
  },
  upload_link: {
    display: "block",
    "& svg": {
      position: "absolute",
      zIndex: "1",
      right: "80px",
      bottom: "19px",
      background: "#ffffff",
      padding: "4px",
      fontSize: "27px",
      borderRadius: "100px",
    },
  },
}));

export default function MyAccount() {
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
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Card className={classes.root}>
                <CardContent className={classes.card_content}>
                  <div className={classes.profile_box}>
                    <div className={classes.image_box}>
                      <Link
                        className={classes.upload_link}
                        title="Upload Picture"
                      >
                        <AddAPhotoOutlinedIcon />
                        <img
                          src={profile}
                          alt="Profile"
                          className={classes.profile_img}
                        />
                      </Link>
                    </div>
                    <div className={classes.profile_name}>Raj Kumar</div>
                  </div>
                  <Divider />
                  <div className={classes.profile_box_ul}>
                    <div className={classes.info_ul}>
                      {" "}
                      <MailOutlineIcon /> raj.mb.coderx@gmail.com
                    </div>
                    <div className={classes.info_ul}>
                      {" "}
                      <PhoneIphoneIcon /> +90000000000
                    </div>
                    <div className={classes.info_ul}>
                      {" "}
                      <LocationOnOutlinedIcon />
                      Noida One IT Park Sector 62, Noida, India.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={9}>
              <Card className={classes.root}>
                <CardContent>
                  <EditAccount />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
