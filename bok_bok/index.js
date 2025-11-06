// #################### Part 1: Birthday Animation ####################

const wishes = [
  "To my lovely girlfriend...",
  "Happy Birthday, my love! 🎂",
  "Every moment with you is a treasure. ✨",
  "You are the brightest star in my sky. 🌟",
  "May your day be as beautiful as your smile. 😊",
  "I love you more than words can say. 💖",
  "Forever and always, yours. ❤️"
];

function createStars() {
  const starsContainer = document.createElement("div");
  starsContainer.className = "stars";
  for (let i = 0; i < 200; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.width = `${Math.random() * 3}px`;
    star.style.height = star.style.width;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.setProperty("--duration", `${Math.random() * 3 + 1}s`);
    starsContainer.appendChild(star);
  }
  document.body.appendChild(starsContainer);
}

function createEmoji() {
  const emojis = ["💖", "⭐", "✨", "🎉", "🎂", "🎈"];
  const emoji = document.createElement("div");
  emoji.className = "emoji";
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * window.innerWidth + "px";
  emoji.style.top = "-50px";
  document.body.appendChild(emoji);
  const animation = emoji.animate(
    [
      {
        transform: "translateY(0) rotate(0deg)"
      },
      {
        transform: `translateY(${window.innerHeight + 50}px) rotate(${Math.random() * 360}deg)`
      }
    ],
    {
      duration: 3000,
      easing: "linear"
    }
  );
  animation.onfinish = () => emoji.remove();
}

function stopAllMusic() {
  const audios = ["bgMusic"];
  audios.forEach((id) => {
    const audio = document.getElementById(id);
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  });
}

function playAudio(audioId) {
  const audio = document.getElementById(audioId);
  if (audio) {
    audio.volume = 0.5;
    audio.play().catch((err) => console.log("Audio play failed:", err));
  }
}
let emojiInterval;
async function typeWriter(text) {
  const wishesElement = document.getElementById("wishes");
  wishesElement.style.opacity = 1;
  wishesElement.innerHTML = "";
  wishesElement.className = "wishes neon-text";
  for (let char of text) {
    wishesElement.innerHTML += char;
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
  await new Promise((resolve) => setTimeout(resolve, 1500));
}
let isMuted = false;
const muteButton = document.getElementById("muteButton");
muteButton.addEventListener("click", () => {
  const audios = ["bgMusic"];
  isMuted = !isMuted;
  audios.forEach((id) => {
    const audio = document.getElementById(id);
    if (audio) {
      audio.muted = isMuted;
    }
  });
  // Update button text
  muteButton.textContent = isMuted ? "🔇" : "🔊";
});

document.getElementById("startBtn").addEventListener("click", async () => {
  document.getElementById("startBtn").style.display = "none";
  document.getElementById("wishesContainer").classList.remove("hidden");
  const bgAudio = document.getElementById("bgMusic");
  bgAudio.loop = true;
  bgAudio.muted = isMuted;
  try {
    const playPromise = bgAudio.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.log("Audio play failed:", error);
      });
    }
  } catch (err) {
    console.log("Audio play failed:", err);
  }
  emojiInterval = setInterval(createEmoji, 300);
  while (true) {
    for (let wish of wishes) {
      await typeWriter(wish);
    }
  }
});

createStars();
let honey = document.getElementById("body");
function fullScreen() {
  honey.requestFullscreen();
}


// helper functions
const PI2 = Math.PI * 2;
const random = (min, max) => (Math.random() * (max - min + 1) + min) | 0;
const timestamp = (_) => new Date().getTime();

