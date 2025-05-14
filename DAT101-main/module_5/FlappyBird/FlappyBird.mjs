"use strict";
import lib2d from "../../common/libs/lib2d.mjs";
import libSound from "../../common/libs/libSound.mjs";
import libSprite from "../../common/libs/libSprite.mjs";
import THero from "./hero.mjs";
import TObstacle from "./obstacle.mjs";
import { TBait } from "./bait.mjs";
import { TMenu } from "./menu.mjs";

//--------------- Objects and Variables ----------------------------------//
const chkMuteSound = document.getElementById("chkMuteSound");
const rbDayNight = document.getElementsByName("rbDayNight");
const cvs = document.getElementById("cvs");
const spcvs = new libSprite.TSpriteCanvas(cvs);

export const SpriteInfoList = {
  hero1:        { x:    0, y: 545, width:   34, height:  24, count:  4 },
  hero2:        { x:    0, y: 569, width:   34, height:  24, count:  4 },
  hero3:        { x:    0, y: 593, width:   34, height:  24, count:  4 },
  obstacle:     { x:    0, y:   0, width:   52, height: 320, count:  4 },
  background:   { x:  246, y:   0, width:  576, height: 512, count:  2 },
  flappyBird:   { x:    0, y: 330, width:  178, height:  50, count:  1 },
  ground:       { x:  246, y: 512, width: 1152, height: 114, count:  1 },
  numberSmall:  { x:  681, y: 635, width:   14, height:  20, count: 10 },
  numberBig:    { x:  422, y: 635, width:   24, height:  36, count: 10 },
  buttonPlay:   { x: 1183, y: 635, width:  104, height:  58, count:  1 },
  gameOver:     { x:    0, y: 384, width:  226, height: 114, count:  1 },
  infoText:     { x:    0, y: 630, width:  200, height:  55, count:  2 },
  food:         { x:    0, y: 696, width:   70, height:  65, count: 34 },
  medal:        { x:  985, y: 635, width:   44, height:  44, count:  4 },
};

export const EGameStatus = { idle: 0, getReady: 1, playing: 2, gameOver: 3 };

export const GameProps = {
  soundMuted: false,
  dayTime: true,
  speed: 1,
  status: EGameStatus.idle,
  prevIsDead: false,
  soundPlayed: false, // track if game-over tune has played
  background: null,
  ground: null,
  hero: null,
  obstacles: [],
  baits: [],
  menu: null,
  score: 0,
  bestScore: 0,
  sounds: { countDown: null, food: null, gameOver: null, dead: null, running: null, flap: null },
};

//--------------- Functions ----------------------------------------------//

/**
 * Plays a sound, cloning the audio element for overlapping playback.
 */
function playSound(source) {
  if (GameProps.soundMuted || !source) return;
  const audioElem = source.audio || source;
  let clip;
  if (typeof audioElem.cloneNode === "function") {
    clip = audioElem.cloneNode(); // clone for overlap
    clip.volume = audioElem.volume;
  } else {
    clip = audioElem;
    clip.currentTime = 0;
  }
  clip.currentTime = 0;
  clip.play();
}

function loadGame() {
  console.log("Game ready to load");
  cvs.width = SpriteInfoList.background.width;
  cvs.height = SpriteInfoList.background.height;

  let pos = new lib2d.TPosition(0, 0);
  GameProps.background = new libSprite.TSprite(spcvs, SpriteInfoList.background, pos);
  pos.y = cvs.height - SpriteInfoList.ground.height;
  GameProps.ground = new libSprite.TSprite(spcvs, SpriteInfoList.ground, pos);
  pos = new lib2d.TPosition(100, 100);
  GameProps.hero = new THero(spcvs, SpriteInfoList.hero1, pos);

  GameProps.menu = new TMenu(spcvs);

  // Load sounds (using Audio for dead and gameOver for overlap support)
  const S = GameProps.sounds;
  S.running = new libSound.TSoundFile("./Media/running.mp3");
  S.running.setVolume?.(0.4);
  S.countDown = new libSound.TSoundFile("./Media/countDown.mp3");
  S.flap = new Audio("./Media/wingFlap.mp3");
  S.flap.volume = 0.4;
  S.food = new Audio("./Media/food.mp3");
  S.food.volume = 0.6;
  // Use HTMLAudioElement for death & game-over to ensure cloneNode support
  S.dead = new Audio("./Media/heroIsDead.mp3");
  S.dead.volume = 0.8;
  S.gameOver = new Audio("./Media/gameOver.mp3");
  S.gameOver.volume = 0.8;

  requestAnimationFrame(drawGame);
  setInterval(animateGame, 1000 / 60);
  window.addEventListener("baitEaten", () => playSound(GameProps.sounds.food));
}

