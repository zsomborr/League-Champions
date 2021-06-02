import React from "react";
import { Modal, ModalContent } from "../styles/LoginModalStyle.js";

const LoginModal = ({ toggleLoginModal, onLogin }) => {
  return (
    <Modal>
      <ModalContent>
        <button
          style={{ float: "right", backgroundColor: "red", fontWeight: "bold" }}
          onClick={toggleLoginModal}
        >
          X
        </button>
        <form onSubmit={onLogin}>
          <h3>Sign In</h3>

          <div className="form-group">
            <label>Email address</label>
            <br />
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <br />
            <label>Password</label>
            <br />
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <button
            style={{ marginTop: "15px" }}
            type="submit"
            className="btn btn-primary btn-block"
          >
            Login
          </button>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;
