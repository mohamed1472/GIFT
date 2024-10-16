const catImages = [
    "cat1.jpg", 
    "cat2.jpg", 
    "cat3.jpg" 
];

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    const size = Math.random() * 60 + 20;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}vw`;
    bubble.style.bottom = '-80px';
    document.body.appendChild(bubble);

    bubble.animate([
        { transform: 'translateY(0) rotate(0)', opacity: 0 },
        { opacity: 0.7, offset: 0.7 },
        { transform: 'translateY(-100vh) rotate(360deg)', opacity: 0 }
    ], {
        duration: Math.random() * 4000 + 2000,
        easing: 'cubic-bezier(0,0,0.2,1)',
        fill: 'forwards'
    }).onfinish = () => bubble.remove();
}

function createCat() {
    const cat = document.createElement('img');
    cat.src = catImages[Math.floor(Math.random() * catImages.length)];
    cat.alt = "Flying cat";
    cat.classList.add('cat');
    cat.style.left = `${Math.random() * 100}vw`;
    cat.style.top = `${Math.random() * 100}vh`;
    document.body.appendChild(cat);

    cat.animate([
        { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
        { transform: 'translate(100px, -100px) rotate(90deg) scale(1.1)' },
        { transform: 'translate(200px, 0) rotate(180deg) scale(1)' },
        { transform: 'translate(100px, 100px) rotate(270deg) scale(0.9)' },
        { transform: 'translate(0, 0) rotate(360deg) scale(1)' }
    ], {
        duration: Math.random() * 10000 + 5000,
        iterations: Infinity,
        easing: 'ease-in-out'
    });
}

function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = `${Math.random() * 100}vw`;
    sparkle.style.top = `${Math.random() * 100}vh`;
    document.body.appendChild(sparkle);

    sparkle.animate([
        { transform: 'scale(0) rotate(0deg)', opacity: 0 },
        { transform: 'scale(1) rotate(180deg)', opacity: 1 },
        { transform: 'scale(0) rotate(360deg)', opacity: 0 }
    ], {
        duration: Math.random() * 1000 + 500,
        easing: 'ease-in-out'
    }).onfinish = () => sparkle.remove();
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = `${Math.random() * 100}vh`;
    document.body.appendChild(heart);

    heart.animate([
        { transform: 'translateY(0) rotate(45deg) scale(1)', opacity: 0 },
        { transform: 'translateY(-20px) rotate(45deg) scale(1.1)', opacity: 1, offset: 0.5 },
        { transform: 'translateY(-100vh) rotate(45deg) scale(1)', opacity: 0 }
    ], {
        duration: Math.random() * 3000 + 2000,
        easing: 'ease-in-out'
    }).onfinish = () => heart.remove();
}

function startEffects() {
    setInterval(createBubble, 300);
    setInterval(createSparkle, 200);
    setInterval(createHeart, 500);
    for (let i = 0; i < 5; i++) {
        createCat();
    }
}

document.getElementById('revealButton').addEventListener('click', function() {
    this.style.display = 'none';
    const surpriseContent = document.getElementById('surpriseContent');
    surpriseContent.classList.add('revealed');
    startEffects();
});