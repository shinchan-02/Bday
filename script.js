let currentSlide = 1;
let currentPhoto = 0;
let poppedBalloons = 0;
let cardOpen = false;

function startCountdown() {
    let count = 3;
    const countdownEl = document.getElementById('countdown');
    
    const interval = setInterval(() => {
        if (count > 0) {
            countdownEl.textContent = count;
            countdownEl.style.animation = 'none';
            setTimeout(() => {
                countdownEl.style.animation = 'countdownPulse 1s ease-in-out';
            }, 10);
            count--;
        } else {
            clearInterval(interval);
            setTimeout(() => {
                nextSlide();
                setTimeout(() => {
                    nextSlide();
                }, 2500);
            }, 1000);
        }
    }, 1000);
}

function nextSlide() {
    const currentSlideEl = document.getElementById(`slide-${currentSlide}`);
    currentSlideEl.classList.remove('active');
    currentSlideEl.classList.add('exit');
    
    currentSlide++;
    const nextSlideEl = document.getElementById(`slide-${currentSlide}`);
    
    if (nextSlideEl) {
        setTimeout(() => {
            nextSlideEl.classList.add('active');
            
            if (currentSlide === 4) {
                createConfetti();
            }
        }, 100);
    }
}

function popBalloon(balloon) {
    if (balloon.classList.contains('popped')) return;
    
    const message = balloon.getAttribute('data-message');
    balloon.classList.add('popped');
    poppedBalloons++;
    
    setTimeout(() => {
        const messageEl = document.getElementById('balloonMessage');
        messageEl.textContent = message;
        messageEl.classList.remove('hidden');
        
        if (poppedBalloons === 4) {
            setTimeout(() => {
                messageEl.classList.add('hidden');
                setTimeout(() => {
                    document.getElementById('nextAfterBalloons').classList.remove('hidden');
                }, 500);
            }, 5000);
        }
    }, 1200);
    
    createConfetti();
}

function goToPhoto(index) {
    const cards = document.querySelectorAll('.photo-card');
    const dots = document.querySelectorAll('.dot');
    
    cards[currentPhoto].classList.remove('active');
    cards[currentPhoto].classList.add('prev');
    dots[currentPhoto].classList.remove('active');
    
    currentPhoto = index;
    
    cards[currentPhoto].classList.remove('prev');
    cards[currentPhoto].classList.add('active');
    dots[currentPhoto].classList.add('active');
}

function nextPhoto() {
    const cards = document.querySelectorAll('.photo-card');
    const nextIndex = (currentPhoto + 1) % cards.length;
    goToPhoto(nextIndex);
}

function prevPhoto() {
    const cards = document.querySelectorAll('.photo-card');
    const prevIndex = (currentPhoto - 1 + cards.length) % cards.length;
    goToPhoto(prevIndex);
}

function toggleCard() {
    const card = document.getElementById('greetingCard');
    cardOpen = !cardOpen;
    
    if (cardOpen) {
        card.classList.add('open');
    } else {
        card.classList.remove('open');
    }
}

function openGift() {
    const giftBox = document.getElementById('giftBox');
    const giftReveal = document.getElementById('giftReveal');
    const replayBtn = document.getElementById('replayBtn');
    const sparklesContainer = document.getElementById('giftSparkles');
    
    giftBox.classList.add('opening');
    
    setTimeout(() => {
        giftBox.classList.add('hidden');
        giftReveal.classList.remove('hidden');
        
        createSparkles(sparklesContainer);
        
        setTimeout(() => {
            replayBtn.classList.remove('hidden');
        }, 2000);
        
        createConfetti();
        
        for (let i = 0; i < 8; i++) {
            setTimeout(() => createConfetti(), i * 400);
        }
    }, 800);
}

function createSparkles(container) {
    const sparkleEmojis = ['✨', '⭐', '💫', '🌟'];
    
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.textContent = sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)];
            
            const angle = (Math.PI * 2 * i) / 12;
            const distance = 150;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            
            sparkle.style.setProperty('--x', `${x}px`);
            sparkle.style.setProperty('--y', `${y}px`);
            
            container.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 2000);
        }, i * 100);
    }
}

function createConfetti() {
    const container = document.getElementById('confettiContainer');
    const colors = ['#ff69b4', '#ffd700', '#87ceeb', '#98fb98', '#ff1493', '#fff'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            confetti.style.animationDuration = Math.random() * 2 + 2 + 's';
            
            container.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 4000);
        }, i * 30);
    }
}

function replay() {
    location.reload();
}

startCountdown();
