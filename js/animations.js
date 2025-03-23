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
}

// Project cards animation
function initProjectAnimations() {
    // Stagger animation for project cards
    gsap.from(".project-card", {
        scrollTrigger: {
            trigger: ".projects",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
    });

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

// Paragraph animations
function initParagraphAnimations() {
    // Animate each paragraph in the values section
    gsap.utils.toArray('.values-content p').forEach(paragraph => {
        gsap.from(paragraph, {
            scrollTrigger: {
                trigger: paragraph,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
            },
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });
    });
}

// Smooth scroll animation for navigation
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            
            gsap.to(window, {
                duration: 1,
                scrollTo: target,
                ease: "power3.inOut"
            });
        });
    });
}

// Header background animation
function initHeaderAnimation() {
    const header = document.querySelector('header');
    
    ScrollTrigger.create({
        start: "top -100",
        end: 99999,
        toggleClass: {
            targets: header,
            className: "header-scrolled"
        },
        onUpdate: (self) => {
            gsap.to(header, {
                backgroundColor: self.isActive ? "rgba(255, 247, 235, 0.95)" : "rgba(255, 247, 235, 1)",
                backdropFilter: self.isActive ? "blur(10px)" : "blur(0px)",
                duration: 0.3
            });
        }
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
    initLoadAnimations();
    initProjectAnimations();
    initParagraphAnimations();
    initSmoothScroll();
    initHeaderAnimation();
    initContactButtonAnimations();
}); 