//Imports
import React, { Component } from "react";
import Slider from "react-rangeslider";
import Select from "react-select";
import "react-rangeslider/lib/index.css";
import "../styling/settings.css"



class Settings extends Component {
  
  constructor() {
    super();

    this.state = {
      audioShown: true,
      textShown: false
    };
    this.toggleAudio = this.toggleAudio.bind(this);
    this.toggleText = this.toggleText.bind(this);
  }

  toggleAudio() {
    if (!this.state.audioShown) {
      this.setState({
        audioShown: true,
        textShown: false
      });
    }
  }

  toggleText() {
    if (!this.state.textShown) {
      this.setState({
        textShown: true,
        audioShown: false
      });
    }
  }

  category(name, shown, handleClick) {
    return (
      <button class={"settings-btn" + (shown ? "active" : null)} onClick={handleClick}>
        {name}
      </button>
    );
  }

  slider(type, value, onChangeFunction) {
    return (
      <div class="settings-container">
        <span>{type}</span>
        <Slider value={value} onChange={onChangeFunction} />
      </div>
    );
  }

  render() {
    const { audioShown, textShown } = this.state;
    const {
      font,
      changeFont,
      bgmVolume,
      bgmVolumeChange,
      soundEffectVolume,
      soundEffectVolumeChange,
      toggleSettings
    } = this.props;
    const options = [ //Fonts
      { label: "Arial" },
      { label: "Yeseva One" },
      { label: "Abril Fatface" },
      { label: "Poiret One" },
      { label: "Unica One" },
      { label: "Chewy" },
      { label: "Balsamiq Sans" },
      { label: "Silkscreen" },
      { label: "Pompiere" },
      { label: "Verdana" },
      { label: "Indie Flower"},
      { label: "Nanum Pen Script"},
      { label: "Amatic SC" },
      { label: "Comic Neue" },
      { label: "Gochi Hand" },
      { label: "Patrick Hand SC" },
      { label: "Sue Ellen Francisco"}
    ];

    for (let i = 0; i < options.length; i++) {
      options[i].value = options[i].label;
    }

    const styles = {
      option: (styles, { data }) => {
        return {
          ...styles,
          fontFamily: data.label
        };
      }
    };
    return (
      <div className="overlay" id="settings-overlay" style={{ fontFamily: font }}>
        <ul className="header">
          <li>
            <a>Settings</a>
          </li>
          <li className="exit-button" onClick={toggleSettings}>
            <a>&times;</a>
          </li>
        </ul>
        <ul>
          {this.category("Audio", audioShown, this.toggleAudio)}
          {this.category("Text", textShown, this.toggleText)}
        </ul>
        <div id="settings-body">
          {audioShown ? (
            <div>
              {this.slider("BGM", bgmVolume, bgmVolumeChange)}
              {this.slider("Sound Effect", soundEffectVolume, soundEffectVolumeChange)}
            </div>
          ) : null}
          {textShown ? (
            <div className="settings-container font-container">
              Font Styles
              <Select
                options={options}
                styles={styles}
                onChange={changeFont}
                defaultValue={options[options.findIndex(obj => obj.label === font)]}
              />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Settings;
