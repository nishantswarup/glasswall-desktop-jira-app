import { Switch, Route, Redirect } from "react-router-dom";
import                                  "./App.css";
import                                  "../node_modules/font-awesome/css/font-awesome.min.css";
import Dashboard                   from "./pages/dashboard/Dashboard";
import Login                       from "./pages/login/Login";
import ResetPassword               from "./pages/password/ResetPassword";
import About                       from "./pages/about/About";
import CustomizedTables            from "./pages/table/CustomizedTables"

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/resetpassword" component={ResetPassword} />
        <Route exact path="/about" component={About} />
        <Route exact path="/tables" component={CustomizedTables} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
