// GSAP Initialization
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Initialize Lenis Smooth Scroll
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    wheelMultiplier: 1.1,
    smoothWheel: true,
});

// Link Lenis to ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);



// Image Protection: Disable right-click on all images
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
}, false);

document.addEventListener('DOMContentLoaded', () => {
    
    
    // --- HERO ANIMATIONS ---
    const isMobile = window.innerWidth < 768;
    const heroTextDelay = isMobile ? 4 : 10;
    const heroNavDelay = isMobile ? 7 : 13;
    const animDuration = 5;

    // Handle Mobile Video Seeking
    const heroVideo = document.getElementById('hero-video');
    if (isMobile && heroVideo) {
        heroVideo.addEventListener('loadedmetadata', () => {
            const startTime = Math.max(0, heroVideo.duration - 7);
            heroVideo.currentTime = startTime;
        });
    }

    if (document.querySelector('.hero-text')) {
        gsap.to('.hero-text', {
            y: 0,
            opacity: 1,
            duration: animDuration,
            stagger: 0.2,
            ease: "power3.out",
            delay: heroTextDelay
        });
    }
    
    if (document.querySelector('.hero-nav')) {
        gsap.to('.hero-nav', {
            y: 0,
            opacity: 1,
            duration: animDuration,
            ease: "power2.out",
            delay: heroNavDelay
        });
    }
    
    // --- HERO PARALLAX ---
    if (document.getElementById('hero') && document.getElementById('hero-video')) {
        gsap.to('#hero-video', {
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            },
            y: '15%',
            ease: 'none'
        });
    }

    // --- BENTO GRID ANIMATIONS ---
    if (document.querySelector('.bento-item') && document.getElementById('me-plus-nature')) {
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
    }

    // --- ABOUT SECTION ANIMATIONS ---
    if (document.getElementById('about')) {
        if (document.querySelector('.strength-card')) {
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
        }
        
        if (document.querySelector('.about-content')) {
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
        }

        if (document.querySelector('.about-image')) {
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
        }
    }

    // --- IMPACT SECTION ANIMATIONS ---
    if (document.querySelector('.editorial-card') && document.getElementById('section-impact')) {
        gsap.to(".impact-title", {
            scrollTrigger: {
                trigger: "#section-impact",
                start: "top 75%",
            },
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
        });

        gsap.to(".editorial-card", {
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
    }

    // --- GALLERY ANIMATIONS ---
    const galleryItems = document.querySelectorAll(".gallery-item");
    if (galleryItems.length > 0) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { rootMargin: "0px 0px 100px 0px" });

        galleryItems.forEach(item => observer.observe(item));
    }

    // --- CAROUSEL LOGIC (SectionVoices) ---
    const track = document.getElementById('carousel-track');
    const slides = document.querySelectorAll('.voice-slide');
    const nextBtns = document.querySelectorAll('.next-testimonial');
    const prevBtns = document.querySelectorAll('.prev-testimonial');
    let currentIndex = 0;

    function snapToCurrentSlide() {
        const slideWidth = track.parentElement.clientWidth;
        const targetX = currentIndex * -slideWidth;
        
        gsap.to(track, {
            x: targetX,
            duration: 0.4,
            ease: "power2.out"
        });

        updateIndex();
    }

    function updateIndex() {
        slides.forEach((slide, i) => {
            const indexDisplay = slide.querySelector('.carousel-index');
            if (indexDisplay) {
                indexDisplay.textContent = `${currentIndex + 1}/${slides.length}`;
            }
        });
    }

    // --- WHIMSICAL THOUGHT LOGIC (Testimonial Arrows) ---
    const thoughts = [
        "I'm awesome", "Leader Material", "Curious Cat", "Dog Person",
        "Tree Hugger", "Goofball", "Goofy Goober", "Silly Goose",
        "Team Player", "Caring", "Sponge", "Talkative", "Entrepreneur", "Innovative", "Creative", "🐶🐶🐶", "📸 Gotcha 📸", "You look good 😜",
    ];

    function createThought(btn) {
        const thought = document.createElement('div');
        thought.textContent = thoughts[Math.floor(Math.random() * thoughts.length)];
        thought.className = 'absolute pointer-events-none font-header font-bold text-[10px] uppercase tracking-widest text-white/90 whitespace-nowrap z-[100]';
        
        // Position it above the button relative to the viewport/document
        const rect = btn.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        thought.style.position = 'absolute';
        thought.style.left = `${rect.left + rect.width / 2 + scrollLeft}px`;
        thought.style.top = `${rect.top + scrollTop - 10}px`;
        thought.style.transform = 'translateX(-50%)';
        
        document.body.appendChild(thought);
        
        gsap.to(thought, {
            y: -40,
            opacity: 0,
            duration: 0.9,
            ease: "power1.out",
            onComplete: () => thought.remove()
        });
    }

    if (track && slides.length > 0) {
        if (nextBtns.length > 0 && prevBtns.length > 0) {
            nextBtns.forEach(btn => btn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % slides.length;
                snapToCurrentSlide();
                createThought(btn);
            }));
            prevBtns.forEach(btn => btn.addEventListener('click', () => {
                currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
                snapToCurrentSlide();
                createThought(btn);
            }));
        }

        window.addEventListener('resize', snapToCurrentSlide);
        snapToCurrentSlide();
    }


    // --- MOBILE MENU LOGIC (Animated Accordion) ---
    const btn = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    const iconClosed = document.getElementById('icon-menu-closed');
    const iconOpen = document.getElementById('icon-menu-open');
    const siteNav = menu ? menu.closest('nav') : null;
    const headerWrapper = siteNav ? siteNav.closest('.fixed') : null;

    if (btn && menu) {
        btn.addEventListener('click', () => {
            const isClosed = menu.classList.contains('max-h-0');
            if (isClosed) {
                menu.classList.remove('max-h-0');
                menu.classList.add('max-h-[500px]');
                iconClosed.classList.add('hidden');
                iconClosed.classList.remove('block');
                iconOpen.classList.remove('hidden');
                iconOpen.classList.add('block');
            } else {
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
        const toggleHeader = () => {
            if (window.scrollY > 50) {
                siteNav.classList.remove('bg-transparent', 'text-[#FDFBF9]', 'border-none');
                siteNav.classList.add('bg-[#FFF8F3]', 'text-gray-900', 'shadow-sm', 'border-b', 'border-[#D7C2B7]');
                if (headerWrapper) headerWrapper.classList.remove('no-border-at-top');
            } else {
                siteNav.classList.remove('bg-[#FFF8F3]', 'text-gray-900', 'shadow-sm', 'border-b', 'border-[#D7C2B7]');
                siteNav.classList.add('bg-transparent', 'text-[#FDFBF9]', 'border-none');
                if (headerWrapper) headerWrapper.classList.add('no-border-at-top');
            }
        };
        window.addEventListener('scroll', toggleHeader);
        toggleHeader(); // Initial run
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

    // --- AUTO SCROLL BUTTON LOGIC ---
    const autoScrollBtn = document.getElementById('auto-scroll-btn');
    if (autoScrollBtn) {
        let isAutoScrolling = false;
        let lastTime = 0;
        let animationFrameId;

        const iconPlay = document.getElementById('icon-play');
        const iconPause = document.getElementById('icon-pause');

        function autoScroll(timestamp) {
            if (!isAutoScrolling) return;
            
            if (lastTime !== 0) {
                const deltaTime = timestamp - lastTime;
                // 150px per second -> 0.15px per millisecond
                const scrollAmount = deltaTime * 0.15;
                window.scrollBy(0, scrollAmount);
                
                // Stop if hitting the bottom
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                    toggleScroll();
                    return;
                }
            }
            
            lastTime = timestamp;
            animationFrameId = requestAnimationFrame(autoScroll);
        }

        function toggleScroll() {
            isAutoScrolling = !isAutoScrolling;
            if (isAutoScrolling) {
                lastTime = 0;
                iconPlay.classList.add('hidden');
                iconPause.classList.remove('hidden');
                animationFrameId = requestAnimationFrame(autoScroll);
            } else {
                iconPlay.classList.remove('hidden');
                iconPause.classList.add('hidden');
                cancelAnimationFrame(animationFrameId);
            }
        }

        autoScrollBtn.addEventListener('click', toggleScroll);
        
        // Let the user interrupt by scrolling manually
        ['wheel', 'touchstart'].forEach(evt => {
            window.addEventListener(evt, () => {
                if (isAutoScrolling) toggleScroll();
            }, { passive: true });
        });
    }

    // --- GLOBAL PARALLAX ENGINE ---
    const parallaxImages = document.querySelectorAll('.parallax-img');
    parallaxImages.forEach(img => {
        // Use the closest parent with .parallax-wrap for the trigger
        const wrapper = img.closest('.parallax-wrap');
        if (!wrapper) return;

        gsap.to(img, {
            y: '20%', // This moves within the 140% height / -20% top offset
            ease: 'none',
            scrollTrigger: {
                trigger: wrapper,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });
});
