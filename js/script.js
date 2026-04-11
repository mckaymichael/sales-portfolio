// GSAP Initialization
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Initialize Lenis Smooth Scroll
const lenis = new Lenis({
    duration: 1.0,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    wheelMultiplier: 1.4,
    smoothWheel: true,
});

// Link Lenis to ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// Smooth scroll for all internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId === '') return;
        lenis.scrollTo(targetId, {
            offset: -80, // Accounts for head-20 (80px)
            duration: 0.8
        });
    });
});



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
    const heroTextDelay = isMobile ? 2 : 2;
    const heroNavDelay = isMobile ? 3 : 3;
    const animDuration = 3;

    // Handle Mobile Video Seeking
    const heroVideo = document.getElementById('hero-video');
    if (isMobile && heroVideo) {
        heroVideo.addEventListener('loadedmetadata', () => {
            const startTime = Math.max(0, heroVideo.duration - 9);
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
        "Team Player", "Caring", "Sponge", "Talkative", "Entrepreneur", "Innovative", "Creative", "🐶🐶🐶", "📸 Gotcha 📸", "You look good 😜","LinkedIn Boy","Sustainability Nerd","I'm a nerd", "Photographer", "Climber", "Love", "Courage", "Wisdom", "Book Worm", "Business, Business, Business", "Smoothies 🥵"
    ];

    function createThought(btn) {
        const thought = document.createElement('div');
        thought.textContent = thoughts[Math.floor(Math.random() * thoughts.length)];
        thought.className = 'absolute pointer-events-none font-header font-bold text-[10px] uppercase tracking-widest text-white/90 whitespace-nowrap z-[100]';
        
        const rect = btn.getBoundingClientRect();
        const voicesSection = document.getElementById('voices');
        
        if (voicesSection) {
            const vRect = voicesSection.getBoundingClientRect();
            thought.style.position = 'absolute';
            thought.style.left = `${rect.left + rect.width / 2 - vRect.left}px`;
            thought.style.top = `${rect.top - vRect.top - 10}px`;
            thought.style.transform = 'translateX(-50%)';
            voicesSection.appendChild(thought);
        } else {
            const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            thought.style.position = 'absolute';
            thought.style.left = `${rect.left + rect.width / 2 + scrollLeft}px`;
            thought.style.top = `${rect.top + scrollTop - 10}px`;
            thought.style.transform = 'translateX(-50%)';
            
            document.body.appendChild(thought);
        }
        
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
            y: '14%', // Reduced from 20% to prevent over-translating past the -20% top offset (140vh * 0.14 = 19.6vh <= 20vh overhang)
            ease: 'none',
            scrollTrigger: {
                trigger: wrapper,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });

    // --- GLOBAL REVEAL ANIMATIONS ---
    const revealElements = gsap.utils.toArray(".animate-reveal");
    if (revealElements.length > 0) {
        ScrollTrigger.batch(".animate-reveal", {
            onEnter: batch => gsap.to(batch, {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power2.out",
                overwrite: true
            }),
            once: true
        });
    }

    // --- GSAP ZERO-HEIGHT LAZY FIX ---
    // Instead of forcing a massive loading screen, we gracefully listen for lazy-loaded
    // images popping into the DOM and tell GSAP to recalibrate its physical markers.
    // We debounce the refresh call to prevent performance thrashing on rapid loading.
    let refreshTimeout;
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => {
        img.addEventListener('load', () => {
            clearTimeout(refreshTimeout);
            refreshTimeout = setTimeout(() => {
                ScrollTrigger.refresh();
            }, 100);
        });
    });

    // --- GSAP SHOWCASE PINNING & WIPING ---
    const pinContainer = document.getElementById('showcase-pin-container');
    if (pinContainer && window.innerWidth >= 768) {
        const panels = gsap.utils.toArray('.showcase-panel');
        
        if (panels.length > 0) {
            // Initialize subsequent panels off-screen
            gsap.set(panels.slice(1), { yPercent: 100 });
            
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: pinContainer,
                    pin: true,
                    scrub: true,
                    start: "top 80px", // Account for 80px static header
                    end: () => "+=" + (panels.length * window.innerHeight),
                }
            });

            panels.slice(1).forEach((panel, i) => {
                const prevPanel = panels[i];
                
                // Shrink previous panel to simulate depth
                tl.to(prevPanel, {
                    scale: 0.95,
                    transformOrigin: "top center",
                    ease: "none",
                    duration: 1
                });

                // Slide new panel up over it
                tl.to(panel, {
                    yPercent: 0,
                    ease: "none",
                    duration: 1
                }, "<");
                
                // Subtle image parallax/scale
                const img = panel.querySelector('.showcase-img');
                if (img) {
                    gsap.fromTo(img, 
                        { scale: 1.15 }, 
                        { scale: 1, ease: "none", duration: 1 }, 
                        "<" 
                    );
                }
                
                // Content subtle reveal
                const content = panel.querySelector('.showcase-content');
                if (content) {
                    gsap.fromTo(content,
                        { y: 30, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
                        "<0.6" 
                    );
                }
            });
        }
    }

    // --- IMPACT PAGE PINNING ---
    const impactPinContainer = document.getElementById('impact-pin-container');
    if (impactPinContainer && window.innerWidth >= 768) {
        const panels = gsap.utils.toArray('#impact-pin-container .showcase-panel');
        
        if (panels.length > 0) {
            gsap.set(panels.slice(1), { yPercent: 100 });
            
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: impactPinContainer,
                    pin: true,
                    scrub: true,
                    start: "top 80px",
                    // Snappy duration (0.75 per screen)
                    end: () => "+=" + (panels.length * window.innerHeight * 0.75),
                }
            });

            panels.slice(1).forEach((panel, i) => {
                const prevPanel = panels[i];
                
                tl.to(prevPanel, {
                    scale: 0.95,
                    transformOrigin: "top center",
                    ease: "none",
                    duration: 1
                });

                tl.to(panel, {
                    yPercent: 0,
                    ease: "none",
                    duration: 1
                }, "<");
                
                const img = panel.querySelector('.showcase-img');
                if (img) {
                    gsap.fromTo(img, 
                        { scale: 1.15 }, 
                        { scale: 1, ease: "none", duration: 1 }, 
                        "<" 
                    );
                }
                
                const content = panel.querySelector('.showcase-content');
                if (content) {
                    gsap.fromTo(content,
                        { y: 30, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
                        "<0.6" 
                    );
                }
            });
        }
    }

    // --- SPONSOR CTA PINNING ---
    const sponsorPinContainer = document.getElementById('sponsor-pin-container');
    if (sponsorPinContainer && window.innerWidth >= 768) {
        const panels = gsap.utils.toArray('#sponsor-pin-container .showcase-panel');
        
        if (panels.length > 0) {
            gsap.set(panels.slice(1), { yPercent: 100 });
            
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sponsorPinContainer,
                    pin: true,
                    scrub: true,
                    start: "top 80px",
                    // Snappy duration
                    end: () => "+=" + (panels.length * window.innerHeight * 0.75),
                }
            });

            panels.slice(1).forEach((panel, i) => {
                const prevPanel = panels[i];
                
                tl.to(prevPanel, {
                    scale: 0.95,
                    transformOrigin: "top center",
                    ease: "none",
                    duration: 1
                });

                tl.to(panel, {
                    yPercent: 0,
                    ease: "none",
                    duration: 1
                }, "<");
                
                const content = panel.querySelector('.showcase-content');
                if (content) {
                    gsap.fromTo(content,
                        { y: 30, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
                        "<0.6" 
                    );
                }
            });
        }
    }
});
