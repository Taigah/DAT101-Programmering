"use strict";
import lib2d from "../../common/libs/lib2d.mjs";
import { SheetData } from "./game.mjs";
import libSprite from "../../common/libs/libSprite.mjs";

/* Use this file to create the menu for the snake game. */

export class TMenu {
  #spPlay;
  #spNumber;
  #spInfoText;
  #spGameOver;
  #spcvs;
  #activeSprite;
  #posScore;
  #posPlayScore;

  constructor(aSpriteCanvas) {
      this.#spcvs = aSpriteCanvas;
      GameProps.status = EGameStatus.idle;
  
      pos.y = 260;
      pos.x = 245;
      this.#spPlay = new libSprite.TSprite(aSpriteCanvas, SheetData.Play, pos);
  
      pos.x = 285;
      pos.y = 180;
      this.#spNumber = new libSprite.TSprite(aSpriteCanvas, SheetData.Number, pos);
  
      pos.x = 185;
      pos.y = 130;
      this.#spGameOver = new libSprite.TSprite(aSpriteCanvas, SheetData.GameOver, pos);
  
  
      this.#posScore = new lib2d.TPosition(383, 181);
      this.#posPlayScore = new lib2d.TPosition(75, 50);
    }
}