document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Toggle aria-expanded attribute for accessibility
            const isExpanded = navMenu.classList.contains('active');
            this.setAttribute('aria-expanded', isExpanded);
        });
        }
    });
    
    // Testimonial Slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (testimonialSlides.length > 0) {
        let currentSlide = 0;
        
        // Function to show a specific slide
        function showSlide(index) {
            // Hide all slides
            testimonialSlides.forEach(slide => {
                slide.classList.remove('active');
            });
            
            // Remove active class from all dots
            dots.forEach(dot => {
                dot.classList.remove('active');
            });
            
            // Show the current slide and activate the corresponding dot
            testimonialSlides[index].classList.add('active');
            dots[index].classList.add('active');
            
            // Update current slide index
            currentSlide = index;
        }
        
        // Event listeners for dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });
        
        // Event listener for previous button
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                let index = currentSlide - 1;
                if (index < 0) {
                    index = testimonialSlides.length - 1;
                }
                showSlide(index);
            });
        }
        
        // Event listener for next button
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                let index = currentSlide + 1;
                if (index >= testimonialSlides.length) {
                    index = 0;
                }
                showSlide(index);
            });
        }
        
        // Auto slide change
        let slideInterval = setInterval(() => {
            let index = currentSlide + 1;
            if (index >= testimonialSlides.length) {
                index = 0;
            }
            showSlide(index);
        }, 5000);
        
        // Pause auto slide on hover
        const testimonialSlider = document.querySelector('.testimonial-slider');
        if (testimonialSlider) {
            testimonialSlider.addEventListener('mouseenter', () => {
                clearInterval(slideInterval);
            });
            
            testimonialSlider.addEventListener('mouseleave', () => {
                slideInterval = setInterval(() => {
                    let index = currentSlide + 1;
                    if (index >= testimonialSlides.length) {
                        index = 0;
                    }
                    showSlide(index);
                }, 5000);
            });
        }
    }
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', () => {
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
            });
        }
    });
    
    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            
            // Validate name
            const nameInput = document.getElementById('name');
            const nameError = document.getElementById('nameError');
            
            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Please enter your name';
                nameError.style.display = 'block';
                nameInput.classList.add('error');
                isValid = false;
            } else {
                nameError.style.display = 'none';
                nameInput.classList.remove('error');
            }
            
            // Validate email
            const emailInput = document.getElementById('email');
            const emailError = document.getElementById('emailError');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailPattern.test(emailInput.value)) {
                emailError.textContent = 'Please enter a valid email address';
                emailError.style.display = 'block';
                emailInput.classList.add('error');
                isValid = false;
            } else {
                emailError.style.display = 'none';
                emailInput.classList.remove('error');
            }
            
            // Validate phone
            const phoneInput = document.getElementById('phone');
            const phoneError = document.getElementById('phoneError');
            const phonePattern = /^\d{10,15}$/;
            
            if (!phonePattern.test(phoneInput.value.replace(/\D/g, ''))) {
                phoneError.textContent = 'Please enter a valid phone number';
                phoneError.style.display = 'block';
                phoneInput.classList.add('error');
                isValid = false;
            } else {
                phoneError.style.display = 'none';
                phoneInput.classList.remove('error');
            }
            
            // Validate device
            const deviceInput = document.getElementById('device');
            const deviceError = document.getElementById('deviceError');
            
            if (deviceInput.value === '') {
                deviceError.textContent = 'Please select your device type';
                deviceError.style.display = 'block';
                deviceInput.classList.add('error');
                isValid = false;
            } else {
                deviceError.style.display = 'none';
                deviceInput.classList.remove('error');
            }
            
            // Validate service
            const serviceInput = document.getElementById('service');
            const serviceError = document.getElementById('serviceError');
            
            if (serviceInput.value === '') {
                serviceError.textContent = 'Please select a service';
                serviceError.style.display = 'block';
                serviceInput.classList.add('error');
                isValid = false;
            } else {
                serviceError.style.display = 'none';
                serviceInput.classList.remove('error');
            }
            
            // Validate message
            const messageInput = document.getElementById('message');
            const messageError = document.getElementById('messageError');
            
            if (messageInput.value.trim() === '') {
                messageError.textContent = 'Please enter your message';
                messageError.style.display = 'block';
                messageInput.classList.add('error');
                isValid = false;
            } else {
                messageError.style.display = 'none';
                messageInput.classList.remove('error');
            }
            
            // If form is valid, show success message
            if (isValid) {
                contactForm.style.display = 'none';
                document.getElementById('formSuccess').style.display = 'block';
                
                // In a real application, you would submit the form data to a server here
                // For this example, we're just showing the success message
            }
        });
    }
    
    // Animate achievement numbers
    const achievementNumbers = document.querySelectorAll('.achievement-number');
    
    if (achievementNumbers.length > 0) {
        // Function to check if element is in viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
        
        // Function to animate counting
        function animateCounter(element) {
            const target = Number.parseInt(element.getAttribute('data-count'));
            const duration = 2000; // 2 seconds
            const step = target / (duration / 16); // 60fps
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                element.textContent = Math.floor(current);
                
                if (current >= target) {
                    element.textContent = target;
                    clearInterval(timer);
                }
            }, 16);
        }
        
        // Check if achievements section is in viewport on scroll
        let animated = false;
        
        function checkAchievements() {
            if (!animated && achievementNumbers.length > 0 && isInViewport(achievementNumbers[0])) {
                achievementNumbers.forEach(number => {
                    animateCounter(number);
                });
                animated = true;
                window.removeEventListener('scroll', checkAchievements);
            }
        }
        
        window.addEventListener('scroll', checkAchievements);
        checkAchievements(); // Check on page load
    }
    
    // Comment Form Validation
    const commentForm = document.getElementById('commentForm');
    
    if (commentForm) {
        commentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            
            // Validate name
            const nameInput = document.getElementById('commentName');
            if (nameInput.value.trim() === '') {
                nameInput.classList.add('error');
                isValid = false;
            } else {
                nameInput.classList.remove('error');
            }
            
            // Validate email
            const emailInput = document.getElementById('commentEmail');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailPattern.test(emailInput.value)) {
                emailInput.classList.add('error');
                isValid = false;
            } else {
                emailInput.classList.remove('error');
            }
            
            // Validate comment
            const commentInput = document.getElementById('commentContent');
            if (commentInput.value.trim() === '') {
                commentInput.classList.add('error');
                isValid = false;
            } else {
                commentInput.classList.remove('error');
            }
            
            // If form is valid, show success message
            if (isValid) {
                // In a real application, you would submit the comment to a server here
                // For this example, we'll just clear the form
                commentForm.reset();
                
                // Create a new comment element
                const commentsContainer = document.querySelector('.comments-list');
                            const newComment = document.createElement('div');
                            newComment.classList.add('comment');
                            newComment.innerHTML = `
                                <p><strong>${nameInput.value}</strong> (${emailInput.value})</p>
                                <p>${commentInput.value}</p>
                            `;
                            commentsContainer.appendChild(newComment);
                        }
                    });
                }
