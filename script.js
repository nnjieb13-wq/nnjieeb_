const percentageText = document.getElementById('percentage');
const progressFill = document.getElementById('progressFill');
const sparkGlow = document.getElementById('sparkGlow');

let count = 0;

const loadingAnimation = setInterval(() => {
    count++;
    
    // Sinkronisasi Bar Warna dan Nilai Persentase
    percentageText.innerText = count + '%';
    progressFill.style.width = count + '%';
    
    // Menggerakkan titik kilatan cahaya petir mengikuti ujung bar pengisian
    sparkGlow.style.left = count + '%';

    // OTOMATIS: Pengalihan saat energi penuh (100%)
    if (count >= 100) {
        clearInterval(loadingAnimation);
        
        // Memberikan efek kilatan strobe putih konstan sesaat sebelum meledak pindah halaman
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.filter = 'brightness(3)';
        
        setTimeout(() => {
            // Pindah otomatis ke beranda.html di folder lokal Anda
            window.location.href = 'index.html'; 
        }, 300); // Jeda ledakan kilatan 0.3 detik
    }
}, 30); // Durasi pemuatan otomatis berputar sekitar 3 detik
