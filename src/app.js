// Dependencies
import React, { Component } from "react";
import Sound from "react-sound";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import WheelReact from "wheel-react";

// Components
import Title from "./components/title";
import History from "./components/history";
import Choices from "./components/choicesMenu";
import Settings from "./components/settings";
import Frame from "./components/frame";
import MenuButtons from "./components/menuButtons";
import SaveLoadMenu from "./components/saveLoadMenu";
import SecretMenu from "./components/secretmenu";
import Login from "./components/login";

//Styling
import "./styling/app.css"
import "./styling/settings.css";
import "./styling/container.css";
import "./styling/history.css";
import "./styling/choices-overlay.css";
import "./styling/effects.css";
import "./styling/menu-buttons.css";
import "./styling/save-load.css";
import "./styling/sprites.css";
import "./styling/textbox.css";
import "./styling/titlescreen.css";
import "./styling/transition.css";
import "./styling/login.css"


//Story Components
import script from "./script";
import choices from "./choices";



const INITIAL_STATE = {
  bgmVolume: 50,
  font: "Balsamiq Sans",
  isFull: false,
  choicesStore: {},
  index: 0,
  stateHistory: [],
  choicesHistory: [],
  choicesIndexHistory: [],
  indexHistory: [],
  choicesExist: false,
  settingsShown: false,
  secretMenuShown: false,
  loginShown: false,
  titleShown: true,
  frameIsRendering: false,
  historyShown: false,
  textBoxShown: true,
  saveMenuShown: false,
  loadMenuShown: false,
};

class App extends Component {
  constructor() {
    super();
    this.setFrame = this.setFrame.bind(this);
    this.toggleHistory = this.toggleHistory.bind(this);
    this.state = INITIAL_STATE;

    WheelReact.config({
      down: () => {
        if (
          !this.state.historyShown &&
          !this.state.choicesExist &&
          !this.state.loadMenuShown &&
          !this.state.saveMenuShown &&
          !this.state.titleShown &&
          !this.state.settingsMenuShown &&
          !this.state.secretMenuShown &&
          !this.state.loginMenuShown       
        ) {
          this.toggleHistory();
        }
      }
    });
  }

  componentDidMount() {
    window.addEventListener("beforeunload", e => (e.returnValue = "Any unsaved changes will be lost."));
  }

  setFrameFromChoice(choice, routeBegins) {
    for (let i = 0; i < script.length; i++) {
      if (routeBegins === script[i].routeBegins) {
        this.setFrame(i);
      }
    }

    let choicesStore = { ...this.state.choicesStore };
    choicesStore[choice]++ || (choicesStore[choice] = 1);
    this.setState({ choicesStore });
  }

  setNextFrame() {
    const currentIndex = this.state.index;
    const jumpToBecauseStore = script[currentIndex].jumpToBecauseStore;
    if (script[currentIndex].jumpToBecauseStore) {
      for (let i = 0; i < script.length; i++) {
        if (script[i].receiveJumpBecauseStore) {
          if (
            jumpToBecauseStore === script[i].receiveJumpBecauseStore[0] &&
            this.state.choicesStore[jumpToBecauseStore] === script[i].receiveJumpBecauseStore[1]
          ) {
            this.setFrame(i);
            return;
          }
        }
      }
    }
    if (script[currentIndex].jumpTo) {
      if (script[currentIndex].jumpTo === "title-screen") {
        this.setState(INITIAL_STATE);
        return;
      }
      for (let i = 0; i < script.length; i++) {
        if (script[currentIndex].jumpTo === script[i].receiveJump) {
          this.setFrame(i);
          return;
        }
      }
    }
    if (
      !this.state.choicesExist &&
      !this.state.loadMenuShown &&
      !this.state.saveMenuShown &&
      !this.state.titleShown &&
      !this.state.historyShown &&
      !this.state.settingsMenuShown &&
      !this.state.secretMenuShown &&
      !this.state.loginMenuShown
    ) {
      this.setFrame(currentIndex + 1);
    }
  }

