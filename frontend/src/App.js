import { Switch, Route, Redirect } from "react-router-dom";
import {Amplify, Auth}             from "aws-amplify";
import                                  "./App.css";
import                                  "../node_modules/font-awesome/css/font-awesome.min.css";
import Dashboard                   from "./pages/dashboard/Dashboard";
import Login                       from "./pages/login/Login";
import ResetPassword               from "./pages/password/ResetPassword";
import About                       from "./pages/about/About";
import CustomizedTables            from "./pages/table/CustomizedTables";
import Settings                    from "./pages/settings/Settings";
import Jira                        from "./pages/jira/Jira";
import awsconfig                   from './aws-exports';
import MyAccount                   from "./pages/account/MyAccount"

const App = () => {
  
  console.log(awsconfig);
  Amplify.configure(awsconfig);
  Auth.configure(awsconfig);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={CustomizedTables} />
        <Route exact path="/resetpassword" component={ResetPassword} />
        <Route exact path="/about" component={About} />
        {/* <Route exact path="/jira" component={Jira} /> */}
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/jira" component={CustomizedTables} />
        <Route exact path="/my-account" component={MyAccount} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
