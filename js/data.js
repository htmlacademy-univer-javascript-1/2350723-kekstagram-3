import {getRandomInt} from './util.js'

let info = [];

for(let i = 0; i < 25; i++){
  info[i] = {
    id: i+1,
    url: 'photos/' + (i+1) + '.jpg',
    description: 'ФОТО',
    likes: getRandomInt(15, 200),
    comments: getRandomInt(0, 200)
  };
}

export {info};