  setFrame(index) {
    if (index >= script.length) {
      index = script.length - 1;
    } else if (index <= -1) {
      index = 0;
    }
    this.setState({
      index: index,
      bg: script[index].bg,
      bgm: script[index].bgm,
      choicesExist: script[index].choicesExist,
      speaker: script[index].speaker,
      sprite: script[index].sprite,
      spriteEffect: script[index].spriteEffect,
      spriteTransition: script[index].spriteTransition,
      spriteLeft: script[index].spriteLeft,
      spriteLeftEffect: script[index].spriteLeftEffect,
      spriteLeftTransition: script[index].spriteLeftTransition,
      spriteRight: script[index].spriteRight,
      spriteRightEffect: script[index].spriteRightEffect,
      spriteRightTransition: script[index].spriteRightTransition,
      text: script[index].text,
      bgTransition: script[index].bgTransition,
    });
  }

  frame() {
    return (
      <Frame
        font={this.state.font}
        setNextFrame={this.setNextFrame.bind(this)}
        bg={this.state.bg}
        sprite={this.state.sprite}
        spriteEffect={this.state.spriteEffect}
        spriteTransition={this.state.spriteTransition}
        spriteLeft={this.state.spriteLeft}
        spriteLeftEffect={this.state.spriteLeftEffect}
        spriteLeftTransition={this.state.spriteLeftTransition}
        spriteRight={this.state.spriteRight}
        spriteRightEffect={this.state.spriteRightEffect}
        spriteRightTransition={this.state.spriteRightTransition}
        speaker={this.state.speaker}
        text={this.state.text}
        textBoxShown={this.state.textBoxShown}
        bgTransition={this.state.bgTransition}
      />
    );
  }

  setChoice(choicesIndex) {
    if (choicesIndex >= choices.length) {
      choicesIndex = choices.length - 1;
    } else if (choicesIndex <= -1) {
      choicesIndex = 0;
    }

    this.setState({
      choicesIndex: choicesIndex,
      choiceOptions: choices[choicesIndex].choices
    });
  }

  handleChoiceSelected(event) {
    this.setFrameFromChoice(event.currentTarget.name, event.currentTarget.alt);
    let nextIndex = 0;
    if (event.currentTarget.id) {
      this.setState({ choicesStore: {} });
    }
    if (event.currentTarget.placeholder) {
      nextIndex = parseInt(event.currentTarget.placeholder, 10);
    } else {
      nextIndex = this.state.choicesIndex + 1;
    }
    this.setChoice(nextIndex);
  }

  renderChoices() {
    return (
      <Choices choiceOptions={this.state.choiceOptions} onChoiceSelected={this.handleChoiceSelected.bind(this)} />
    );
  }

  toggleSettingsMenu() {
    if (this.state.loginShown) {
      this.setState({ loginMenuShown: false });
    }
    if (this.state.saveMenuShown) {
      this.setState({ saveMenuShown: false });
    }
    if (this.state.loadMenuShown) {
      this.setState({ loadMenuShown: false });
    }
    if (this.state.historyShown) {
      this.setState({ historyShown: false });
    }
    this.setState(prevState => ({
      settingsMenuShown: !prevState.settingsMenuShown
    }));
  }

  toggleSecretMenu() {
    if (this.state.loginShown) {
      this.setState({ loginMenuShown: false });
    }
    if (this.state.loginShown) {
      this.setState({ loginShown: false });
    }
    if (this.state.saveMenuShown) {
      this.setState({ saveMenuShown: false });
    }
    if (this.state.loadMenuShown) {
      this.setState({ loadMenuShown: false });
    }
    if (this.state.historyShown) {
      this.setState({ historyShown: false });
    }
    this.setState(prevState => ({
      secretMenuShown: !prevState.secretMenuShown
    }));
  }

  toggleLoginMenu() {
    console.log("Login Pressed")
    if (this.state.saveMenuShown) {
      this.setState({ saveMenuShown: false });
    }
    if (this.state.settingsMenuShown) {
      this.setState({ settingsMenuShown: false });
    }
    if (this.state.secretMenuShown) {
      this.setState({ secretMenuShown: false });
    }
    if (this.state.loadMenuShown) {
      this.setState({ loadMenuShown: false });
    }
    if (this.state.historyShown) {
      this.setState({ historyShown: false });
    }
    this.setState(prevState => ({
      loginMenuShown: !prevState.loginMenuShown,
    }));
  }


