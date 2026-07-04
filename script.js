(() => {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        
        // 1. Smooth Scrolling for Navigation Links
        const navLinks = document.querySelectorAll('.nav-links a');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80, // Accounts for the sticky glassmorphism nav
                        behavior: 'smooth'
                    });
                }
            });
        });

        // 2. Intersection Observer for Smooth Fade-in Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const fadeObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Ensures the animation only runs once
                }
            });
        }, observerOptions);

        // Target all elements with the 'fade-in' class
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(el => fadeObserver.observe(el));

        // 3. Prevent Default Jump on Gallery Lightbox Triggers
        const galleryTriggers = document.querySelectorAll('.lightbox-trigger');
        galleryTriggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                // Placeholder for future lightbox modal logic
                console.log('Image clicked for lightbox view.');
            });
        });

        // 4. Contact Form Submission Handler
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                // Simple alert to simulate form submission success
                alert('Thank you for reaching out to Benol Coffee! We will review your message and get back to you shortly.');
                contactForm.reset();
            });
        }
        
    });
})();