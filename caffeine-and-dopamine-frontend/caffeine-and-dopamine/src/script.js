// bg
const bedroom = require("./assets/background/bedroom.png");
const entrance = require("./assets/background/cafe.png");
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
    text: "Testing...123..."
  }
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
