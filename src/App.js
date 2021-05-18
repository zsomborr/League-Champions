import "./styles/App.css";
import Champions from "./components/Champions";
import ChampionDetail from "./components/ChampionDetail";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path="/" exact component={Champions} />
        <Route path="/championDetail/:championId" component={ChampionDetail} />
      </div>
    </Router>
  );
}

export default App;
