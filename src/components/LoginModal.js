import React, { useState, useContext } from "react";
import { Modal, ModalContent } from "../styles/ModalStyle.js";
import { API_BASE_URL } from "../constants";
import { UserContext } from "../contexts/UserContext";

const LoginModal = ({ toggleLoginModal, onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useContext(UserContext);

  const handleEmailChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const loginAndSaveUser = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
    };

    fetch(`${API_BASE_URL}/login`, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Wrong creditentials");
        }
      })
      .then((data) => handleLoggedIn(data))
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLoggedIn = (data) => {
    console.log(data.token);
    setUser(data);
    onLogin();
  };

  return (
    <Modal>
      <ModalContent>
        <button
          style={{ float: "right", backgroundColor: "red", fontWeight: "bold" }}
          onClick={toggleLoginModal}
        >
          X
        </button>
        <form onSubmit={loginAndSaveUser}>
          <h3>Sign in</h3>

          <div>
            <label>Username:</label>
            <br />
            <input
              type="username"
              placeholder="Enter username"
              onChange={handleEmailChange}
            />
          </div>

          <div>
            <br />
            <label>Password</label>
            <br />
            <input
              type="password"
              placeholder="Enter password"
              onChange={handlePasswordChange}
            />
          </div>

          <button style={{ marginTop: "15px" }} type="submit">
            Login
          </button>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;
