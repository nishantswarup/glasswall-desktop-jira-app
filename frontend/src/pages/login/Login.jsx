import React, { useState, useEffect } from "react";
import { useHistory }                 from "react-router-dom";
import PersonOutlineOutlinedIcon      from "@material-ui/icons/PersonOutlineOutlined";
import VpnKeyOutlinedIcon             from "@material-ui/icons/VpnKeyOutlined";
import Button                         from "@material-ui/core/Button";
import Link                           from "@material-ui/core/Link";
import logo                           from "../../images/logo.6c8e5727.svg";
import { makeStyles }                 from "@material-ui/core/styles";
import { Auth }                       from 'aws-amplify';
import { useForm }                    from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
  main_wrapper: {
    color: "#000",
    background: "#f2f0f0",
    minHeight: "100vh",
    position: "relative",
  },
  button: {
    backgroundColor: theme.palette.primary || "#dadada",
  },
  logo: {
    position: "relative",
    margin: "0px auto 70px",
    textAlign: "center",
    background:
      "linear-gradient(90deg, rgba(12,52,81,1) 35%, rgba(24,100,128,1) 100%)",
  },
  companyLogo: {
    width: "170px",
    display: "block",
    margin: "0 auto 20px",
  },
  paper: {
    marginTop: theme.spacing(0),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form_box: {
    padding: "0px",
    boxShadow: "0px 0px 9px 4px rgb(255 255 255 / 20%)",
    borderRadius: "6px",
    width: "860px",
    background: "#fff",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },

  form_group: {
    position: "relative",
    marginBottom: "10px",
    "& .MuiFormControl-root": {
      width: "100%",
      marginBottom: "10px",
      "& .MuiInputBase-root": {
        background: "#fff",
        border: "1px solid #acacac",
      }
    },
  },

  svg_icon: {
    position: "absolute",
    padding: "0 0",
    top: "15px",
    left: "10px",
    fill: "#000 !important",
    zIndex: "11",
  },

  forgottenPassword: {
    color: "#1a919a",
    fontWeight: "600",
    textAlign: "center",
    display: "block",
    marginBottom: "12px",
    fontSize: "14px",
    position: "relative",
    float: "right",
    textDecoration: "none",
    cursor: "pointer",
  },

  form_left: {
    float: "left",
    background:
      "linear-gradient(90deg, rgba(12,52,81,1) 35%, rgba(24,100,128,1) 100%)",
    padding: "0px",
    width: "50%",
    minHeight: "55vh",
  },
  form_right: {
    float: "right",
    padding: "0px",
    width: "50%",
    background: "#fff",
    minHeight: "55vh",
  },
  clearfix: {
    clear: "both",
  },
  form_inner_l: {
    padding: "60px 50px",
    color: "#fff",
    "& p": {
      lineHeight: "24px",
    },
  },

  button: {
    marginTop: "10px",
    display: "block",
    margin: theme.spacing(3, 0, 0),
    width: "100%",
    background: "linear-gradient(90deg, rgba(12,52,81,1) 35%, rgba(24,100,128,1) 100%)",
    color: "#ffffff",
  },
  form_heading: {
    color: "#000",
    fontSize: "27px",
    position: "relative",
    margin: "0 0 0 0",
    top: "-25px",
  },
  form_heading_left: {
    color: "#fff",
    fontSize: "27px",
  },
  footer: {
    background: "linear-gradient(90deg, rgba(12,52,81,1) 35%, rgba(24,100,128,1) 100%)",
    color:"#fff",
    padding: "10px 10px",
    textAlign: "center",
    margin: "0 0 0 0", 
    position: "fixed",
    bottom: "0",
    width: "100%",

  },
  companyLogos: {
    width: "100px",
    position: "relative",
    top:"-20px",
    margin: "0 0 -40px",
  },
}));

const Login = () => {
  const classes = useStyles();
  const [loading , setLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm(); // initialize the hook

  const history = useHistory();
  const navigateToDashboard = () => history.push("/dashboard");
  const navigatesTo = () => history.push("/resetpassword");

  useEffect(() => {
    currentUser()
  },[]);


  const currentUser=async()=>{
    let user = await Auth.currentAuthenticatedUser();
    if(user){
      navigateToDashboard();
    }
  }

  

  
  const onSubmit = (values) => {
    let { username, password } = values;

    setLoading(true);

    Auth.signIn(username, password)
      .then(user => {
        console.log(user)
        if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
          Auth.completeNewPassword(
              user,               // the Cognito User Object
              password,       // the new password
          ).then(user => {
              // at this time the user is logged in if no MFA required
              console.log(user);
              navigateToDashboard();
          }).catch(e => {
            console.log(e);
          });
      } else {
        navigateToDashboard();
      }
       
      })
      .catch(err => {
        console.log(err);

        setLoading(false);
      });
  };




  return (
    <>
      <div className={classes.main_wrapper}>
        <div className={classes.logo}>
          <img src={logo} alt="Logo" className={classes.companyLogo} />
        </div>
        <div className={classes.paper}>
          <div className={classes.form_box}>
            <div className={classes.form_left}>
              <div className={classes.form_inner_l}>
              <img src={logo} alt="Logo" className={classes.companyLogos} />
                <h3 className={classes.form_heading_left}>
                  Glasswall Desktop Jira
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
              </div>
            </div>
            <div className={classes.form_right}>
              <div className={classes.form_inner_l}>
                <h3 className={classes.form_heading}>Login Account</h3>
                <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                  <div className={classes.form_group}>
                    <PersonOutlineOutlinedIcon className={classes.svg_icon} />
                    <input name="username" defaultValue="raj.mb.coderx@gmail.com" ref={register}/>
                    {errors.username && 'Username is required.'}
                  </div>
                  <div className={classes.form_group}>
                    <VpnKeyOutlinedIcon className={classes.svg_icon} />
                    <input name="password" defaultValue="Sanchi#4321" ref={register}/>
                    {errors.password && 'password is required.'}
                  </div>
                  <Link
                    to="/resetpassword"
                    onClick={navigatesTo}
                    className={classes.forgottenPassword}
                  >
                    Forgotten Password
                  </Link>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    type="submit"
                    value="Log In"
                  >
                    Log In
                  </Button>
                </form>
              </div>
            </div>
            <div className={classes.clearfix}></div>
          </div>
        </div>
        <div className={classes.footer}>
          <p>© 2021 copyright. All right reserved</p>
        </div>
      </div>
    </>
  );
};

export default Login;
