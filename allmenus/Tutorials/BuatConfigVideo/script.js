 
const watchContainer = document.getElementById("qualityContainer");
const mainLoading = document.getElementById("mainLoading");
const pageTitle = document.getElementById("title");
const videoPlayer = document.getElementById("player") 

var dataTitle; 
var dataURL;

const apiEndpoint = "api.consumet.org";

// Randomly set player iframes to these video onLoad
var youtubeLinks = [
    "https://www.veed.io/embed/dc5bc888-4e02-40a4-8184-b8dec3daf7c7" 
 
];
var randomLink = youtubeLinks[Math.floor(Math.random() * youtubeLinks.length)];
videoPlayer.src = randomLink;

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

// Buat tombol kembali
function goBack() {
  window.history.back();
}