function drawGame() {
  spcvs.clearCanvas();
  if (GameProps.background.setFrame) {
    GameProps.background.setFrame(GameProps.dayTime ? 0 : 1);
  }
  GameProps.background.draw();
  drawBait();
  drawObstacles();
  GameProps.ground.draw();
  GameProps.hero.draw();
  GameProps.menu.draw();
  requestAnimationFrame(drawGame);
}

function drawObstacles() {
  GameProps.obstacles.forEach((o) => o.draw());
}
function drawBait() {
  GameProps.baits.forEach((b) => b.draw());
}

function animateGame() {
  switch (GameProps.status) {
    case EGameStatus.playing:
      GameProps.ground.translate(-GameProps.speed, 0);
      if (GameProps.ground.posX <= -SpriteInfoList.background.width) GameProps.ground.posX = 0;
      GameProps.hero.update();

      // Death transition: trigger once
      if (GameProps.hero.isDead && !GameProps.prevIsDead) {
        // Play death sound immediately on collision
        playSound(GameProps.sounds.dead);
        // Switch to gameOver state
        GameProps.status = EGameStatus.gameOver;
        // Play a distinct game-over tune
        playSound(GameProps.sounds.gameOver);
      }
      GameProps.prevIsDead = GameProps.hero.isDead;

      // Obstacles update & scoring
      GameProps.obstacles.forEach((ob) => {
        ob.update();
        if (ob.right < GameProps.hero.left && !ob.hasPassed) {
          GameProps.menu.incScore(20);
          ob.hasPassed = true;
        }
      });
      GameProps.obstacles = GameProps.obstacles.filter((ob) => ob.posX >= -100);

      // Baits update & scoring
      const center = GameProps.hero.getCenter();
      GameProps.baits.forEach((bait, i) => {
        bait.update();
        if (center.distanceToPoint(bait.getCenter()) < 20) {
          playSound(GameProps.sounds.food);
          GameProps.menu.incScore(10);
          GameProps.baits.splice(i, 1);
        }
      });
      break;

    case EGameStatus.gameOver:
      // On game over, freeze the hero
      GameProps.hero.animateSpeed = 0;
      GameProps.hero.update();
      // Play game-over tune once
      if (!GameProps.soundPlayed) {
        playSound(GameProps.sounds.gameOver);
        GameProps.soundPlayed = true;
      }
      break;

    case EGameStatus.idle:
      GameProps.hero.updateIdle();
      break;

    case EGameStatus.getReady:
      break;
  }
}

function spawnObstacle() {
  if (GameProps.status !== EGameStatus.playing) return;
  GameProps.obstacles.push(new TObstacle(spcvs, SpriteInfoList.obstacle));
  setTimeout(spawnObstacle, Math.random() * 5000 + 2000);
}
function spawnBait() {
  if (GameProps.status !== EGameStatus.playing) return;
  const p = new lib2d.TPosition(SpriteInfoList.background.width, Math.random() * (cvs.height - 200) + 100);
  GameProps.baits.push(new TBait(spcvs, SpriteInfoList.food, p));
  setTimeout(spawnBait, Math.random() * 1000 + 500);
}

export function startGame() {
  // Reset flags for new play
  GameProps.soundPlayed = false; // game over sound

  GameProps.status = EGameStatus.playing;
  GameProps.prevIsDead = false;
  GameProps.hero = new THero(spcvs, SpriteInfoList.hero1, new lib2d.TPosition(100, 100));
  GameProps.obstacles = [];
  GameProps.baits = [];
  GameProps.menu.reset();
  spawnObstacle();
  spawnBait();
  playSound(GameProps.sounds.running);
  playSound(GameProps.sounds.countDown);
}

//--------------- Event Handlers -----------------------------------------//
function setSoundOnOff() {
  GameProps.soundMuted = chkMuteSound.checked;
  console.log(GameProps.soundMuted ? "Sound muted" : "Sound on");
}
export function setDayNight() {
  if (rbDayNight[0].checked) {
    GameProps.background.index = 0;
    GameProps.obstacles.forEach((o) => o.updateIndex(3, 2));
    GameProps.dayTime = true;
    console.log("Day time");
  } else {
    GameProps.dayTime = false;
    GameProps.background.index = 1;
    GameProps.obstacles.forEach((o) => o.updateIndex(1, 0));
    console.log("Night time");
  }
}
function onKeyDown(e) {
  if (e.code === "Space" && !GameProps.hero.isDead) {
    GameProps.hero.flap();
    playSound(GameProps.sounds.flap);
  }
}
chkMuteSound.addEventListener("change", setSoundOnOff);
rbDayNight.forEach((rb) => rb.addEventListener("change", setDayNight));
spcvs.loadSpriteSheet("./Media/FlappyBirdSprites.png", loadGame);
document.addEventListener("keydown", onKeyDown);
