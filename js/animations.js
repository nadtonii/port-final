// Handle loading screen
function handleLoader() {
    const loader = document.querySelector('.loader-overlay');
    
    // Hide loader when all content is loaded
    window.addEventListener('load', () => {
        // Add a small delay to ensure smooth transition
        setTimeout(() => {
            loader.classList.add('hidden');
            // Remove loader from DOM after transition
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500); // Match this with the CSS transition time
            // Start other animations after loader is hidden
            initLoadAnimations();
        }, 1000); // Show loader for at least 1 second
    });
}

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Initial page load animation
function initLoadAnimations() {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.from(".drawing", {
        y: 30,
        opacity: 0,
        duration: 1.2,
        delay: 0.2
    })
    .from("h1", {
        y: 20,
        opacity: 0,
        duration: 0.8
    }, "-=0.8")
    .from(".values-content", {
        y: 15,
        opacity: 0,
        duration: 0.8
    }, "-=0.4")
    .from(".current", {
        y: 15,
        opacity: 0,
        duration: 0.8
    }, "-=0.6")
    .from(".contact-links", {
        y: 10,
        opacity: 0,
        duration: 0.6
    }, "-=0.4");
    
    // Make sure all elements are fully visible immediately
    gsap.set(".project-card, .values-content p", { opacity: 1, y: 0 });
}

// Project cards animation
function initProjectAnimations() {
    // Hover animations for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const cardContent = card.querySelector('.project-content');
        const button = card.querySelector('.case-study-btn');
        
        card.addEventListener('mouseenter', () => {
            gsap.to(cardContent, {
                y: -5,
                duration: 0.3,
                ease: "power2.out"
            });
            gsap.to(button, {
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(cardContent, {
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            });
            gsap.to(button, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
}

// Header styling
function initHeaderAnimation() {
    const header = document.querySelector('header');
    // Set initial state
    gsap.set(header, {
        backgroundColor: "rgba(255, 247, 235, 1)",
        backdropFilter: "blur(0px)",
    });
}

// Contact buttons hover animation
function initContactButtonAnimations() {
    const contactButtons = document.querySelectorAll('.contact-button');
    
    contactButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
}

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
    handleLoader();
    initProjectAnimations();
    initHeaderAnimation();
    initContactButtonAnimations();
}); 