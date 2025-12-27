let currentSlide = 1;
let currentPhoto = 0;
let poppedBalloons = 0;

const bgMusic = document.getElementById("bgMusic");
const popSound = document.getElementById("popSound");
const fireworkSound = document.getElementById("fireworkSound");

function startCountdown() {
    let count = 3;
    const countdownEl = document.getElementById("countdown");

    bgMusic.volume = 0.4;
    bgMusic.play().catch(() => {
        document.body.addEventListener("click", () => bgMusic.play(), { once: true });
    });

    const interval = setInterval(() => {
        countdownEl.textContent = count;
        count--;
        if (count < 0) {
            clearInterval(interval);
            nextSlide();
            setTimeout(nextSlide, 2500);
        }
    }, 1000);
}

function nextSlide() {
    const currentEl = document.getElementById(`slide-${currentSlide}`);
    currentEl.classList.remove("active");
    currentEl.classList.add("exit");

    currentSlide++;

    const nextEl = document.getElementById(`slide-${currentSlide}`);
    nextEl.classList.add("active");

    if (currentSlide === 4) createConfetti();
    if (currentSlide === 6) messageWriter();
}

function popBalloon(balloon) {
    if (balloon.classList.contains("popped")) return;

    popSound.currentTime = 0;
    popSound.play();

    balloon.classList.add("popped");
    poppedBalloons++;

    const msg = balloon.getAttribute("data-message");
    const box = document.getElementById("balloonMessage");
    box.textContent = msg;
    box.classList.remove("hidden");

    setTimeout(() => box.classList.add("hidden"), 2000);

    if (poppedBalloons === 4) {
        setTimeout(() => {
            document.getElementById("nextAfterBalloons").classList.remove("hidden");
        }, 1500);
    }

    createConfetti();
}

/* Photos */
function goToPhoto(i) {
    const cards = document.querySelectorAll(".photo-card");
    cards[currentPhoto].classList.remove("active");
    currentPhoto = i;
    cards[currentPhoto].classList.add("active");
}

function nextPhoto() {
    const cards = document.querySelectorAll(".photo-card");
    goToPhoto((currentPhoto + 1) % cards.length);
}

function prevPhoto() {
    const cards = document.querySelectorAll(".photo-card");
    goToPhoto((currentPhoto - 1 + cards.length) % cards.length);
}

/* Card */
function toggleCard() {
    document.getElementById("greetingCard").classList.toggle("open");
}

/* Typewriter inside card */
function messageWriter() {
    const msg =
`Dear Raina 💗

You are truly special.
May your heart always stay happy.
May your dreams come true.

You deserve the best today and always! ✨`;

    let i = 0;
    const msgBox = document.getElementById("personalMessage");

    function typeChar() {
        msgBox.innerHTML = msg.substring(0, i++);
        if (i <= msg.length) setTimeout(typeChar, 35);
    }
    typeChar();
}

/* Gift */
function openGift() {
    document.getElementById("giftBox").style.display = "none";
    document.getElementById("giftReveal").classList.remove("hidden");

    typeSecretText();
    startFireworks();
    fireworkSound.play();
}

function typeSecretText() {
    const txt = "Happy Birthday Raina! 🎉💕";
    let i = 0;

    function write() {
        document.getElementById("secretText").innerHTML = txt.substring(0, i++);
        if (i <= txt.length) setTimeout(write, 60);
    }
    write();
}

/* Confetti */
function createConfetti() {
    const container = document.getElementById("confettiContainer");
    const colors = ["#ff94c2", "#9dd6ff", "#fff9a8", "#b8ffd4"];

    for (let i = 0; i < 35; i++) {
        const c = document.createElement("div");
        c.className = "confetti";
        c.style.left = Math.random() * 100 + "%";
        c.style.background = colors[Math.floor(Math.random() * colors.length)];
        c.style.animation = `fall ${2 + Math.random() * 2}s linear forwards`;
        container.appendChild(c);
        setTimeout(() => c.remove(), 4000);
    }
}

/* Fireworks */
const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = [];

function startFireworks() {
    setInterval(() => {
        for (let i = 0; i < 12; i++) createParticle();
    }, 500);

    animateFireworks();
}

function createParticle() {
    particles.push({
        x: canvas.width/2,
        y: canvas.height/2,
        angle: Math.random()*Math.PI*2,
        speed: Math.random()*4+2,
        radius: 5,
        color: ["#ff94c2","#9dd6ff","#fff9a8","#b8ffd4"][Math.floor(Math.random()*4)]
    });
}

function animateFireworks() {
    ctx.fillStyle = "rgba(0,0,0,0)";
    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach((p,i)=>{
        p.x += Math.cos(p.angle)*p.speed;
        p.y += Math.sin(p.angle)*p.speed;
        p.radius -= .05;

        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);
        ctx.fill();

        if (p.radius <= 0) particles.splice(i,1);
    });

    requestAnimationFrame(animateFireworks);
}

function replay() {
    location.reload();
}

startCountdown();
