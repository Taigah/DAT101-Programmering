"use strict";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import lib2d from "../../common/libs/lib2d_v2.mjs";

class TGameBoard {
    #sptl = null; // TopLeft
    #sptm = null; // TopMiddle
    #sptr = null; // TopRight
    #splm = null; // LeftMiddle
    #sprm = null; // RightMiddle
    #spbl = null; // BottomLeft
    #spbm = null; // BottomMiddle
    #spbr = null; // BottomRight
    constructor(aSpcvs, aSpriteInfo){
        const pos = new lib2d.TPoint(0, 0);
        this.#sptl = new libSprite.TSprite(aSpcvs, aSpriteInfo.Topleft, pos);
        pos.x = aSpriteInfo.Topleft.width;
        this.#sptm = new libSprite.TSprite(aSpcvs, aSpriteInfo.ToplMiddle, pos);
        pos.x += aSpriteInfo.ToplMiddle.width;
        this.#sptr = new libSprite.TSprite(aSpcvs,aSpriteInfo.TopRight, pos);
        pos.x += aSpriteInfo.TopRight.width;


    }
    
    draw(){
        this.#sptl.draw();
    }

};