import { Carte } from "./Objects/Carte.js";
import { Mario } from "./Objects/Mario.js";
import { Chemin } from "./Objects/Chemin.js";
import { NaiveRes } from "./Objects/NaiveRes.js";
import { Canvas } from "./Objects/Canvas.js";

let carte = new Carte(200);
let canvas = new Canvas();
let naivePath = new NaiveRes(carte).resultat();

canvas.animatedPath(naivePath);

var can = document.querySelector('canvas');
let c = can.getContext('2d');

