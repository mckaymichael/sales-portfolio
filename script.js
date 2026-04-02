// GSAP Initialization
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

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
