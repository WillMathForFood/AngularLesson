import {LikeComponent} from './LikeComponent';

let likes = new LikeComponent(7, true);
likes.click();
console.log(`Likes count: ${likes.count}, selected: ${likes.selected}`);