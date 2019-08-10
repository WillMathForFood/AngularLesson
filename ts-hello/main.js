"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeComponent_1 = require("./LikeComponent");
var likes = new LikeComponent_1.LikeComponent(7, true);
likes.click();
console.log("Likes count: " + likes.count + ", selected: " + likes.selected);
