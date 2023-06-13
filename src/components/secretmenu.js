// //Imports
// import React, { Component } from "react";
// import "../styling/secretMenu.css" 

// class SecretMenu extends Component {
  
//   category(name, shown, handleClick) {
//     return (
//       <button class={"secret-menu-button" + (shown ? "active" : null)} onClick={handleClick}>
//         {name}
//       </button>
//     );
//   }

//   render() {
//     const {
//       toggleSecretMenu
//     } = this.props;
//     return (
//       <div className="overlay" id="secret-menu-overlay" >
//         <ul className="header">
//           <li>
//             <a>Secret Menu</a>
//           </li>
//         </ul>
//         <a>more words that is not header</a>
//       </div>
//     );
//   }
// }

// export default SecretMenu;

import React, { Component } from "react";
import "../styling/secretMenu.css";


class SecretMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
    };
  }

  componentDidMount() {
    this.fetchMenuItems();
  }

fetchMenuItems = () => {
  fetch("http://localhost:8000/api/v1/secret_menu/items")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Fetched menu items:", data);
      // Assuming the backend response is an array of objects
      this.setState({ menuItems: data });
    })
    .catch((error) => {
      console.error("Error fetching menu items:", error);
    });
};


  render() {
    const { menu } = this.state;

    return (
      <div className="overlay" id="secret-menu-overlay">
        <ul className="header">
          <li>
            <a>Secret Menu</a>
          </li>
        </ul>
        <a>more words that are not a header</a>

        <ul>
          {menu.map((menu) => (
            <li key={menu.id}>{menu.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SecretMenu;
