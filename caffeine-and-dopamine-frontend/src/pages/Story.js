import './App.css';
import React from 'react';

function App() {

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="text/javascript" src="app.js" id="VisualNovelEngine"></script>
        <title>Caffeine and Dopamine</title>

        {/* Scales to Mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=0.5" />

        {/* THIS TELLS OUR BROWSER TO GRAB THE CSS FROM THIS FILE */}
        <link rel="stylesheet" href="style.css" />

        {/* Favicon */}
        <link rel="shortcut icon" type="image/jpg" href="image/Favicon.png" />

        {/* THIS PUTS TEXT INTO THE TAB */}
        <title>Visual Novel</title>
      </head>
      <body>
        <div id="mainbox">
          <div id="spritebox" className="rightalign">
            <img src="/assets/images/SpriteBox.png" alt="Sprite Box" />
          </div>
          <div id="namebox">
            {/* <img src="image/NameBox.png"> */}
            <span>Name is Here</span>
          </div>
          <div id="textbox">
            <span>Text is here!</span>
            {/* <img src="image/TextBox.png"> */}
            <div id="optionsbox"></div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default App;
