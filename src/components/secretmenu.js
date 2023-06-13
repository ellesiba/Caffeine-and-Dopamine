//Imports
import React, { Component } from "react";
import "../styling/secretMenu.css" 

class SecretMenu extends Component {
  
  category(name, shown, handleClick) {
    return (
      <button class={"secret-menu-button" + (shown ? "active" : null)} onClick={handleClick}>
        {name}
      </button>
    );
  }

  render() {
    const {
      toggleSecretMenu
    } = this.props;
    return (
      <div className="overlay" id="secret-menu-overlay" >
        <ul className="header">
          <li>
            <a>Secret Menu</a>
          </li>
        </ul>
        <a>more words that is not header</a>
      </div>
    );
  }
}

export default SecretMenu;

