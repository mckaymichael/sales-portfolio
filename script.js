// GSAP Initialization
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


// Image Protection: Disable right-click on all images
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
}, false);

document.addEventListener('DOMContentLoaded', () => {
    
    
    // --- HERO ANIMATIONS ---
    const heroTl = gsap.timeline();
    
    heroTl.to('.hero-text', {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2
    });
    
    gsap.to('.hero-nav', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.8
    });

    // --- BENTO GRID ANIMATIONS ---
    gsap.to(".bento-item", {
        scrollTrigger: {
            trigger: "#me-plus-nature",
            start: "top 75%",
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: "power2.out",
    });

    // --- ABOUT SECTION ANIMATIONS ---
    gsap.to(".strength-card", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 85%",
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
    });
    
    gsap.to(".about-content", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 85%",
        },
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
    });

    gsap.to(".about-image", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 85%",
        },
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
    });

    // --- IMPACT SECTION ANIMATIONS ---
    gsap.to(".impact-row > *", {
        scrollTrigger: {
            trigger: "#section-impact",
            start: "top 75%",
        },
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
    });

    gsap.to(".impact-title", {
        scrollTrigger: {
            trigger: "#section-impact",
            start: "top 80%",
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
    });

    // --- GALLERY FLOATING ANIMATION ---
    gsap.utils.toArray(".gallery-item").forEach((item) => {
        gsap.to(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 90%",
                toggleActions: "play none none none"
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out"
        });
    });

    // --- CAROUSEL LOGIC (SectionVoices) ---
    const track = document.getElementById('carousel-track');
    const slides = document.querySelectorAll('.voice-slide');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    let currentIndex = 0;

    function updateCarousel() {
        // Slide the track
        gsap.to(track, {
            xPercent: -currentIndex * 100,
            duration: 0.8,
            ease: "power3.inOut"
        });

        // Animate content of the current slide
        const currentSlide = slides[currentIndex];
        const content = currentSlide.querySelectorAll('.animate-content');
        
        gsap.fromTo(content, 
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 0.8, delay: 0.3, stagger: 0.1, ease: "power2.out", overwrite: "auto" }
        );
    }

    if (nextBtn && prevBtn && track) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
            updateCarousel();
        });

        // Initial animation for the first slide content
        updateCarousel();
    }


    // --- MOBILE MENU LOGIC (Animated Accordion) ---
    const btn = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    const iconClosed = document.getElementById('icon-menu-closed');
    const iconOpen = document.getElementById('icon-menu-open');
    const siteNav = menu ? menu.closest('nav') : null;

    if (btn && menu) {
        btn.addEventListener('click', () => {
            const isClosed = menu.classList.contains('max-h-0');
            if (isClosed) {
                // Open menu smoothly
                menu.classList.remove('max-h-0');
                menu.classList.add('max-h-[500px]');
                iconClosed.classList.add('hidden');
                iconClosed.classList.remove('block');
                iconOpen.classList.remove('hidden');
                iconOpen.classList.add('block');
            } else {
                // Close menu smoothly
                menu.classList.add('max-h-0');
                menu.classList.remove('max-h-[500px]');
                iconOpen.classList.add('hidden');
                iconOpen.classList.remove('block');
                iconClosed.classList.remove('hidden');
                iconClosed.classList.add('block');
            }
        });
    }

    // Scroll Logic for the standard nav
    if (siteNav && siteNav.classList.contains('bg-transparent')) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                siteNav.classList.remove('bg-transparent', 'text-[#FDFBF9]');
                siteNav.classList.add('bg-[#FFF8F3]', 'text-gray-900', 'shadow-sm', 'border-b', 'border-[#D7C2B7]');
            } else {
                siteNav.classList.remove('bg-[#FFF8F3]', 'text-gray-900', 'shadow-sm', 'border-b', 'border-[#D7C2B7]');
                siteNav.classList.add('bg-transparent', 'text-[#FDFBF9]');
            }
        });
    }


    // --- SMOOTH SCROLL FOR ANCHORS ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            gsap.to(window, {
                duration: 1,
                scrollTo: targetId,
                ease: "power2.inOut"
            });
        });
    });
});
