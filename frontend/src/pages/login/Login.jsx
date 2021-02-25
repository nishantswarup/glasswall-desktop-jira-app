import React, { useState, useEffect } from "react";
import { useHistory }              from "react-router-dom";
import PersonOutlineOutlinedIcon   from "@material-ui/icons/PersonOutlineOutlined";
import VpnKeyOutlinedIcon          from "@material-ui/icons/VpnKeyOutlined";
import Button                      from "@material-ui/core/Button";
import Link                        from "@material-ui/core/Link";
import logo                        from "../../images/logo.6c8e5727.svg";
import PasswordInputFeild          from "../../components/PasswordInputFeild";
import NameInputFeild              from "../../components/NameInputFeild";
import { makeStyles }              from "@material-ui/core/styles";
import { Auth }                    from 'aws-amplify';
import { useForm }                 from 'react-hook-form';

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
    margin: "0px auto 0px",
    textAlign: "center",
    background:
      "linear-gradient(90deg, rgba(12,52,81,1) 35%, rgba(24,100,128,1) 100%)",
    display: "none",
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
    borderRadius: "0px",
    width: "100%",
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
        borderBottom: "none",
      },
    },
  },

  svg_icon: {
    position: "absolute",
    padding: "0 0",
    top: "9px",
    left: "10px",
    fill: "#858585 !important",
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
    minHeight: "94vh",
  },
  form_right: {
    float: "right",
    padding: "0px",
    width: "50%",
    background: "#fff",
    minHeight: "94vh",
  },
  clearfix: {
    clear: "both",
  },
  form_inner_l: {
    padding: "12rem 10rem",
    color: "#fff",
    position: "relative",
    "& p": {
      lineHeight: "24px",
    },
  },

  button: {
    marginTop: "10px",
    display: "block",
    margin: theme.spacing(3, 0, 0),
    width: "100%",
    background:
      "linear-gradient(90deg, rgba(12,52,81,1) 35%, rgba(24,100,128,1) 100%)",
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
    marginTop: "0",
  },
  footer: {
    background: "#0c3451",
    color: "#fff",
    padding: "10px 10px",
    textAlign: "center",
    margin: "0 0 0 0",
    position: "fixed",
    bottom: "0",
    width: "100%",
    height: "6vh",
  },
  companyLogos: {
    width: "100px",
    position: "absolute",
    top: "50px",
    margin: "0 0 0px",
    right: "-75px",
    border: "8px solid #fff",
    boxShadow: "2px 2px 4px #333",
    padding: "40px 20px",
    borderRadius: "100px",
    background: "#0c3451",
  },
  form_control: {
    width: "100%",
    height: "40px",
    textIndent: "40px",
    borderRadius: "6px",
    border: "1px solid #bbb",
    fontSize: "14px",
  },
  error: {
    color: "red",
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
                    <input className={classes.form_control} placeHolder="username" name="username" ref={register({ required: true })}/>
                    <div className={classes.error}>{errors.username && 'Username is required.'}</div>
                  </div>
                  <div className={classes.form_group}>
                    <VpnKeyOutlinedIcon className={classes.svg_icon} />
                    <input className={classes.form_control} placeHolder="password" name="password"  ref={register({ required: true })}/>
                    <div className={classes.error}>{errors.password && 'password is required.'}</div>
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
