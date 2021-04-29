var x = 0;
var y = 100;
var speed = 10;

var cloud_message;
var messageRecieved = "";

const player = document.getElementById("player");
const bullets = document.getElementById("bullets");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function checkMessage() {
  if (messageRecieved !== cloud_message) {
    document.getElementById("messageBox").innerText = cloud_message;
    messageRecieved = cloud_message;
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key == 'w') {
    y = y - speed;
    player.style.paddingTop = y + 'px';
  }

  if (event.key == 's') {
    y = y + speed;
    player.style.paddingTop = y + 'px';
  }

  if (event.key == 'd') {
    x = x + speed;
    player.style.paddingLeft = x + 'px';
  }

  if (event.key == 'a') {
    x = x - speed;
    player.style.paddingLeft = x + 'px';
  }

  if (event.key == 'm') {
    cloud_message = prompt("message?");
  }

  if (event.code == 'Space') {
    let bullet = document.createElement('h1');
    bullet.innerText = '-';
    bullet.style.position = "absolute";
    bullet.style.paddingLeft = x + 'px';
    bullet.style.paddingTop = y - 2 + 'px';
    bullets.appendChild(bullet);
    bulletmove(bullet);
  }
});

async function bulletmove(bullet) {
  for (let bulletX = x + 150; bulletX < 1350; bulletX = bulletX + 5) {
    bullet.style.paddingLeft = bulletX + 'px';
    await sleep(.1);
  }
}

setInterval(checkMessage, 1000);
