  function showLoading(urlgo) {
  event.preventDefault();

  var button = event.target;
  
  // Menambahkan kelas CSS "loading" dan "clicked" pada tombol
  button.classList.add("loading", "clicked");

  // Menonaktifkan klik pada tombol
  button.onclick = function(urlgo) {
    event.preventDefault();
  };

  // Menyembunyikan overlay loading
  var loadingOverlay = document.getElementById("loading-overlay");
  loadingOverlay.style.display = "none";
  
  // Menghapus ekstensi .html pada URL
  var path = window.location.pathname;
  if (path.endsWith('.html')) {
    history.replaceState(null, null, path.slice(0, -5));
  }

  // Simulasi proses unduhan
  setTimeout(function() {
    // Menghapus kelas CSS "loading" dan "clicked" dari tombol
    button.classList.remove("loading", "clicked");

    // Menyembunyikan overlay loading
    loadingOverlay.style.display = "none";

    // Mengembalikan fungsi klik pada tombol
    button.onclick = showLoading;

    // Mengarahkan pengguna ke halaman tujuan
    window.location.href = button.href;
  }, 3000); // Ubah durasi sesuai kebutuhan Anda
}
 window.addEventListener('load', function() {
      setTimeout(function() {
        document.getElementById('loading-animation').style.display = 'none';
        document.getElementById('content').style.display = 'block';
      }, 600);
    });


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
        this.speed = Math.random() * 0.5 + 0.1;
      }
      
      update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.y = 0;
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
      for (let i = 0; i < 100; i++) {
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

    const darkColors = ['#062d2e', '#191970', '#3b5998', '#1a237e', '#4a148c'];
    const body = document.body;

    function changeBackgroundColor() {
      const randomIndex = Math.floor(Math.random() * darkColors.length);
      body.style.backgroundColor = darkColors[randomIndex];
    }

    // Panggil fungsi untuk pertama kali
    changeBackgroundColor();

    // Panggil fungsi secara berkala setiap 3 detik
    setInterval(changeBackgroundColor, 1200);

     function copyText() {
      var text = document.getElementById("hidden-text").innerText;
      navigator.clipboard.writeText(text).then(function() {
        document.getElementById("message").innerText = "Teks telah berhasil disalin!";
      }).catch(function() {
        document.getElementById("message").innerText = "Tidak dapat menyalin teks.";
      });
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