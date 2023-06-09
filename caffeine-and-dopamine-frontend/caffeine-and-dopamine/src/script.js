// bg
const bedroom = require("./assets/background/bedroom.png");
const cafe = require("./assets/background/cafe.png");
// bgm
const chill = require("./assets/bgm/chill-vibes.mp3");
// speakers
const box = "Box";
// sprites
const bn = require("./assets/sprite/Spritebox-neutral.png");
const bh = require("./assets/sprite/Spritebox-happy.png");
const bp = require("./assets/sprite/Spritebox-pout.png");

let script = [
  {
    bg: bedroom,
    bgm: chill,
    sprite: bn,
    speaker: box,
    text: "The blue glow of the computer screen illuminates my darkened room. I feel like I've been staring at the same unfinished sentence for what seems like hours.",
  },
  {
    text: "I need to get this chapter up for the deadline. . .",
  },
  {
    text: "But...",
  },
  {
    text: "My brain feels all foggy. All I can remember is sitting here. I can't even remember anything before I sat down to finish writing this. . .",

  },
  {
    text: "Shoot. I can't even remember my name. . ."
  },
  
];

setFutureProperties("bg");
setFutureProperties("bgm");
setFutureProperties("speaker");
setFutureProperties("sprite");
setFutureProperties("spriteLeft");
setFutureProperties("spriteRight");

function setFutureProperties(key) {
  let cache = "";
  for (let obj of script) {
    if (obj[key] || obj[key] === "") {
      cache = obj[key];
    } else {
      obj[key] = cache;
    }
  }
}
export default script;

