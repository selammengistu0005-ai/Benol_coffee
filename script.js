// ==========================================================================
// 1. MOBILE NAVIGATION MENU
// ==========================================================================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('.nav-item');

// Toggle menu open/close
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Switch between hamburger and close icon
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars-staggered');
    icon.classList.toggle('fa-xmark');
});

// Close menu when a link is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.querySelector('i').className = 'fa-solid fa-bars-staggered';
    });
});


// ==========================================================================
// 2. MENU FILTRATION SYSTEM
// ==========================================================================
const filterBtns = document.querySelectorAll('.filter-btn');
const menuCards = document.querySelectorAll('.menu-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons, add to the clicked one
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.dataset.filter;
        
        // Show/hide menu cards based on the selected category
        menuCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});


// ==========================================================================
// 3. GALLERY LIGHTBOX
// ==========================================================================
const galleryItems = document.querySelectorAll('.gal-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

// Open lightbox when a gallery item is clicked
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        // Get the image source from the clicked item
        const imgSrc = item.querySelector('img').src;
        lightboxImg.src = imgSrc;
        
        // Show lightbox and prevent background scrolling
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close lightbox when the close button is clicked
lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scrolling
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});
