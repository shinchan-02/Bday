let currentSlide = 0;
let currentPhoto = 0;
let poppedBalloons = 0;
let autoplayInterval;
let fireworksActive = false;

// Elements
const bgMusic = document.getElementById("bgMusic");
const popSound = document.getElementById("popSound");
const fireworkSound = document.getElementById("fireworkSound");

// 🎀 Save name + age → Continue to countdown
function saveDetails() {
    const nameVal = document.getElementById("nameInput").value || "Beautiful";
    const ageVal = document.getElementById("ageInput").value || "18";

    localStorage.setItem("bdayName", nameVal);
    localStorage.setItem("bdayAge", ageVal);

    document.getElementById("craftName").textContent = `${nameVal}... 🌸`;
    document.getElementById("nameDisplay").textContent = nameVal;
    document.getElementById("nameDisplay2").textContent = nameVal;
    document.getElementById("ageDisplay").textContent = ageVal;

    bgMusic.volume = 0.3;
    bgMusic.play();

    nextSlide();
    setTimeout(startCountdown, 1000);
}

// ⏱️ COUNTDOWN
function startCountdown() {
    let count = 3;
    const countdownEl = document.getElementById("countdown");
    
    const interval = setInterval(() => {
        countdownEl.textContent = count;
        count--;

        if (count < 0) {
            clearInterval(interval);
            nextSlide();
            setTimeout(nextSlide, 2800);
        }
    }, 1000);
}

// 🎬 Slide navigation
function nextSlide() {
    const currentEl = document.getElementById(`slide-${currentSlide}`);
    const nextEl = document.getElementById(`slide-${currentSlide + 1}`);

    if (!nextEl) return;

    currentEl.classList.add("exit");
    currentEl.classList.remove("active");

    currentSlide++;

    setTimeout(() => {
        nextEl.classList.add("active");
    }, 300);

    if (currentSlide === 4) createConfetti();
    if (currentSlide === 5) startCarouselAutoplay();
    if (currentSlide === 7) setupFinaleMessage();
}

// 🎈 Balloon Pop
function popBalloon(balloon) {
    if (balloon.classList.contains("popped")) return;

    balloon.classList.add("popped");
    popSound.currentTime = 0;
    popSound.play();
    poppedBalloons++;

    showBalloonMessage(balloon.getAttribute("data-message"));

    if (poppedBalloons === 4) {
        setTimeout(() => {
            document.getElementById("nextAfterBalloons").classList.remove("hidden");
        }, 3000);
    }

    createConfetti();
}

function showBalloonMessage(msg) {
    const box = document.getElementById("balloonMessage");
    box.textContent = msg;
    box.classList.remove("hidden");

    setTimeout(() => box.classList.add("hidden"), 2000);
}

// 📸 Carousel Controls
function goToPhoto(i) {
    const cards = document.querySelectorAll(".photo-card");
    const dots = document.querySelectorAll(".dot");

    cards[currentPhoto].classList.remove("active");
    dots[currentPhoto].classList.remove("active");

    currentPhoto = i;

    cards[currentPhoto].classList.add("active");
    dots[currentPhoto].classList.add("active");
}

function nextPhoto() {
    const cards = document.querySelectorAll(".photo-card");
    goToPhoto((currentPhoto + 1) % cards.length);
}

function prevPhoto() {
    const cards = document.querySelectorAll(".photo-card");
    goToPhoto((currentPhoto - 1 + cards.length) % cards.length);
}

// Auto play + Swipe
function startCarouselAutoplay() {
    autoplayInterval = setInterval(nextPhoto, 3000);

    const carousel = document.getElementById("photoCarousel");
    let startX = 0;

    carousel.addEventListener("touchstart", e => startX = e.touches[0].clientX);
    carousel.addEventListener("touchend", e => {
        if (e.changedTouches[0].clientX - startX > 50) prevPhoto();
        else if (startX - e.changedTouches[0].clientX > 50) nextPhoto();
    });
}

// 💌 Greeting card open
function toggleCard() {
    const card = document.getElementById("greetingCard");
    card.classList.toggle("open");
}

// ✨ Personalized message inside card
function setupFinaleMessage() {
    const name = localStorage.getItem("bdayName") || "you";
    const message = `
Dear ${name}, 💕

You are a gift to this world.  
May your journey always be filled with joy,
adventures and beautiful moments. 🌈✨  

Always keep smiling, always keep shining 💖
`;

    typeWriter("personalMessage", message);
}

// ⌨️ Typewriter effect
function typeWriter(id, txt, i = 0) {
    if (i < txt.length) {
        document.getElementById(id).innerHTML = txt.substring(0, i + 1);
        setTimeout(() => typeWriter(id, txt, i + 1), 40);
    }
}

// 🎁 GIFTS & FIREWORKS
function openGift() {
    const gift = document.getElementById("giftBox");
    gift.classList.add("opening");

    setTimeout(() => {
        gift.style.display = "none";
        document.getElementById("giftReveal").classList.remove("hidden");
        
        revealSecretText();
        startFireworks();
        fireworkSound.play();

        document.getElementById("replayBtn").classList.remove("hidden");
    }, 900);
}

function revealSecretText() {
    const name = localStorage.getItem("bdayName") || "Lovely";
    typeWriter("secretText", `Happy Birthday ${name}! 🎉💗`);
}

// 🎆 Confetti System
function createConfetti() {
    const container = document.getElementById("confettiContainer");

    for (let i = 0; i < 40; i++) {
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.left = Math.random() * 100 + "%";
        confetti.style.background = (["#ff9ecb", "#a8d8ff", "#fff4a3", "#b8ffd4"])[Math.floor(Math.random()*4)];
        confetti.style.animationDuration = 2 + Math.random() * 2 + "s";

        container.appendChild(confetti);

        setTimeout(() => confetti.remove(), 4000);
    }
}

// 🎇 Fireworks System
const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particles = [];

function startFireworks() {
    fireworksActive = true;
    requestAnimationFrame(animateFireworks);
    spawnFireworks();
}

function spawnFireworks() {
    if (!fireworksActive) return;
    for (let i = 0; i < 12; i++) createParticle();
    setTimeout(spawnFireworks, 500);
}

function createParticle() {
    const color = ["#ff9ecb","#b8ffd4","#fff4a3","#a8d8ff"][Math.floor(Math.random()*4)];
    particles.push({
        x: canvas.width/2,
        y: canvas.height/2,
        angle: Math.random()*2*Math.PI,
        speed: Math.random()*3+2,
        radius: 5,
        color
    });
}

function animateFireworks() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach((p,i) => {
        p.x += Math.cos(p.angle)*p.speed;
        p.y += Math.sin(p.angle)*p.speed;
        p.radius -= .05;

        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);
        ctx.fill();

        if (p.radius <= 0) particles.splice(i,1);
    });

    if (fireworksActive) requestAnimationFrame(animateFireworks);
}

// 🔄 Replay
function replay() { location.reload(); }
