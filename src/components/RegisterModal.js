import { Modal, ModalContent } from "../styles/ModalStyle.js";
import { useState } from "react";
import { API_BASE_URL } from "../constants";

const RegisterModal = ({ toggleRegisterModal }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);

  const handleEmailChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onRegister = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
    };
    fetch(`${API_BASE_URL}/auth/register`, requestOptions)
      .then((response) => response.json())
      .then((data) => (data ? toggleRegisterModal() : setInvalid(true)));
  };

  return (
    <Modal>
      <ModalContent>
        <button
          style={{ float: "right", backgroundColor: "red", fontWeight: "bold" }}
          onClick={toggleRegisterModal}
        >
          X
        </button>
        <form onSubmit={onRegister}>
          <h3>Register</h3>

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
          {invalid && (
            <p style={{ color: "orangered", fontWeight: "bold" }}>
              Username already taken
            </p>
          )}

          <button style={{ marginTop: "15px" }} type="submit">
            Register
          </button>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default RegisterModal;
