document.addEventListener('DOMContentLoaded', () => {
    const albumItems = document.querySelectorAll('.album-item');
    const popup = document.querySelector('#albumPopup');
    const fullImage = document.querySelector('#fullImage');
    const closeBtn = document.querySelector('.close-btn');

    // Event listener untuk pop-up
    albumItems.forEach(item => {
        item.addEventListener('click', () => {
            const fullImageUrl = item.getAttribute('data-full-image');
            fullImage.src = fullImageUrl;
            popup.style.display = 'flex';
        });
    });

    // Menutup pop-up
    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Menutup pop-up saat klik di luar konten
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});