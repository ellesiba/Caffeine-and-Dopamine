import React, { Component } from "react";

class SaveLoadMenu extends Component {
  constructor() {
    super();

    this.state = {
      slotNumber: 1
    };
  }

  swapSlotButtons() {
    let buttonCache = [];
    for (let i = 1; i < 21; i++) {
      let style = {};
      if (this.state.slotNumber === i) {
        style["background-color"] = "#523023";
      } else if (!JSON.parse(localStorage.getItem(i))) {
        style["background-color"] = "#e0b3a2";
      }
      buttonCache.push(
        <button
          className="save-load-btn"
          onClick={() => this.setState({ slotNumber: i })}
          style={style}
          key={i}
        >
          {i}
        </button>
      );
    }

    return <div className="save-load-buttons">{buttonCache}</div>;
  }

  renderChoiceMenu() {
    return (
      <div className="overlay-choices overlay-choices-slot">
        {JSON.parse(localStorage.getItem(this.state.slotNumber)).choiceOptions.map((key, index) => (
          <button className="choice-button" key={index}>
            {key.content}
          </button>
        ))}
      </div>
    );
  }

  menuSlot() {
    if (JSON.parse(localStorage.getItem(this.state.slotNumber))) {
      return (
        <div
          className="save-load-slot"
          onClick={() => {
            if (
              JSON.parse(localStorage.getItem(this.state.slotNumber)) &&
              window.confirm(this.props.confirmationMessage)
            ) {
              this.props.executeSlot(this.state.slotNumber);
            } else {
              null;
            }
          }}
        >
          {JSON.parse(localStorage.getItem(this.state.slotNumber)).choicesExist ? this.renderChoiceMenu() : null}
          <a>
            <img draggable="false" className="slot-bg" src={JSON.parse(localStorage.getItem(this.state.slotNumber)).bg} />
            <img
              draggable="false"
              src={JSON.parse(localStorage.getItem(this.state.slotNumber)).spriteLeft}
              className="sprite left"
            />
            <img draggable="false" src={JSON.parse(localStorage.getItem(this.state.slotNumber)).sprite} className="sprite" />
            <img
              draggable="false"
              src={JSON.parse(localStorage.getItem(this.state.slotNumber)).spriteRight}
              className="sprite right"
            />
            {JSON.parse(localStorage.getItem(this.state.slotNumber)).text && this.props.textBoxShown ? (
              <div
                className="text-box"
                style={{
                  fontFamily: JSON.parse(localStorage.getItem(this.state.slotNumber)).font
                }}
              >
                {JSON.parse(localStorage.getItem(this.state.slotNumber)).speaker ? (
                  <div className="speaker">{JSON.parse(localStorage.getItem(this.state.slotNumber)).speaker}</div>
                ) : null}
                <div className="text">{JSON.parse(localStorage.getItem(this.state.slotNumber)).text}</div>
              </div>
            ) : null}
          </a>
        </div>
      );
    } else {
      return (
        <div className="save-load-slot empty" onClick={() => this.props.executeSlot(this.state.slotNumber)} />
      );
    }
  }

  deleteSavedFile() {
    if (window.confirm("Are you sure you want to delete this saved file?")) {
      localStorage.removeItem(this.state.slotNumber);
      // Add any additional cleanup or UI updates here
    }
  }

  render() {
    return (
      <div className="overlay overlay-save-load">
        <ul className="header">
          <li>
            <a>{this.props.menuType}</a>
          </li>
          <li className="exit-button" onClick={this.props.toggleMenu}>
            <a>&times;</a>
          </li>
          <li className="delete-button" onClick={() => this.deleteSavedFile()}>
            <a>Delete</a>
          </li>
        </ul>
        {this.menuSlot()}
        <div className="slot-date">{localStorage.getItem("time" + this.state.slotNumber)}</div>
        {this.swapSlotButtons()}
      </div>
    );
  }
}

export default SaveLoadMenu;

