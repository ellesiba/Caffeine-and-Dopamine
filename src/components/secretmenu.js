// import React, { Component } from "react";
// import "../styling/secretMenu.css";

// class SecretMenu extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       menuItems: [],
//       selectedDrink: null,
//     };
//   }

//   componentDidMount() {
//     this.fetchMenuItems();
//   }

//   fetchMenuItems() {
//     fetch("http://localhost:8000/api/v1/secret_menu")
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.status.code === 200) {
//           this.setState({ menuItems: data.data });
//         } else {
//           console.log("Error fetching menu items:", data.status.message);
//         }
//       })
//       .catch((error) => {
//         console.log("Error fetching menu items:", error);
//       });
//   }

//   deleteMenuItem(itemId) {
//     // Send a DELETE request to your API endpoint to delete the menu item with the given itemId
//     // Update the state accordingly after successful deletion
//   }

//   createMenuItem() {
//     // Show a form or a modal to allow the user to enter details for a new menu item
//     // Send a POST request to your API endpoint with the new menu item data
//     // Update the state with the newly created menu item after successful creation
//   }

//   editMenuItem(itemId) {
//     // Show a form or a modal prefilled with the details of the menu item with the given itemId
//     // Allow the user to edit the details and send a PUT/PATCH request to your API endpoint
//     // Update the state with the edited menu item after successful update
//   }

//   selectDrink(drink) {
//     this.setState({ selectedDrink: drink });
//   }

//   render() {
//     const { menuItems, selectedDrink } = this.state;

//     return (
//       <div className="overlay" id="secret-menu-overlay">
//         <ul className="header">
//           <li>
//             <a>Secret Menu</a>
//           </li>
//         </ul>
//         {menuItems.map((menuItem) => (
//           <div key={menuItem.id}>
//             <span onClick={() => this.selectDrink(menuItem)}>
//               {menuItem.name}
//             </span>
//             <button onClick={() => this.editMenuItem(menuItem.id)}>Edit</button>
//             <button onClick={() => this.deleteMenuItem(menuItem.id)}>Delete</button>
//           </div>
//         ))}
//         <button onClick={() => this.createMenuItem()}>Create New</button>
//         {selectedDrink && (
//           <div>
//             <h2>{selectedDrink.name}</h2>
//             <p>Coffee: {selectedDrink.coffee ? "Yes" : "No"}</p>
//             <p>Tea: {selectedDrink.tea ? "Yes" : "No"}</p>
//             <p>Milk: {selectedDrink.milk ? "Yes" : "No"}</p>
//             <p>Additional Flavors: {selectedDrink.additional_flavors}</p>
//             <p>Taste Profile: {selectedDrink.taste_profile}</p>
//           </div>
//         )}
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
      menuItems: [],
      selectedDrink: null,
      creating: false,
      editing: false,
      newDrink: {
        name: "",
        coffee: false,
        tea: false,
        milk: false,
        additional_flavors: "",
        taste_profile: "",
      },
      editedDrink: {
        id: "",
        name: "",
        coffee: false,
        tea: false,
        milk: false,
        additional_flavors: "",
        taste_profile: "",
      },
    };

    this.fetchMenuItems = this.fetchMenuItems.bind(this);
    this.selectDrink = this.selectDrink.bind(this);
    this.toggleCreating = this.toggleCreating.bind(this);
    this.toggleEditing = this.toggleEditing.bind(this);

    this.handleChangeNewDrinkCheckbox = this.handleChangeNewDrinkCheckbox.bind(this);
    this.handleSubmitNewDrink = this.handleSubmitNewDrink.bind(this);
    this.handleSubmitEditedDrink = this.handleSubmitEditedDrink.bind(this);
    this.deleteMenuItem = this.deleteMenuItem.bind(this);
  }

  componentDidMount() {
    this.fetchMenuItems();
  }

  fetchMenuItems() {
    fetch("http://localhost:8000/api/v1/secret_menu")
      .then((response) => response.json())
      .then((data) => {
        if (data.status.code === 200) {
          this.setState({ menuItems: data.data });
        } else {
          console.log("Error fetching menu items:", data.status.message);
        }
      })
      .catch((error) => {
        console.log("Error fetching menu items:", error);
      });
  }

  fetchMenuItem(id) {
    fetch(`http://localhost:8000/api/v1/secret_menu/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status.code === 200) {
          this.setState({ selectedDrink: data.data });
        } else {
          console.log("Error fetching menu item:", data.status.message);
        }
      })
      .catch((error) => {
        console.log("Error fetching menu item:", error);
      });
  }
  

  deleteMenuItem(itemId) {
    fetch(`http://localhost:8000/api/v1/secret_menu/${itemId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status.code === 200) {
          this.fetchMenuItems();
          this.setState({ selectedDrink: null });
        } else {
          console.log("Error deleting menu item:", data.status.message);
        }
      })
      .catch((error) => {
        console.log("Error deleting menu item:", error);
      });
  }
  

  selectDrink(menuItem) {
    this.setState({ selectedDrink: menuItem }, () => {
      this.fetchMenuItem(menuItem.id); 
    });
  }
  
  

  toggleCreating() {
    this.setState((prevState) => ({ creating: !prevState.creating }));
  }

  toggleEditing() {
    this.setState((prevState) => ({ editing: !prevState.editing }));
  }

  handleChangeNewDrinkCheckbox(event) {
    const { name, checked } = event.target;
    this.setState((prevState) => ({
      newDrink: { ...prevState.newDrink, [name]: checked },
    }));
  }
  
  // handleChangeEditedDrink(event) {
  //   const { name, value } = event.target;
  //   this.setState((prevState) => ({
  //     editedDrink: { ...prevState.editedDrink, [name]: value },
  //   }));
  // }
  handleChangeEditedDrink(event) {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
  
    this.setState((prevState) => ({
      editedDrink: { ...prevState.editedDrink, [name]: newValue },
    }));
  }
  
  

  handleSubmitNewDrink(event) {
    fetch("http://localhost:8000/api/v1/secret_menu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.newDrink),
    })    
      .then((response) => response.json())
      .then((data) => {
        if (data.status.code === 200) {
          this.setState({
            newDrink: {
              name: "",
              coffee: false,
              tea: false,
              milk: false,
              additional_flavors: "",
              taste_profile: "",
            },
            creating: false,
            menuItems: [...this.state.menuItems, data.data],
          });
        } else {
          console.log("Error creating menu item:", data.status.message);
        }
      })
      .catch((error) => {
        console.log("Error creating menu item:", error);
      });
  }
  

  handleSubmitEditedDrink(event) {
    event.preventDefault();
    const { itemId } = this.state.editedDrink; 
    fetch(`http://localhost:8000/api/v1/secret_menu/${itemId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.editedDrink),
    })    
      .then((response) => response.json())
      .then((data) => {
        if (data.status.code === 200) {
          this.fetchMenuItems();
          this.setState({
            editedDrink: {
              id: "",
              name: "",
              coffee: false,
              tea: false,
              milk: false,
              additional_flavors: "",
              taste_profile: "",
            },
            editing: false,
          });
        } else {
          console.log("Error updating menu item:", data.status.message);
        }
      })
      .catch((error) => {
        console.log("Error updating menu item:", error);
      });
  }
  

  handleChangeNewDrink(event) {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
  
    this.setState((prevState) => ({
      newDrink: { ...prevState.newDrink, [name]: newValue },
    }));
  }
  

  render() {
    const {
      menuItems,
      selectedDrink,
      creating,
      editing,
      newDrink,
      editedDrink,
    } = this.state;

    return (
      <div className="overlay" id="secret-menu-overlay">
        <ul className="header">
          <li>
            <a>Secret Menu</a>
          </li>
        </ul>
        {menuItems.map((menuItem) => (
          <a
            key={menuItem.id}
            onClick={() => this.selectDrink(menuItem)}
            className={selectedDrink && selectedDrink.id === menuItem.id ? "selected" : ""}
          >
            {menuItem.name}
          </a>
        ))}
        {selectedDrink && (
          <div>
            <h2>Drink Details</h2>
            <p>Name: {selectedDrink.name}</p>
            <p>Coffee: {selectedDrink.coffee ? "Yes" : "No"}</p>
            <p>Tea: {selectedDrink.tea ? "Yes" : "No"}</p>
            <p>Milk: {selectedDrink.milk ? "Yes" : "No"}</p>
            <p>Additional Flavors: {selectedDrink.additional_flavors}</p>
            <p>Taste Profile: {selectedDrink.taste_profile}</p>
            <button onClick={() => this.toggleEditing()}>Edit</button>
            <button onClick={() => this.deleteMenuItem(selectedDrink.id)}>Delete</button>
          </div>
        )}
      {creating ? (
        <div>
          <h2>Create Drink</h2>
          <form onSubmit={(event) => this.handleSubmitNewDrink(event)}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={newDrink.name}
                onChange={(event) => this.handleChangeNewDrink(event)}
              />
            </label>
            <label>
              Coffee:
              <input
                type="checkbox"
                name="coffee"
                checked={newDrink.coffee}
                onChange={(event) => this.handleChangeNewDrink(event)}
              />
            </label>
            <label>
              Tea:
              <input
                type="checkbox"
                name="tea"
                checked={newDrink.tea}
                onChange={(event) => this.handleChangeNewDrink(event)}
              />
            </label>
            <label>
              Milk:
              <input
                type="checkbox"
                name="milk"
                checked={newDrink.milk}
                onChange={(event) => this.handleChangeNewDrink(event)}
              />
            </label>
            <label>
              Additional Flavors:
              <input
                type="text"
                name="additional_flavors"
                value={newDrink.additional_flavors}
                onChange={(event) => this.handleChangeNewDrink(event)}
              />
            </label>
            <label>
              Taste Profile:
              <input
                type="text"
                name="taste_profile"
                value={newDrink.taste_profile}
                onChange={(event) => this.handleChangeNewDrink(event)}
              />
            </label>
            <button type="submit">Create</button>
          </form>
        </div>
      ) : (
        <button onClick={() => this.toggleCreating()}>Create New Drink</button>
      )}

    {editing ? (
      <div>
        <h2>Edit Drink</h2>
        <form onSubmit={(event) => this.handleSubmitEditedDrink(event)}>
          {/* Populate the input fields with the selectedDrink data */}
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={editedDrink.name}
              onChange={(event) => this.handleChangeEditedDrink(event)}
            />
          </label>
          {/* Add other input fields for coffee, tea, milk, additional flavors, taste profile */}
          <label>
            Coffee:
            <input
              type="checkbox"
              name="coffee"
              checked={editedDrink.coffee}
              onChange={(event) => this.handleChangeEditedDrink(event)}
            />
          </label>
          <label>
            Tea:
            <input
              type="checkbox"
              name="tea"
              checked={editedDrink.tea}
              onChange={(event) => this.handleChangeEditedDrink(event)}
            />
          </label>
          <label>
            Milk:
            <input
              type="checkbox"
              name="milk"
              checked={editedDrink.milk}
              onChange={(event) => this.handleChangeEditedDrink(event)}
            />
          </label>
          <label>
          Additional Flavors:
          <input
          type="text"
          name="additional_flavors"
        value={editedDrink.additional_flavors}
        onChange={(event) => this.handleChangeEditedDrink(event)}
        />
        </label>
        <label>
        Taste Profile:
        <input
        type="text"
        name="taste_profile"
        value={editedDrink.taste_profile}
        onChange={(event) => this.handleChangeEditedDrink(event)}
        />
</label>

          <button type="submit">Save</button>
        </form>
      </div>
    ) : null}
      </div>
    );
  }
}

export default SecretMenu;
