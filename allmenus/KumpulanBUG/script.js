// RisunTuru Modified -->
const canvas = document.getElementById('starsCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];

class Star {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 2 + 1;
    this.speed = Math.random() * 0.2 + 0.05; // Mengurangi kecepatan bintang
  }

  update() {
    this.y += this.speed;
    if (this.y > canvas.height) {
      this.y = 0;
      this.x = Math.random() * canvas.width; // Mengatur ulang posisi x agar bintang muncul di lokasi acak
    }
  }

  draw() {
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function createStars() {
  for (let i = 0; i < 60; i++) { // Mengurangi jumlah bintang menjadi 50
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    stars.push(new Star(x, y));
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const star of stars) {
    star.update();
    star.draw();
  }
}

createStars();
animate();
  

    const darkColors = [
  '#062d2e', // Biru gelap 
  // Tambahkan warna hitam lainnya di sini
];

    const body = document.body;

    function changeBackgroundColor() {
      const randomIndex = Math.floor(Math.random() * darkColors.length);
      body.style.backgroundColor = darkColors[randomIndex];
    }

    // Panggil fungsi untuk pertama kali
    changeBackgroundColor();

    // Panggil fungsi secara berkala setiap 3 detik
    setInterval(changeBackgroundColor, 1200);

function copyText(event) {
  const textToCopy = event.target.previousElementSibling.textContent;

  const tempInput = document.createElement('input');
  tempInput.value = textToCopy;
  document.body.appendChild(tempInput);

  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  showModal();
  startCountdown(1); // Ubah angka '5' dengan jumlah detik yang diinginkan
}

// Fungsi untuk memulai countdown
function startCountdown(seconds) {
  const countdownElement = createBlackParagraph(`Berhasil Disalin!`);
  document.querySelector('.modal-content').appendChild(countdownElement);

  const countdownTimer = setInterval(() => {
    seconds--; 
    if (seconds === 0) {
      clearInterval(countdownTimer);
      countdownElement.remove(); // Menghapus elemen <p> setelah countdown berakhir
      hideModal();
    }
  }, 1200);
}
 
    let countdownTimer;
 
// Fungsi untuk menampilkan modal dengan animasi fade in
function showModal() {
  const modal = document.getElementById('modal');
  modal.classList.add('show-modal');
}

// Fungsi untuk menyembunyikan modal dengan animasi fade out
function hideModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('show-modal');
}

// Fungsi untuk menyalin payload dan menampilkan modal
function copyPayload(event) {
  const textToCopy = event.target.previousElementSibling.textContent;

  const tempInput = document.createElement('input');
  tempInput.value = textToCopy;
  document.body.appendChild(tempInput);

  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  showModal();
  startCountdown(1); // Ubah angka '5' dengan jumlah detik yang diinginkan
}

// Fungsi untuk memulai countdown
function startCountdown(seconds) {
  const countdownElement = createBlackParagraph(`Berhasil Disalin!`);
  document.querySelector('.modal-content').appendChild(countdownElement);

  const countdownTimer = setInterval(() => {
    seconds--; 
    if (seconds === 0) {
      clearInterval(countdownTimer);
      countdownElement.remove(); // Menghapus elemen <p> setelah countdown berakhir
      hideModal();
    }
  }, 1200);
}

function createBlackParagraph(text) {
  const paragraphElement = document.createElement('p');
  paragraphElement.textContent = text;
  paragraphElement.style.color = 'black'; // Atur warna teks menjadi hitam
  return paragraphElement;
}
 
       
      window.onload = function() {
      // Remove session ID from localStorage
      localStorage.removeItem("sessionId");

      // Generate session ID
      var sessionId = generateSessionId();
      localStorage.setItem("sessionId", sessionId);
      
      // Display session ID
      var sessionIdElement = document.getElementById("sessionId");
      sessionIdElement.innerHTML = sessionId;
    };

    function generateSessionId() {
      var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      var sessionId = '';
      for (var i = 0; i < 10; i++) {
        sessionId += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return sessionId;
    } 

    function goBack() {
  window.history.back();
}


 window.addEventListener('load', function() {
      setTimeout(function() {
        document.getElementById('loading-animation').style.display = 'none';
        document.getElementById('content').style.display = 'block';
      }, 600);
    });