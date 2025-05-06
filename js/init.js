import {Picture} from './PictureClass.js';
import { Navigation } from './js.js';


const arrowNext = document.querySelector('.arrowNext');
const arrowPrev = document.querySelector('.arrowPrev');

const picture = new Picture(arrowNext, arrowPrev);

const nav = new Navigation();
