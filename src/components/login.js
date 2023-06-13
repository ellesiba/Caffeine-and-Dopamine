// import React from "react";
// import { Link, Route } from "react-router-dom";
// import KeyHandler, { KEYDOWN, KEYUP } from "react-key-handler";
// import LoginButton from "./LoginButton";
// import LogoutButton from "./LogoutButton";

// function MenuButtons(props) {
//   function handleToggles(event, value, toggle) {
//     return <KeyHandler keyEventName={event} keyValue={value} onKeyHandle={toggle} />;
//   }

//   return (
//     <div className="container menu-buttons-container">
//       <div className="menu-buttons">
//         {handleToggles(KEYDOWN, " ", props.toggleTextBox)}
//         {handleToggles(KEYDOWN, "Control", props.setNextFrame)}
//         {handleToggles(KEYUP, "Enter", props.setNextFrame)}

//         <button onClick={props.toggleSaveMenu}>{props.saveMenuShown ? "Hide Saves" : "Save"}</button>
//         <button onClick={props.toggleLoadMenu}>{props.loadMenuShown ? "Hide Loads" : "Load"}</button>
//         <button onClick={props.toggleSettingsMenu}>{props.SettingsShown ? "Hide Settings" : "Settings"}</button>
//         <button onClick={props.toggleSecretMenu}>{props.SecretMenuShown ? "Hide SecretMenu" : "Secret Menu"}</button>
        
//         {/* Add the login/logout buttons */}
//         <LoginButton />
//         <LogoutButton />
        
//         <Route path="/login" element={<Login />} /> 
//       </div>
//     </div>
//   );
// }

// export default MenuButtons;
