// ==============================
// FITUR 1: DARK / LIGHT MODE TOGGLE
// ==============================

const darkToggleBtn = document.querySelector('#dark-toggle');
const body = document.body;

// Website default = gelap (navy)
// Tombol awal = "☀️ Light Mode" (karena sekarang gelap, klik = ke terang)
darkToggleBtn.textContent = '☀️ Light Mode';

darkToggleBtn.addEventListener('click', function () {
  const isLight = body.classList.contains('light-mode');

  if (isLight) {
    // Sekarang light → klik → ganti ke dark
    body.classList.remove('light-mode');
    darkToggleBtn.textContent = '☀️ Light Mode';
  } else {
    // Sekarang dark → klik → ganti ke light
    body.classList.add('light-mode');
    darkToggleBtn.textContent = '🌙 Dark Mode';
  }
});

// ==============================
// FITUR 2: VALIDASI FORM
// ==============================

const btnKirim = document.querySelector('#btn-kirim');
const inputNama = document.querySelector('#input-nama');
const inputEmail = document.querySelector('#input-email');
const inputPesan = document.querySelector('#input-pesan');
const formFeedback = document.querySelector('#form-feedback');

function tampilkanPesan(teks, tipe) {
  formFeedback.textContent = teks;
  formFeedback.className = 'feedback ' + tipe;
}

function isEmailValid(email) {
  return email.includes('@') && email.includes('.');
}

btnKirim.addEventListener('click', function () {
  const nama = inputNama.value.trim();
  const email = inputEmail.value.trim();
  const pesan = inputPesan.value.trim();

  if (nama === '' || email === '' || pesan === '') {
    tampilkanPesan('⚠️ Semua field harus diisi!', 'error');
    return;
  }
  if (!isEmailValid(email)) {
    tampilkanPesan('⚠️ Format email tidak valid! Contoh: namakamu@gmail.com', 'error');
    return;
  }
  tampilkanPesan('✅ Pesan berhasil dikirim! Terima kasih, ' + nama + '!', 'success');
  inputNama.value = '';
  inputEmail.value = '';
  inputPesan.value = '';
});

// ==============================
// FITUR 3: STICKY NAVBAR
// ==============================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
  if (window.scrollY > 50) {
    navbar.classList.add('navbar--scrolled');
  } else {
    navbar.classList.remove('navbar--scrolled');
  }
});

// ==============================
// FITUR 4: SMOOTH SCROLL NAVBAR
// ==============================

const navLinks = document.querySelectorAll('.navbar__links a');

navLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    const href = link.getAttribute('href');

    if (href && href.startsWith('#')) {
      e.preventDefault();

      const targetId = href.substring(1);
      const targetEl = document.getElementById(targetId);

      if (targetEl) {
        const navbarHeight = navbar.offsetHeight;
        const targetPos = targetEl.getBoundingClientRect().top + window.scrollY - navbarHeight;

        window.scrollTo({
          top: targetPos,
          behavior: 'smooth',
        });
      }
    }
  });
});