function drawHeart(ctx, x, y, width, height, color) {
  ctx.save();
  ctx.beginPath();
  const topCurveHeight = height * 0.3;
  ctx.moveTo(x, y + topCurveHeight);
  // top left curve
  ctx.bezierCurveTo(
    x, y,
    x - width / 2, y,
    x - width / 2, y + topCurveHeight
  );

  // bottom left curve
  ctx.bezierCurveTo(
    x - width / 2, y + (height + topCurveHeight) / 2,
    x, y + (height + topCurveHeight) / 2,
    x, y + height
  );

  // bottom right curve
  ctx.bezierCurveTo(
    x, y + (height + topCurveHeight) / 2,
    x + width / 2, y + (height + topCurveHeight) / 2,
    x + width / 2, y + topCurveHeight
  );

  // top right curve
  ctx.bezierCurveTo(
    x + width / 2, y,
    x, y,
    x, y + topCurveHeight
  );

  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}

function getRandomParticleShape() {
  const rand = Math.random();
  if (rand < 0.5) {
    return 'circle';
  } else {
    return 'heart';
  }
}

// container
class Birthday {
  constructor() {
    this.resize();

    // create a lovely place to store the firework
    this.fireworks = [];
    this.counter = 0;
  }

  resize() {
    this.width = canvas.width = window.innerWidth;
    let center = (this.width / 2) | 0;
    this.spawnA = (center - center / 4) | 0;
    this.spawnB = (center + center / 4) | 0;

    this.height = canvas.height = window.innerHeight;
    this.spawnC = this.height * 0.1;
    this.spawnD = this.height * 0.5;
  }

  onClick(evt) {
    let x = evt.clientX || (evt.touches && evt.touches[0].pageX);
    let y = evt.clientY || (evt.touches && evt.touches[0].pageY);

    let count = random(3, 5);
    for (let i = 0; i < count; i++)
      this.fireworks.push(
        new Firework(
          random(this.spawnA, this.spawnB),
          this.height,
          x,
          y,
          random(0, 260),
          random(30, 110)
        )
      );

    this.counter = -1;
  }

  update(delta) {
    ctx.globalCompositeOperation = "hard-light";
    ctx.fillStyle = `rgba(20,20,20,${7 * delta})`;
    ctx.fillRect(0, 0, this.width, this.height);

    ctx.globalCompositeOperation = "lighter";
    for (let firework of this.fireworks) firework.update(delta);

    // if enough time passed... create new new firework
    this.counter += delta * 3; // each second
    if (this.counter >= 1) {
      this.fireworks.push(
        new Firework(
          random(this.spawnA, this.spawnB),
          this.height,
          random(0, this.width),
          random(this.spawnC, this.spawnD),
          random(0, 360),
          random(30, 110)
        )
      );
      this.counter = 0;
    }

    // remove the dead fireworks
    if (this.fireworks.length > 1000)
      this.fireworks = this.fireworks.filter((firework) => !firework.dead);
  }
}

class Firework {
  constructor(x, y, targetX, targetY, shade, offsprings, shape = 'circle') {
    this.dead = false;
    this.offsprings = offsprings;

    this.x = x;
    this.y = y;
    this.targetX = targetX;
    this.targetY = targetY;

    this.shade = shade;
    this.history = [];
    this.shape = shape;
  }
  update(delta) {
    if (this.dead) return;

    let xDiff = this.targetX - this.x;
    let yDiff = this.targetY - this.y;
    if (Math.abs(xDiff) > 3 || Math.abs(yDiff) > 3) {
      // is still moving
      this.x += xDiff * 2 * delta;
      this.y += yDiff * 2 * delta;

      this.history.push({
        x: this.x,
        y: this.y
      });

      if (this.history.length > 20) this.history.shift();
    } else {
      if (this.offsprings && !this.madeChilds) {
        // Heart-shaped explosion
        let babies = this.offsprings;
        for (let i = 0; i < babies; i++) {
          let t = (PI2 * i) / babies;
          let scale = this.offsprings / 18;
          let heartX = 16 * Math.pow(Math.sin(t), 3);
          let heartY = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));

          let targetX = this.x + heartX * scale;
          let targetY = this.y + heartY * scale;
          birthday.fireworks.push(
            new Firework(this.x, this.y, targetX, targetY, this.shade, 0, getRandomParticleShape())
          );
        }
      }
      this.madeChilds = true;
      this.history.shift();
    }

    if (this.history.length === 0) this.dead = true;
    else if (this.offsprings) {
      for (let i = 0; this.history.length > i; i++) {
        let point = this.history[i];
        ctx.beginPath();
        ctx.fillStyle = "hsl(" + this.shade + ",100%," + i + "%)";
        ctx.arc(point.x, point.y, 1, 0, PI2, false);
        ctx.fill();
      }
    } else {
      if (this.shape === 'circle') {
        ctx.beginPath();
        ctx.fillStyle = "hsl(" + this.shade + ",100%,50%)";
        ctx.arc(this.x, this.y, 1, 0, PI2, false);
        ctx.fill();
      } else if (this.shape === 'heart') {
        drawHeart(ctx, this.x, this.y, 3, 3, "hsl(" + this.shade + ",100%,50%)");
      }
    }
  }
}

