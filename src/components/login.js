import React, { Component } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";
import "../styling/login.css";

class Login extends Component {
  category(name, shown, handleClick) {
    return (
      <button className={"login-button" + (shown ? " active" : "")} onClick={handleClick}>
        {name}
      </button>
    );
  }

  render() {
    const { loginShown } = this.props;
    return (
     <div className={`overlay ${loginShown ? "" : "hidden"}`} id="#login-overlay">
      {/* <div className="overlay" id="#login-overlay"> */}
        <ul className="header">
          <li>
            <a>Log-in Is Appearing!</a>
            <div className="sign-in-container">
              <div>
                <div>
                  <h1 className="sign-in">Login</h1>
                  <main className="column">
                    <h1>Auth0 Login</h1>
                    <LoginButton />
                    <LogoutButton />
                    <Profile />
                  </main>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Login;