  toggleHistory() {
    if (this.state.loginMenuShown) {
      this.setState({ loginMenuShown: false });
    }
    if (this.state.settingsMenuShown) {
      this.setState({ settingsMenuShown: false });
    }
    if (this.state.secretMenuShown) {
      this.setState({ secretMenuShown: false });
    }
    if (this.state.saveMenuShown) {
      this.setState({ saveMenuShown: false });
    }
    if (this.state.loadMenuShown) {
      this.setState({ loadMenuShown: false });
    }
    this.setState(prevState => ({
      historyShown: !prevState.historyShown
    }));
  }

  toggleTextBox() {
    this.setState(prevState => ({
      textBoxShown: !prevState.textBoxShown
    }));
  }

  toggleSaveMenu() {
    if (this.state.loginMenuShown) {
      this.setState({ loginMenuShown: false });
    }
    if (this.state.settingsMenuShown) {
      this.setState({ settingsMenuShown: false });
    }
    if (this.state.secretMenuShown) {
      this.setState({ secretMenuShown: false });
    }
    if (this.state.loadMenuShown) {
      this.setState({ loadMenuShown: false });
    }
    if (this.state.historyShown) {
      this.setState({ historyShown: false });
    }
    this.setState(prevState => ({
      saveMenuShown: !prevState.saveMenuShown
    }));
  }

  toggleLoadMenu() {
    if (this.state.loginMenuShown) {
      this.setState({ loginMenuShown: false });
    }
    if (this.state.settingsMenuShown) {
      this.setState({ settingsMenuShown: false });
    }
    if (this.state.secretMenuShown) {
      this.setState({ secretMenuShown: false });
    }
    if (this.state.saveMenuShown) {
      this.setState({ saveMenuShown: false });
    }
    if (this.state.historyShown) {
      this.setState({ historyShown: false });
    }
    this.setState(prevState => ({
      loadMenuShown: !prevState.loadMenuShown
    }));
  }

