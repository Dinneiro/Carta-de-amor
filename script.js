// Detectar dispositivo
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Temas
const themeSelect = document.getElementById('theme');
const body = document.body;
themeSelect.addEventListener('change', () => {
  body.setAttribute('data-theme', themeSelect.value);
});

// Player Spotify
const toggleMusicBtn = document.getElementById('toggleMusic');
const spotifyPlayer = document.getElementById('spotifyPlayer');
toggleMusicBtn.addEventListener('click', () => {
  if (spotifyPlayer.style.display === 'none') {
    spotifyPlayer.style.display = 'block';
    toggleMusicBtn.textContent = "⏸️ Esconder Música";
  } else {
    spotifyPlayer.style.display = 'none';
    toggleMusicBtn.textContent = "🎵 Música";
  }
});

// Carta e contador
const messageText = document.getElementById('messageText');
const counter = document.getElementById('counter');

const frasesCarinhosas = [
  "Estar com você é como descobrir uma nova cor que eu não sabia que existia.",
  "Você é meu refúgio e meu impulso, minha calma e minha tempestade.",
  "Com você, cada segundo se torna eterno.",
  "Te amar é a melhor parte de todos os meus dias.",
  "Seu sorriso ilumina até meus dias mais escuros.",
  "Ao seu lado, tudo faz sentido."
];

function abrirCarta() {
  const letter = document.getElementById('letter');
  const dateInput = document.getElementById('dateInput').value;

  if (!dateInput) {
    alert("Por favor, coloque a data do namoro ❤️");
    return;
  }

  // Mensagem carinhosa aleatória
  const frase = frasesCarinhosas[Math.floor(Math.random() * frasesCarinhosas.length)];
  messageText.textContent = frase;

  // Iniciar contador
  atualizarContador(dateInput);
  setInterval(() => atualizarContador(dateInput), 1000);

  // Mostrar carta
  letter.classList.add('show');

  // Chuva de corações
  if (!isMobile) {
    iniciarChuvaDeCoracoes(); // Desktop: chuva contínua
  }
}

// Contador de tempo
function atualizarContador(date) {
  const inicio = new Date(date);
  const agora = new Date();
  const diff = agora - inicio;

  const anos = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const meses = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  const dias = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  counter.textContent = 
    `Estamos juntos há ${anos} anos, ${meses} meses, ${dias} dias 
    ${horas}h ${minutos}m ${segundos}s 💕`;
}

// Chuva de corações Desktop
function iniciarChuvaDeCoracoes() {
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 30) + "px";
    heart.style.animationDuration = (2 + Math.random() * 3) + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }, 150);
}

// Interatividade Mobile: tocar na tela gera corações
if (isMobile) {
  document.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = touch.clientX + "px";
    heart.style.top = touch.clientY + "px";
    heart.style.fontSize = "24px";
    heart.style.position = "fixed";
    heart.style.animationDuration = (2 + Math.random() * 3) + "s";
    heart.innerText = "❤";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  });
}
