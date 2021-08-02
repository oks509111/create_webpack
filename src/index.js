import House from "./House.js";
import "./assets/styles/style.css";
import minionusImage from "./assets/img/minions_PNG17.png";

const house = new House (12,5,3);

house.getInfo();

const img = document.createElement('img');
img.src = minionusImage;

document.body.appendChild(img);