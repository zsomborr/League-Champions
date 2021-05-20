import Champions from "./components/Champions";
import ChampionDetail from "./components/ChampionDetail";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { FavouriteProvider } from "./contexts/FavouriteContext";
import FavouriteChampions from "./components/FavouriteChampions";

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
          <Route
            path="/championDetail/:championId"
            component={ChampionDetail}
          />
          <Route path="/favouriteChampions" component={FavouriteChampions} />
        </div>
      </Router>
    </FavouriteProvider>
  );
}

export default App;