let canvas = document.getElementById("birthday");
let ctx = canvas.getContext("2d");

let then = timestamp();

let birthday = new Birthday();
window.onresize = () => birthday.resize();
document.onclick = (evt) => birthday.onClick(evt);
document.ontouchstart = (evt) => birthday.onClick(evt);
(function loop() {
  requestAnimationFrame(loop);

  let now = timestamp();
  let delta = now - then;

  then = now;
  birthday.update(delta / 1000);
})();


// #################### Part 2: Second Section Animation ####################

const reasons = [
    { 
        text: "You are the most amazing person I know, and I'm so lucky to have you as my girlfriend. 💖", 
        emoji: "🥰",
        gif: "gif1.gif"
    },
    { 
        text: "Every day with you is a new adventure, and I can't wait to see what the future holds for us. 🌸", 
        emoji: "💑",
        gif: "gif2.gif"
    },
    { 
        text: "You make my world a better place just by being in it. I love you more than words can say. ✨", 
        emoji: "💕",
        gif: "gif1.gif"
    },
    { 
        text: "Happy birthday to the one who holds my heart. I hope your day is as beautiful as you are. 🥳", 
        emoji: "😘",
        gif: "gif2.gif"
    }
];

// State management
let currentReasonIndex = 0;
const reasonsContainer = document.getElementById('reasons-container');
const shuffleButton = document.querySelector('.shuffle-button');
const reasonCounter = document.querySelector('.reason-counter');
let isTransitioning = false;

// Create reason card with gif
function createReasonCard(reason) {
    const card = document.createElement('div');
    card.className = 'reason-card';
    
    const text = document.createElement('div');
    text.className = 'reason-text';
    text.innerHTML = `${reason.emoji} ${reason.text}`;
    
    const gifOverlay = document.createElement('div');
    gifOverlay.className = 'gif-overlay';
    gifOverlay.innerHTML = `<img src="${reason.gif}" alt="Friendship Memory">`;
    
    card.appendChild(text);
    card.appendChild(gifOverlay);
    
    gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "back.out"
    });

    return card;
}

// Display new reason
function displayNewReason() {
    if (isTransitioning) return;
    isTransitioning = true;

    if (currentReasonIndex < reasons.length) {
        const card = createReasonCard(reasons[currentReasonIndex]);
        reasonsContainer.appendChild(card);
        
        // Update counter
        reasonCounter.textContent = `Reason ${currentReasonIndex + 1} of ${reasons.length}`;
        
        currentReasonIndex++;

        // Create floating elements
        createFloatingElement();
        
        setTimeout(() => {
            isTransitioning = false;
        }, 500);
    } else {
        // After the last reason, hide the button
        gsap.to(shuffleButton, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                shuffleButton.style.display = 'none';
            }
        });
    }
}