  saveSlot(number) {
    let d = new Date();
    let datestring =
      ("0" + (d.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + d.getDate()).slice(-2) +
      "-" +
      d.getFullYear() +
      " " +
      ("0" + d.getHours()).slice(-2) +
      ":" +
      ("0" + d.getMinutes()).slice(-2);

    localStorage.setItem("time" + number, datestring);
    localStorage.setItem(number, JSON.stringify(this.state, (k, v) => (v === undefined ? null : v)));
    this.setState(this.state);
  }

  loadSlot(number) {
    this.setState(JSON.parse(localStorage.getItem(number)));
    this.setState({
      saveMenuShown: false
    });
  }

  beginStory() {
    this.setState({
      titleShown: false,
      frameIsRendering: true
    });
    this.setFrame(0);
    // this.setState({
    //   choicesIndex: 0,
    //   choiceOptions: choices[0].choices
    // });
  }

  title() {
    return <Title beginStory={this.beginStory.bind(this)} toggleLoadMenu={this.toggleLoadMenu.bind(this)} />;
  }

  settingsMenu() {
    return (
      <Settings
        changeFont={newFont => this.setState({ font: newFont.label })}
        font={this.state.font}
        bgmVolume={this.state.bgmVolume}
        bgmVolumeChange={value => this.setState({ bgmVolume: value })}
        toggleSettingsMenu={this.toggleSettingsMenu.bind(this)}
      />
    );
  }

  secretMenu() {
    return (
      <SecretMenu
        toggleSecretMenu={this.toggleSecretMenu.bind(this)}
      />
    );
  }

  loginMenu() {
    return (
      <Login
        toggleLogin={this.toggleLoginMenu.bind(this)}
      />
    );
  }

  saveMenu() {
    return (
      <SaveLoadMenu
        choicesExist={this.state.choicesExist}
        choiceOptions={this.state.choiceOptions}
        confirmationMessage="Overwrite save?"
        currentTime={this.state.currentTime}
        menuType=""
        executeSlot={this.saveSlot.bind(this)}
        toggleMenu={this.toggleSaveMenu.bind(this)}
        speaker={this.state.speaker}
        text={this.state.text}
        textBoxShown={this.state.textBoxShown}
      />
    );
  }

  loadMenu() {
    return (
      <SaveLoadMenu
        choicesExist={this.state.choicesExist}
        choiceOptions={this.state.choiceOptions}
        confirmationMessage="Load save?"
        currentTime={this.state.currentTime}
        menuType=""
        executeSlot={this.loadSlot.bind(this)}
        toggleMenu={this.toggleLoadMenu.bind(this)}
        speaker={this.state.speaker}
        text={this.state.text}
        textBoxShown={this.state.textBoxShown}
      />
    );
  }

  renderMenuButtons() {
    return (
      <MenuButtons
        menuButtonsShown={this.state.menuButtonsShown}
        setNextFrame={this.setNextFrame.bind(this)}
        toggleSaveMenu={this.toggleSaveMenu.bind(this)}
        toggleLoadMenu={this.toggleLoadMenu.bind(this)}
        saveSlot={this.saveSlot.bind(this)}
        loadSlot={this.loadSlot.bind(this)}
        saveMenuShown={this.state.saveMenuShown}
        loadMenuShown={this.state.loadMenuShown}
        toggleSettingsMenu={this.toggleSettingsMenu.bind(this)}
        settingsMenuShown={this.state.settingsMenuShown}
        toggleSecretMenu={this.toggleSecretMenu.bind(this)}
        secretMenuShown={this.state.secretMenuShown}
        toggleLoginMenu={this.toggleLoginMenu.bind(this)}
        loginMenuShown={this.state.loginShown}
        toggleHistory={this.toggleHistory.bind(this)}
        toggleTextBox={this.toggleTextBox.bind(this)}
        textBoxShown={this.state.textBoxShown}
        historyShown={this.state.historyShown}
      />
    );
  }

  history() {
    return (
      <History
        index={this.state.index}
        setFrame={this.setFrame}
        setChoice={this.setChoice.bind(this)}
        toggleHistory={this.toggleHistory}
        choicesStore={this.state.choicesStore}
        choicesHistory={this.state.choicesHistory}
        choicesIndexHistory={this.state.choicesIndexHistory}
        indexHistory={this.state.indexHistory}
        setChoicesHistory={choicesHistory => this.setState({ choicesHistory: choicesHistory })}
        setIndexHistory={indexHistory => this.setState({ indexHistory: indexHistory })}
        setChoicesStore={choicesStore => this.setState({ choicesStore: choicesStore })}
      />
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.index < this.state.index) {
      this.setState({
        choicesHistory: [...this.state.choicesHistory, prevState.choicesStore],
        choicesIndexHistory: [...this.state.choicesIndexHistory, prevState.choicesIndex],
        indexHistory: [...this.state.indexHistory, prevState.index]
      });
    }
  }

  playBGM() {
    return <Sound url={this.state.bgm} volume={this.state.bgmVolume} playStatus={Sound.status.PLAYING} loop={true} />;
  }

  render() {
    let zoomMultiplier = 0;
    if (window.innerWidth * 1 / window.innerHeight <= 1280 * 1 / 720) {
      zoomMultiplier = window.innerWidth * 1 / 1280;
    } else {
      zoomMultiplier = window.innerHeight * 1 / 720;
    }

    return (
      <div {...WheelReact.events} style={this.state.isFull ? { zoom: zoomMultiplier } : null}>
          <ReactCSSTransitionGroup
            className="container"
            component="div"
            transitionName="menu"
            transitionEnterTimeout={400}
            transitionLeaveTimeout={400}
          >
            {this.state.titleShown ? this.title() : null}
            {this.state.frameIsRendering ? this.frame() : null}
            {/* GUI menu buttons */}
            {this.state.settingsMenuShown ? this.settingsMenu() : null}
            {this.state.secretMenuShown ? this.secretMenu() : null}
            {this.state.loginShown && this.loginMenu()}
            {this.state.saveMenuShown ? this.saveMenu() : null}
            {this.state.loadMenuShown ? this.loadMenu() : null}
            {this.state.historyShown ? this.history() : null}
            {this.state.frameIsRendering ? this.frame() : null}
            {this.state.choicesExist ? this.renderChoices() : null}
          </ReactCSSTransitionGroup>
        {!this.state.titleShown ? this.renderMenuButtons() : null}
        {this.state.bgm ? this.playBGM() : null}
      </div>
    );
  }
  
}

export default App;
