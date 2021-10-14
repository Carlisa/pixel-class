"use strict";

const Pixel = require("../lib");

let p = new Pixel(42, 7, 6, 0.5);
console.log("color: ",p);
console.log("intensity: ",p.intensity());
console.log("hex: ",p.toHex());
console.log("rgba string: ",p.toRGBAString());
