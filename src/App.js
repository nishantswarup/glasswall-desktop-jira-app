import "./App.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