// Initialize button click
shuffleButton.addEventListener('click', () => {
    gsap.to(shuffleButton, {
        scale: 0.9,
        duration: 0.1,
        yoyo: true,
        repeat: 1
    });
    displayNewReason();
});

// Floating elements function (same as before)
function createFloatingElement() {
    const elements = ['🌸', '✨', '💖', '🦋', '⭐'];
    const element = document.createElement('div');
    element.className = 'floating';
    element.textContent = elements[Math.floor(Math.random() * elements.length)];
    element.style.left = Math.random() * window.innerWidth + 'px';
    element.style.top = Math.random() * window.innerHeight + 'px';
    element.style.fontSize = (Math.random() * 20 + 10) + 'px';
    document.body.appendChild(element);

    gsap.to(element, {
        y: -500,
        duration: Math.random() * 10 + 10,
        opacity: 0,
        onComplete: () => element.remove()
    });
}

// Custom cursor (same as before)
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX - 15,
        y: e.clientY - 15,
        duration: 0.2
    });
});

// Create initial floating elements
setInterval(createFloatingElement, 2000);

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};


// #################### Part 3: "I LOVE YOU" Animation ####################

const qs = document.querySelector.bind(document);
const easingHeart = mojs.easing.path('M0,100C2.9,86.7,33.6-7.3,46-7.3s15.2,22.7,26,22.7S89,0,100,0');

const el = {
  container: qs('.mo-container'),
  
  i: qs('.lttr--I'),
  l: qs('.lttr--L'),
  o: qs('.lttr--O'),
  v: qs('.lttr--V'),
  e: qs('.lttr--E'),
  y: qs('.lttr--Y'),
  o2: qs('.lttr--O2'),
  u: qs('.lttr--U'),
  
  lineLeft: qs('.line--left'),
  lineRight: qs('.line--rght'),
  
  colTxt: "#763c8c",
  colHeart: "#fa4843",
  
  blup: qs('.blup'),
  blop: qs('.blop'),
  sound: qs('.sound')
};

class Heart extends mojs.CustomShape {
  getShape() {
    return '<path d="M50,88.9C25.5,78.2,0.5,54.4,3.8,31.1S41.3,1.8,50,29.9c8.7-28.2,42.8-22.2,46.2,1.2S74.5,78.2,50,88.9z"/>';
  }
  getLength () { return 200; }
}
mojs.addShape('heart', Heart);

const crtBoom = (delay = 0, x = 0, rd = 46) => {
  parent = el.container;
  const crcl = new mojs.Shape({
    shape:        'circle',
    fill:         'none',
    stroke:        el.colTxt,
    strokeWidth:  { 5 : 0 },
    radius:       { [rd] : [rd + 20] },
    easing:       'quint.out',
    duration:     500 / 3,
    parent,
    delay,
    x
  });
  
  const brst = new mojs.Burst({
    radius:       { [rd + 15] : 110 },
    angle:        'rand(60, 180)',
    count:        3,
    timeline:     { delay },
    parent,
    x,
    children: {
      radius:       [5, 3, 7],
      fill:         el.colTxt,
      scale:        { 1: 0, easing: 'quad.in' },
      pathScale:    [ .8, null ],
      degreeShift:  [ 'rand(13, 60)', null ],
      duration:     1000 / 3,
      easing:       'quint.out'
    }
  });
  
  return [crcl, brst];
};

