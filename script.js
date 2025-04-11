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

    // Música
const music = document.getElementById('bg-music');
const toggleBtn = document.getElementById('toggle-music');
let isPlaying = false;

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

  }
  