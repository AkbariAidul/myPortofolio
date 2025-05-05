// Hover animation untuk semua link
const links = document.querySelectorAll('.link-item');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'scale(1.05)';
        link.style.transition = 'transform 0.3s ease';
    });
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'scale(1)';
    });
});

// Toggle biodata
const toggleBtn = document.getElementById('toggleBtn');
const biodataSection = document.getElementById('biodataSection');

toggleBtn.addEventListener('click', () => {
    if (biodataSection.style.display === 'none') {
        biodataSection.style.display = 'block';
    } else {
        biodataSection.style.display = 'none';
    }
});

// Animasikan skill bar saat load
window.addEventListener('load', () => {
    const fills = document.querySelectorAll('.fill');
    fills.forEach(fill => {
        const width = fill.style.width;
        fill.style.width = '0';
        setTimeout(() => {
            fill.style.width = width;
        }, 300);
    });
});
