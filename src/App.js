import Champions from "./components/Champions";
import ChampionDetail from "./components/ChampionDetail";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { FavouriteProvider } from "./contexts/FavouriteContext";
import FavouriteChampions from "./components/FavouriteChampions";
import UserDetail from "./components/UserDetail";
import LoginModal from "./components/LoginModal";
import { useState } from "react";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLoginModal = () => {
    setShowLogin(!showLogin);
  };

  const onLogin = () => {
    toggleLoginModal();
    setIsLoggedIn(true);
  };

  const onLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <FavouriteProvider>
      <Router>
        <Navbar
          toggleLoginModal={toggleLoginModal}
          onLogout={onLogout}
          isLoggedIn={isLoggedIn}
        />
        <Route
          exact
          path="/"
          render={() => {
            return <Redirect to="/champions" />;
          }}
        />
        <Route path="/champions" exact component={Champions} />
        <Route path="/championDetail/:championId" component={ChampionDetail} />
        <Route path="/favouriteChampions" component={FavouriteChampions} />
        <Route path="/userDetail" component={UserDetail} />
        {showLogin && (
          <LoginModal toggleLoginModal={toggleLoginModal} onLogin={onLogin} />
        )}
      </Router>
    </FavouriteProvider>
  );
}

export default App;
