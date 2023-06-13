
// bg
const bedroom = require("./assets/background/bedroom.png");
const cafe = require("./assets/background/cafe.png");
const gameover = require("./assets/background/gameover.png")
const nextday = require("./assets/background/nextday.png")


// bgm
const chill = require("./assets/bgm/chill-vibes.mp3");
const opps = require("./assets/bgm/like-a-river-danijel-zambo-main-version-03-29-918.mp3")
const happy = require("./assets/bgm/happy.mp3")

// speakers
const mc = "Hollis";
const dog = "Khan";
const li = "Ever";
const sc = "Skye";

// sprites
const bn = require("./assets/sprite/Spritebox-neutral.png");
const bh = require("./assets/sprite/Spritebox-happy.png");
const bp = require("./assets/sprite/Spritebox-pout.png");
const hollis = require("./assets/sprite/Hollis.png")
const khan = require("./assets/sprite/Khan.png")
const ever = require("./assets/sprite/Ever.png")
const skye = require("./assets/sprite/Skye.png")




let script = [

  {
    bg: bedroom,
    bgm: chill,
    sprite: hollis,
    speaker: "",
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
    text: "I can barely even remember my name..."
  },
  { 
    speaker: mc,
    text: "Holly?"
  },
  { 
    speaker: "",
    text: "No, that doesn't seem right..."
  }, 
  { 
    text: "Writing for hours is really messing with my memory."
  },  
  { sprite: khan, 
    speaker: dog,
    text: "ARF!"
  },
  {
    speaker: mc,
    text: "Heya, don't worry. I could never forget you!"
  },
  {  
    speaker: "",
    sprite: "",
    text: "I am lying."
  },
  {  
    text: "I couldn't remember this dog's name even if my life depended on it, but I'd sooner die before breaking its heart."
  },
  {
    text: "Screw it, we are doin' a hail Mary!"
  },    
  {
    speaker: mc,
    sprite: hollis,
    text: "Heya...Khan...!"
  },
  {
  sprite: "",  
  spriteRight:hollis,
   spriteLeft: khan, 
   speaker: dog, 
   text: "Ruff..",
  },
  {
    speaker: "",
    text: "The dog huffs happily. I guess my hail mary of a guess was right."
  },
  {
    text: "Nice."
  },
  {
    text: "I pet Khan behind the ears"
  },
  {
    spriteLeft: "",
    text: "I refocus my mind on the computer screen once again."

  },
  {
    text: "I finish up the few last minute edits that my editor Skye sent me."
  },
  {
    text: "She is a really trooper dealing with my procrastinating behaviour all the time. She's a real gem."
  },
  {
    text: "Not that I would ever tell her that."
  },
  {
    text: "It would go to her head. Can't have that..."
  },
  {
    text: "I press the 'post' button and take a deep sigh of relief."
  },
  {
    speaker: mc,
    text: "Phew, done in the nick of time."
  },
  {
    speaker: "",
    text: "I was worried I'd miss my weekly post for my online story."
  },
  {
   text: "If I did, I'm sure the algorithm would wreak havoc on my views."
  },
  {
    text: "Now that I finally finished and the adrenaline wore off I could feel the lack of sleep starting to take a toll on my body."
  },
  {
    text: "I feel a stir at my feet as a warm fluffy presence twitches."
  },
  {
    spriteLeft: khan,
    text: "Khan is still below me peacefully blissfully unaware of the stress of deadlines or being the victim of an ever changing cruel algorithm"
  },
  {
    spriteLeft: "",
    speaker: mc,
    text: "I can't believe I'm jealous of a dog."
  },
  {
    text: "Man, I need sleep…"
  },
  {
    text: "Khan hearing my voice begins to awake."
  },
  {
   spriteLeft: khan,
   speaker: dog,
    text: "Arrooo..."
  },
  {
    speaker: "",
    text: "Khan yawns softly as they stretch across my feet below."
  },
  {
    speaker: mc,
    spriteRight: hollis,
    text: "Sorry, for waking you up."
  },
  {
    speaker: "",
    text: "Khan looks at me with big wet eyes before lethargically resting their head on my feet acting as the world's cutest footwarmer."
  },
  {
    text: "I ruffled the fur behind their ears gently as they closed their eyes and leaned against my hand, before I go back to look at the computer"
  },
  {
    spriteLeft: "",
    spriteRight:"",
    text: "I see a few notifications from my loyal subscribers who I can only guess have finished reading the latest chapter.    "
  },
  {
    text: "How they could read that fast is beyond me."
  },
  {
    text: "I click on the notifications to see the comments"
  },
  {
    speaker: mc,
    sprite: hollis,
    text: "'I really loved the chapter, and I’m really glad that @hollisbackgrrl is hinting at a romance between Anora and Finn but…'"
  },
  {
    text: "'I can’t help but feel that @hollisbackgrrl's way of writing two people falling in love is a bit… lacking?'"
  },
  {
    speaker: "",
    sprite: "",
    text: "I look at several other comments parroting those sentiments."
  },
  {
    speaker: mc,
    sprite: hollis,
    text: "'I love this author, but maybe romance isn’t really her schtick…'"
  },
  {
    speaker: "",
    sprite: "",
    text: "Ok, that one hurt."
  },
  {
    text: "I don’t know how much time I spent scrolling through comment after comment."
  },
  {
    text: "All I know is when I was done birds were already singing to let me know the sun had risen and my confidence was gone."
  },
  {
    text: "My already sleep deprived body felt like I was moving in slow motion. I was not in the mood to deal with the day."
  },
  {
    text: "Unfortunately, I still had more work to do. I couldn’t slack off"
  },
  {
    speaker: mc,
    sprite: hollis,
    text: "If we are to survive this day we need coffee…"
  },
  {
    text: "Lots of it."
  },
  {
    sprite:"",
    spriteLeft: khan,
    spriteRight: hollis,
    speaker:dog,
    text: "Arf"
  },
  {
    speaker:mc,
    text: " I do not have an addiction."
  },
  {
    text: " I just need it to feel a semblance of normalcy and if I don’t I am not liable for the destruction and chaos I will cause in my wake."
  },
  {
    speaker:dog,
    text: "Arrr.."
  },
  {
    speaker: mc,
    text: "Ok, I hear it…"
  },
  {
    text: "Fine, we'll go to sleep THEN we will get coffee."
  },
  {
    speaker: dog,
    text: "Arf"
  },
  {
    spriteLeft:"",
    spriteRight:"",
    bg: nextday,
    bgm: "",
    },
  {
    bg: cafe,
    bgm: happy,
  },
  {
    speaker:"",
    text: "I push open the door to my favourite coffee shop, Cool Beans.",
  },
  {
    text: "The name might be lame, but the coffee more than makes up for it"
  },
  {
    text: "The ambience is also perfect for working. It’s quiet enough to focus, but not so quiet that it's unsettling."
  },
  {
    text: "Plus…"
  },
  {
    speaker: dog,
    text: "Arf!"
  },
  {
    speaker:"",
    text: "They allow dogs"
  },
  {
    text: "This place is the best. Which is why I spend most of my day here planning, editing, writing, and on occasion slowly descending into madness."
  },
  {
    text: "You know, normal writer things."
  },
  {
    text: "The smell of coffee strengthens as I notice a fresh cup appears by laptop."
  },
  {
    speaker: li,
    text: " I sometimes worry I’m enabling your caffeine addiction."
  },
  {
    sprite: ever,
    speaker:"",
    text: "I look up and my eyes are met with Ever's perpetual cheshire smile"
  },
  {
    text: "They’re the owner of Cool Beans and are usually found avoiding work by sitting and chatting with me.."
  },
  {
    spriteLeft: ever,
    sprite:"",
    spriteRight: hollis,
    speaker: mc,
    text: "Oh, you’re delivering my coffee now? Should I feel touched or are you after something?"
  },
  {
    speaker: "",
    text: "I stare at my coffee and swirl it. Half expecting it to be poisoned or something."
  },
  {
    speaker: li,
    text: "I’m hurt"
  },
  {
    text: "Here I am doing a nice thing for one of our loyal customers, and you think I have some kind of ulterior motive."
  },
  {
    speaker: "",
    text: "They are trying to hide from the manager again…"
  },
  {
    text: "Despite being the boss, they tend to shirk their responsibilities and their own manager has to reprimand them…"
  },
  {
    speaker: mc,
    text: "If you wanted an excuse to shirk your responsibilities you didn’t need to get me a coffee."
  },
  {
    text: "Though it is appreciated and I will bite you if you try to take it back."
  },
  {
    speaker: "",
    text: "This liquid gold mine now"
  },
  {
    speaker: li,
    text: "Noted."
  },
  {
    speaker: "",
    text: "Ever lets out a small chuckle and gives me a small smirk."
  },
  {
    text: "I return his smirk with one of my own and we just sit comfortably for a beat."
  },
  {
    text: "Ever coughs and shifts a bit in their seat"
  },
  {
    speaker: li,
    text: "So…"
  },
  {
    text: "What’s up with you? You got bags under your eyes so dark they make you look like a little tanuki.."
  },
  {
    speaker: mc,
    text: "Hey, don’t insult me by using one of my favourite animals!"
  },
  {
    speaker: li,
    text: " I meant it looks cute on you!"
  },
  {
    speaker: mc,
    text: "Sure…"
  },
  {
    text: "Don’t you have someone else to bother, Ever?"
  },
  {
    speaker: li,
    text: "Nah, everyone else here is busy."
  },
  {
    speaker: mc,
    text: "And I’m not?"  
  },
  {
    speaker: "",
    text: "Ever shrugs."
  },
  {
    speaker: li,
    text: "I mean, is writing a real job or a hobby that you get paid for?"
  },
  {
    speaker: mc,
    text: " I’ll keep that in mind next time I have writer's block, that it’s just a hobby. Thanks."
  },
  {
    speaker: "",
    text: "I glare at them as I sip"
  },
  {
    text: "Ever sits in the chair across from me still looking intently at my face"
  },
  {
    speaker: mc,
    text: "What?"
  },
  {
    speaker: li,
    text: "You never answered me."
  },
  {
    text: "You look tired. Seriously, what’s up?"
  },
  {
    speaker: "",
    text: "I take a long sigh"
  },  
  {
    speaker: mc,
    text: "I’ve been looking at some of the comments on my last chapter and let’s say the fans were not too impressed."
  },
  {
    speaker: li,
    text: "Oh, you're talking about the romance budding between Anora and Fin?"
  },
  {
    speaker: "",
    text: "I almost choke on my coffee"
  },
  {
    speaker: mc,
    text: "YOU READ MY STORY? "
  },
  // {
  //   speaker: li,
  //   text: "Chill. Don’t make a big deal out of it. You mentioned the title once, so I looked it up one time when I got bored."
  // },
  // {
  //   speaker: mc,
  //   text: "And you’re already on the latest chapter? Interesting…"
  // },
  // {
  //   speaker: "",
  //   text: "I sip my coffee with a smug smirk and Ever looks away with a pout"
  // },
  // {
  //   speaker: li,
  //   text: "Whatever."
  // },
  // {
  //   speaker: mc,
  //   text: "Oh, so you just casually binge read things?"
  // },
  // {
  //   speaker: "",
  //   text: "Ever ears start turning a shade of pink and I giving them a teasing smile"
  // },
  // {
  //   speaker: li,
  //   text: "Fine, I admit your writing isn’t the worst I’ve ever read. Happy"
  // },
  // {
  //   speaker: mc,
  //   text: "Immensely."
  // },
  // {
  //   speaker: "",
  // },
  // {
  //   text: ""
  // },
  // {
  //   text: ""
  // },
  // {
  //   text: ""
  // },
  // {
  //   text: ""
  // },
  // {
  //   text: ""
  // },
  // {
  //   text: ""
  // },
  // {
  //   text: ""
  // },
  // {
  //   text: ""
  // },
  // {
  //   text: ""
  // },
  // {
  //   text: ""
  // },
  // {
  //   text: ""
  // },
  // {
  //   text: ""
  // },
  // {
  //   text: ""
  // },
  // {
  //   text: ""
  // },
  // {
  //   text: ""
  // },
  // {
  //   text: ""
  // },
  // {
  //   text: ""
  // },
{ spriteLeft: "",
  spriteRight: "",
  bg:gameover,
  text:"To continued..."
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

