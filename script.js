const captions = [
    "Com você, tudo é melhor ❤️",
    "Cada momento contigo é inesquecível 💕",
    "Te amo mais a cada dia 😘",
    "Nosso amor é a melhor parte da minha vida 💖",
    "Com você, o mundo é mais bonito 🌍💗",
    "Você é meu lar e minha paz 🏡✨"
  ];
  
  function addPhoto() {
    const input = document.getElementById('photoInput');
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const photoDiv = document.createElement('div');
        photoDiv.className = 'photo-card';
  
        const img = document.createElement('img');
        img.src = e.target.result;
  
        const caption = document.createElement('div');
        caption.className = 'caption';
        caption.textContent = captions[Math.floor(Math.random() * captions.length)];
  
        photoDiv.appendChild(img);
        photoDiv.appendChild(caption);
  
        document.getElementById('photos').appendChild(photoDiv);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  
  function copyLink() {
    const dummy = document.createElement('input');
    const url = window.location.href;
    document.body.appendChild(dummy);
    dummy.value = url;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    alert('Link copiado! ✨');
  }
  
  function generateQRCode() {
    const qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = '';
    const siteURL = window.location.href.replace('http://', 'https://');
    QRCode.toCanvas(document.createElement('canvas'), siteURL, function (error, canvas) {
      if (error) console.error(error);
      qrcodeContainer.appendChild(canvas);
    });


toggleBtn.addEventListener('click', () => {
  if (isPlaying) {
    music.pause();
    toggleBtn.textContent = '🎵 Tocar Música';
  } else {
    music.play();
    toggleBtn.textContent = '⏸️ Pausar Música';
  }
  isPlaying = !isPlaying;
});

const playlist = [
  {
    name: "Nossa Praia – Andrey Lima",
    src: "musics/A Nossa Praia É Amar.mp3"
  },
  {
    name: "Eu quero só você – Jorge e Mateus",
    src: "musics/Jorge & Mateus - Eu Quero Só Você - [DVD Ao Vivo em Jurerê] - (Clipe Oficial).mp3"
  },

  {
    name: "Samba In Paris – Baco Exu do Blues",
    src: "musics/samba-in-paris.mp3.mp3"
  }
  
  
];

let currentTrack = 0;
let isPlaying = false;

const audio = document.getElementById('bg-music');
const toggleBtn = document.getElementById('toggle-music');
const nextBtn = document.getElementById('next-track');
const prevBtn = document.getElementById('prev-track');
const trackNameDisplay = document.getElementById('track-name');

// Toca a música da playlist
function playTrack(index) {
  const track = playlist[index];
  audio.src = track.src;
  audio.play();
  isPlaying = true;
  toggleBtn.textContent = '⏸️';
  trackNameDisplay.textContent = track.name;
}

// Alterna entre play/pause
toggleBtn.addEventListener('click', () => {
  if (!isPlaying) {
    playTrack(currentTrack);
  } else {
    audio.pause();
    toggleBtn.textContent = '▶️';
    isPlaying = false;
  }
});

// Avançar música
nextBtn.addEventListener('click', () => {
  currentTrack = (currentTrack + 1) % playlist.length;
  playTrack(currentTrack);
});

// Voltar música
prevBtn.addEventListener('click', () => {
  currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
  playTrack(currentTrack);
});

// Quando uma música termina, toca a próxima
audio.addEventListener('ended', () => {
  currentTrack = (currentTrack + 1) % playlist.length;
  playTrack(currentTrack);
});

const progressBar = document.getElementById('progress-bar');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');

// Atualiza barra de progresso enquanto a música toca
audio.addEventListener('timeupdate', () => {
  if (audio.duration) {
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = `${percent}%`;
    currentTimeEl.textContent = formatTime(audio.currentTime);
    durationEl.textContent = formatTime(audio.duration);
  }
});

// Permite clicar para mudar o tempo da música
progressBar.addEventListener('click', (e) => {
  const width = progressBar.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
});

// Função para formatar segundos em mm:ss
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, '0');
  return `${minutes}:${seconds}`;
}


  }
  