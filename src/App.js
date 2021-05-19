import "./styles/App.css";
import Champions from "./components/Champions";
import ChampionDetail from "./components/ChampionDetail";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { FavouriteProvider } from "./contexts/FavouriteContext";

function App() {
  return (
    <FavouriteProvider>
    <Router>
      <div>
        <Navbar />
        <Route
          exact
          path="/"
          render={() => {
            return <Redirect to="/champions" />;
          }}
        />
        <Route path="/champions" exact component={Champions} />
        <Route path="/championDetail/:championId" component={ChampionDetail} />
      </div>
    </Router>
    </FavouriteProvider>
  );
}

export default App;
