// Extracted JavaScript from HTML files

// WebFont loader
WebFont.load({
    google: {
        families: [
            "Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic",
            "Inter:100,300,regular,500,600,700,100italic,300italic,italic,500italic,600italic,700italic"
        ]
    }
});

// Webflow module detection
!function(o, c) {
    var n = c.documentElement, t = " w-mod-";
    n.className += t + "js";
    ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch");
}(window, document);

// Remove fill paths from FAQ icons to show only one plus sign
document.addEventListener('DOMContentLoaded', function() {
    const faqIcons = document.querySelectorAll('.faq-icon svg');
    faqIcons.forEach(function(icon) {
        const fillPaths = icon.querySelectorAll('path[fill-opacity="1"], path[fill="rgb(255,0,0)"]');
        fillPaths.forEach(function(path) {
            path.remove();
        });
    });

    // Scroll-triggered animations for services section
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of element is visible
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Unobserve after animation is triggered to prevent re-triggering
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Remove inline styles from about page hero image container to allow CSS animation
    const aboutHeroImageContainer = document.querySelector('[data-w-id="6db69785-4200-ce08-9b1c-b8678058c050"]');
    if (aboutHeroImageContainer) {
        // Remove inline styles that might block animation
        aboutHeroImageContainer.style.removeProperty('transform');
        aboutHeroImageContainer.style.removeProperty('opacity');
        // Force reflow to ensure animation starts
        void aboutHeroImageContainer.offsetWidth;
    }

    // Remove inline styles from about us text to allow flip-in animation
    const aboutUsText = document.querySelector('[data-w-id="403652b8-18c9-d980-3293-446a12dd0532"]');
    if (aboutUsText) {
        // Remove inline styles that might block animation
        aboutUsText.style.removeProperty('transform');
        aboutUsText.style.removeProperty('opacity');
        // Force reflow to ensure animation starts
        void aboutUsText.offsetWidth;
    }

    // Remove inline styles from about page story section images to allow animations
    const leftImage = document.querySelector('[data-w-id="92b61be7-a17b-3a71-431e-205590d95be7"]');
    if (leftImage) {
        // Remove inline styles that might block animation
        leftImage.style.removeProperty('transform');
        // Force reflow to ensure animation starts
        void leftImage.offsetWidth;
    }

    const rightImage = document.querySelector('[data-w-id="92b61be7-a17b-3a71-431e-205590d95bea"]');
    if (rightImage) {
        // Remove inline styles that might block animation
        rightImage.style.removeProperty('transform');
        // Force reflow to ensure animation starts
        void rightImage.offsetWidth;
    }

    // Remove inline styles from "Beyond Branding" text section to allow animation
    const beyondBrandingText = document.querySelector('[data-w-id="61b0a77f-a682-fc5e-d89a-a53da1db0d34"]');
    if (beyondBrandingText) {
        // Remove inline styles that might block animation
        beyondBrandingText.style.removeProperty('transform');
        beyondBrandingText.style.removeProperty('opacity');
        // Force reflow to ensure animation starts
        void beyondBrandingText.offsetWidth;
    }

    const beyondBrandingHeading = document.querySelector('[data-w-id="61b0a77f-a682-fc5e-d89a-a53da1db0d32"]');
    if (beyondBrandingHeading) {
        // Remove inline styles that might block animation
        beyondBrandingHeading.style.removeProperty('transform');
        beyondBrandingHeading.style.removeProperty('opacity');
        // Force reflow to ensure animation starts
        void beyondBrandingHeading.offsetWidth;
    }

    // Observe all text blocks and image wrappers in services section
    const textBlocksLeft = document.querySelectorAll('.card-flex.reverse-on-tab .large-card .card-text-block');
    const textBlocksRight = document.querySelectorAll('.card-flex:not(.reverse-on-tab) .large-card .card-text-block');
    const imageWrappers = document.querySelectorAll('.features-image-wrapper');

    textBlocksLeft.forEach(function(element) {
        observer.observe(element);
    });

    textBlocksRight.forEach(function(element) {
        observer.observe(element);
    });

    imageWrappers.forEach(function(element) {
        observer.observe(element);
    });

    // Metrics section - flip animation on scroll
    const metricsObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of element is visible
    };

    const metricsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-flip');
                // Unobserve after animation is triggered to prevent re-triggering
                metricsObserver.unobserve(entry.target);
            }
        });
    }, metricsObserverOptions);

    // Observe all metrics blocks
    const metricsBlocks = document.querySelectorAll('.metrics-block');
    metricsBlocks.forEach(function(element) {
        metricsObserver.observe(element);
    });

    // CTA Section - scroll-triggered animations (home, about, services, blog)
    const ctaObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const ctaObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const target = entry.target;

                const smallText = target.querySelector('.rt-text-white-6.rt-text-uppercase-2.rt-text-small-2');
                if (smallText) {
                    smallText.classList.add('animate-in');
                }

                const heading = target.querySelector('.rt-text-white-6.rt-margin-bottom-twenty-4');
                if (heading) {
                    heading.classList.add('animate-in');
                }

                const buttons = target.querySelectorAll('.button-new');
                buttons.forEach(function(button) {
                    button.classList.add('animate-in');
                });

                const trustedBy = target.querySelector('.rt-review-wrapper-2');
                if (trustedBy) {
                    trustedBy.classList.add('animate-in');
                }

                ctaObserver.unobserve(target);
            }
        });
    }, ctaObserverOptions);

    const ctaSections = document.querySelectorAll('.rt-service-two-cta-2');
    ctaSections.forEach(function(section) {
        ctaObserver.observe(section);
    });

    // Hero heading animation - start immediately on page load, slow movement, stops at CONVERT
    // Remove inline transform styles to allow CSS animation to control from the start
    function startHeroAnimation() {
        const heroHeadingElements = document.querySelectorAll('.hero-heading-flex');
        heroHeadingElements.forEach(function(element) {
            // Remove only transform-related inline styles, keep transform-style
            const currentStyle = element.getAttribute('style') || '';
            // Remove transform, -webkit-transform, -moz-transform, and will-change
            element.style.removeProperty('transform');
            element.style.removeProperty('-webkit-transform');
            element.style.removeProperty('-moz-transform');
            element.style.removeProperty('will-change');
            // Keep transform-style if it exists
            if (currentStyle.includes('transform-style')) {
                element.style.transformStyle = 'preserve-3d';
            }
            // Force animation to start immediately by resetting and restarting
            element.style.animation = 'none';
            element.style.webkitAnimation = 'none';
            element.style.mozAnimation = 'none';
            // Force reflow to ensure styles are applied
            void element.offsetWidth;
            // Re-apply animation to start immediately
            element.style.animation = '';
            element.style.webkitAnimation = '';
            element.style.mozAnimation = '';
            // Ensure animation is running immediately
            element.style.animationPlayState = 'running';
            element.style.webkitAnimationPlayState = 'running';
            element.style.mozAnimationPlayState = 'running';
        });
    }
    
    // Run immediately and also on DOMContentLoaded and window load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startHeroAnimation);
    } else {
        startHeroAnimation();
    }
    window.addEventListener('load', startHeroAnimation);

    // FAQ dropdown functionality - click to open/close
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function() {
            const faqDropdown = this.closest('.faq-dropdown');
            const answer = faqDropdown.querySelector('.dropdown-answer');
            const isOpen = answer.style.opacity === '1' || answer.style.height !== '0px';
            
            if (isOpen) {
                // Close
                answer.style.opacity = '0';
                answer.style.transform = 'translate3d(0px, -20px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
                answer.style.height = '0px';
                answer.style.overflow = 'hidden';
            } else {
                // Open
                answer.style.opacity = '1';
                answer.style.transform = 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
                answer.style.height = 'auto';
                answer.style.overflow = 'visible';
            }
        });
        
        // Make it look clickable
        toggle.style.cursor = 'pointer';
    });

    // Dark Mode Toggle Functionality
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const html = document.documentElement;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme on page load
    if (currentTheme === 'dark') {
        html.classList.add('dark-mode');
    }
    
    // Toggle dark mode when button is clicked
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            html.classList.toggle('dark-mode');
            
            // Save theme preference
            const theme = html.classList.contains('dark-mode') ? 'dark' : 'light';
            localStorage.setItem('theme', theme);
        });
    }

    // Contact page - remove inline styles from "lets connect" text to allow flip animation
    const contactHeroTitle = document.querySelector('[data-w-id="e170d4c2-1caa-bb4e-2443-6c157946b8f7"]');
    if (contactHeroTitle) {
        contactHeroTitle.style.removeProperty('transform');
        contactHeroTitle.style.removeProperty('opacity');
        // Force reflow to ensure animation starts
        void contactHeroTitle.offsetWidth;
    }

    // Contact page - remove inline styles from form container to allow CSS animation
    const contactFormContainer = document.querySelector('[data-w-id="7b541f0f-523b-05b2-7d99-485d6f5921ee"]');
    if (contactFormContainer) {
        contactFormContainer.style.removeProperty('transform');
        contactFormContainer.style.removeProperty('opacity');
        // Force reflow to ensure animation starts
        void contactFormContainer.offsetWidth;
    }

    // Contact page - remove inline styles from image to allow CSS animation
    const contactImage = document.querySelector('[data-w-id="7b541f0f-523b-05b2-7d99-485d6f592218"]');
    if (contactImage) {
        contactImage.style.removeProperty('opacity');
        // Force reflow to ensure animation starts
        void contactImage.offsetWidth;
    }
});

