import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import LandingPage from "./Components/LandingPage/LandingPage";
import "./CSSReset.css";
import "./Components/GameBoard/GameBoard.css";
import "./Components/Dashboard/Dashboard.css";
import "./Components/Keyboard/Keyboard.css";
import "./Components/Setting/Setting.css";
import "./Components/Solve/Solve.css";
import "./Components/LandingPage/LandingPage.css";
import "./Components/Rules/Rules.css";
import "./App.css";

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
