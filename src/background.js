const imgs = ["UNIVERSE1.jpg", "UNIVERSE2.jpg", "UNIVERSE3.jpg"];

const randomNum = Math.floor(Math.random() * imgs.length);
const bg = imgs[randomNum];

const bgImg = document.createElement("style");

bgImg.innerText = `body {background-image: url(img/${bg}); background-position: center;  background-repeat: no-repeat;  background-size: cover; }`;

document.head.appendChild(bgImg);
