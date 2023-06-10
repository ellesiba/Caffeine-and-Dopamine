import React, { Component } from "react";
import script from "../script";

class History extends Component {
  componentDidMount() {
    this.scrollToBottom();
  }
  handleJump(index, i, choicesIndex) {
    this.props.toggleHistory();

    this.props.setChoice(choicesIndex);
    this.props.setChoicesHistory(this.props.choicesHistory.slice(0, i));

    this.props.setFrame(index);
    this.props.setIndexHistory(this.props.indexHistory.slice(0, i));

    this.props.setChoicesStore(this.props.choicesHistory[i]);
    this.props.setChoicesHistory(this.props.choicesHistory.slice(0, i));
  }

  scrollToBottom() {
    this.messagesEnd.scrollIntoView();
  }

  render() {
    let textHistory = [];
    const indexHistory = this.props.indexHistory;
    const choicesIndexHistory = this.props.choicesIndexHistory;

    for (let i = 0; i < indexHistory.length; i++) {
      const index = indexHistory[i];
      const choicesIndex = choicesIndexHistory[i];

      textHistory.push(
        <div className="history" key={i}>
          <div className="history-jump-container" onClick={() => this.handleJump(index, i, choicesIndex)}>
            <span className="history-jump-text">Jump</span>
          </div>
          <div className="history-speaker">{script[index].speaker}</div>
          {script[index].text}
        </div>
      );
    }
    return (
      <div className="overlay history-overlay">
        {textHistory}
        <ul className="header history-header" ref={el => (this.messagesEnd = el)}>
          <li>
            <a>History</a>
          </li>
          <li className="exit-button history-exit" onClick={this.props.toggleHistory}>
            <a>&times;</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default History;
