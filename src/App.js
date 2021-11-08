import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Components/MainComponents/Dashboard";
import LandingPage from "./Components/Pages/LandingPage";
import "./CSS/CSSReset.css";
import "./CSS/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/wheeloffortune" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
