import Champions from "./components/Champions";
import ChampionDetail from "./components/ChampionDetail";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { FavouriteProvider } from "./contexts/FavouriteContext";
import FavouriteChampions from "./components/FavouriteChampions";
import UserDetail from "./components/UserDetail";
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";
import { useState } from "react";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLoginModal = () => {
    setShowLogin(!showLogin);
  };

  const toggleRegisterModal = () => {
    setShowRegister(!showRegister);
  };

  const onLogin = () => {
    toggleLoginModal();
    setIsLoggedIn(true);
  };

  const onLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem("user");
  };

  return (
    <FavouriteProvider>
      <Router>
        <Navbar
          toggleLoginModal={toggleLoginModal}
          toggleRegisterModal={toggleRegisterModal}
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
        {showRegister && (
          <RegisterModal toggleRegisterModal={toggleRegisterModal} />
        )}
      </Router>
    </FavouriteProvider>
  );
}

export default App;