const crtLoveTl = () => {
  const move        = 1000;
  const boom        = 200;
  const easing      = 'sin.inOut';
  const easingBoom  = 'sin.in';
  const easingOut   = 'sin.out';
  const opts        = { duration: move, easing, opacity: 1 };
  const delta       = 150;
  
  return (new mojs.Timeline).add([
    new mojs.Tween({
      duration: move,
      onStart: () => {
        [el.i, el.l, el.o, el.v, el.e, el.y, el.o2, el.u].forEach(el => {
          el.style.opacity = 1;
          el.style = 'transform: translate(0px, 0px) rotate(0deg) skew(0deg, 0deg) scale(1, 1); opacity: 1;'
        })
      },
      onComplete: () => {
        [el.l, el.o, el.v, el.e].forEach(el => el.style.opacity = 0);
        el.blop.play();
      }
    }),
    
    new mojs.Tween({
      duration: move * 2 + boom,
      onComplete: () => {
        [el.y, el.o2].forEach(el => el.style.opacity = 0);
        el.blop.play();
      }
    }),
  
    new mojs.Tween({
      duration: move * 3 + boom * 2 - delta,
      onComplete: () => { 
        el.i.style.opacity = 0;
        el.blop.play();
      }
    }),
  
    new mojs.Tween({
      duration: move * 3 + boom * 2,
      onComplete: () => { 
        el.u.style.opacity = 0; 
        el.blup.play();
      }
    }),
  
    new mojs.Tween({
      duration: 50,
      delay: 4050,
      onUpdate: (progress) => {
        [el.i, el.l, el.o, el.v, el.e, el.y, el.o2, el.u].forEach(el => {
          el.style = `transform: translate(0px, 0px) rotate(0deg) skew(0deg, 0deg) scale(1, 1); opacity: ${1 * progress};`
        })
      },
      onComplete: () => {
        [el.i, el.l, el.o, el.v, el.e, el.y, el.o2, el.u].forEach(el => {
          el.style.opacity = 1;
          el.style = 'transform: translate(0px, 0px) rotate(0deg) skew(0deg, 0deg) scale(1, 1); opacity: 1;'
        })
      }
    }),
    
    new mojs.Html({
      ...opts,
      el: el.lineLeft,
      x: { 0 : 52 },
    }).then({
      duration: boom + move,
      easing,
      x: { to : 52 + 54 }
    }).then({
      duration: boom + move,
      easing,
      x: { to : 52 + 54 + 60 }
    }).then({
      duration: 150, // 3550
      easing,
      x: { to : 52 + 54 + 60 + 10 }
    }).then({
      duration: 300
    }).then({
      duration: 350,
      x: { to : 0 },
      easing: easingOut
    }),
    
    new mojs.Html({
      ...opts,
      el: el.lineRight,
      x: { 0 : -52 },
    }).then({
      duration: boom + move,
      easing,
      x: { to : -52 - 54 }
    }).then({
      duration: boom + move,
      easing,
      x: { to : -52 - 54 - 60 }
    }).then({
      duration: 150,
      easing,
      x: { to : -52 - 54 - 60 - 10 }
    }).then({
      duration: 300
    }).then({
      duration: 350,
      x: { to : 0 },
      easing: easingOut,
    }),
    
    new mojs.Html({ // [I] LOVE YOU
      ...opts,
      el: el.i,
      x: { 0 : 34 },
    }).then({
      duration: boom,
      easing: easingBoom,
      x: { to : 34 + 19 }
    }).then({
      duration: move,
      easing,
      x: { to : 34 + 19 + 40 }
    }).then({
      duration: boom,
      easing: easingBoom,
      x: { to : 34 + 19 + 40 + 30 }
    }).then({
      duration: move,
      easing,
      x: { to : 34 + 19 + 40 + 30 + 30 }
    }),
    
    new mojs.Html({ // I [L]OVE YOU
      ...opts,
      el: el.l,
      x: { 0 : 15 },
    }),
    
    new mojs.Html({ // I L[O]VE YOU
      ...opts,
      el: el.o,
      x: { 0 : 11 },
    }),
    
    new mojs.Html({ // I LO[V]E YOU
      ...opts,
      el: el.v,
      x: { 0 : 3 },
    }),
    
    new mojs.Html({ // I LOV[E] YOU
      ...opts,
      el: el.e,
      x: { 0 : -3 },
    }),
    
    new mojs.Html({ // I LOVE [Y]OU
      ...opts,
      el: el.y,
      x: { 0 : -20 },
    }).then({
      duration: boom,
      easing: easingBoom,
      x: { to : -20 - 33}
    }).then({
      duration: move,
      easing,
      x: { to : -20 - 33 - 24 }
    }),
    
    new mojs.Html({ // I LOVE Y[O]U
      ...opts,
      el: el.o2,
      x: { 0 : -27 },
    }).then({
      duration: boom,
      easing: easingBoom,
      x: { to : -27 - 27}
    }).then({
      duration: move,
      easing,
      x: { to : -27 - 27 - 30 }
    }),
    
    new mojs.Html({ // I LOVE YO[U]
      ...opts,
      el: el.u,
      x: { 0 : -32 },
    }).then({
      duration: boom,
      easing: easingBoom,
      x: { to : -32 - 21}
    }).then({
      duration: move,
      easing,
      x: { to : -32 - 21 - 36 }
    }).then({
      duration: boom,
      easing: easingBoom,
      x: { to : -32 - 21 - 36 - 31 }
    }).then({
      duration: move,
      easing,
      x: { to : -32 - 21 - 36 - 31 - 27 }
    }),
    
    new mojs.Shape({
      parent: el.container,
      shape: 'heart',
      delay: move,
      fill: el.colHeart,
      x: -64,
      y: -20, // Adjusted y property to align with SVG text center
      scale: { 0 : 0.95, easing: easingHeart },
      duration: 500
    }).then({
      x: { to : -62, easing },
      scale: { to : 0.65, easing },
      duration: boom + move - 500,
    }).then({
      duration: boom - 50,
      x: { to: -62 + 48 },
      scale: { to : 0.90 },
      easing: easingBoom
    }).then({
      duration:  125,
      scale: { to : 0.8 },
      easing: easingOut
    }).then({
      duration:  125,
      scale: { to : 0.85 },
      easing: easingOut
    }).then({
      duration: move - 200,
      scale: { to : 0.45 },
      easing
    }).then({
      delay: -75,
      duration: 150,
      x: { to: 0 },
      scale: { to : 0.90 },
      easing: easingBoom
    }).then({
      duration:  125,
      scale: { to : 0.8 },
      easing: easingOut
    }).then({
      duration:  125, // 3725
      scale: { to : 0.85 },
      easing: easingOut
    }).then({
      duration: 125, // 3850
    }).then({
      duration: 350,
      scale: { to : 0 },
      easing: easingOut
    }),
    
    ...crtBoom(move, -64, 46),
    ...crtBoom(move * 2 + boom, 18, 34),
    ...crtBoom(move * 3 + boom * 2 - delta, -64, 34),
    ...crtBoom(move * 3 + boom * 2, 45, 34)
  ]);
};

const loveTl = crtLoveTl().play();
setInterval(() => { loveTl.replay() }, 4300);

const volume = qs('.sound');
if (volume) {
    volume.addEventListener('click', () => {
      el.blup.muted = !el.blup.muted;
      el.blop.muted = !el.blop.muted;
      volume.classList.toggle('sound--off');
    });
}

// Scroll to the second section after the first animation ends
// and handle scroll-based animations
window.addEventListener('load', () => {
    const finalMessage = document.querySelector('.final-message');
    let finalMessageShown = false;

    // Initial scroll to the second section
    setTimeout(() => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    }, wishes.length * 2000);

    const finalMessageOffsetTop = finalMessage ? finalMessage.offsetTop : 0;
    const windowHeight = window.innerHeight;

    window.addEventListener('scroll', () => {
        // Animate final message in
        if (finalMessage && !finalMessageShown && window.scrollY > finalMessageOffsetTop - windowHeight * 0.9) {
            gsap.to(finalMessage, {
                opacity: 1,
                visibility: 'visible',
                duration: 1
            });
            finalMessageShown = true;
        }
    });
});