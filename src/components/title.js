import React from "react";

function Title(props) {
  return (
    <div className="overlay" id="title-overlay">
      <div id="title-screen-header">
        <ul id="menu">
          <li>
            <span onClick={props.beginStory}>Start</span>
          </li>
          <li>
            <span onClick={props.toggleLoadMenu}>Continue</span>
          </li>
          <li>
          </li>
          <li />
        </ul>
      </div>
    </div>
  );
}

export default Title;
