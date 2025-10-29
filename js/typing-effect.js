// Typing Effect for Home Page
(function() {
    const roles = [
        "Computer Engineer",
        "Software Engineer",
        "Backend Developer",
        "DevOps Enthusiast"
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const typedTextElement = document.getElementById('typed-text');
    
    function type() {
        if (!typedTextElement) return;
        
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            // Deleting text
            typedTextElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50; // Faster deletion
            
            if (charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typingSpeed = 500; // Pause before typing next role
            }
        } else {
            // Typing text
            typedTextElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
            
            if (charIndex === currentRole.length) {
                isDeleting = true;
                typingSpeed = 2000; // Pause before deleting
            }
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Start typing effect when page loads
    if (typedTextElement) {
        setTimeout(type, 1000); // Initial delay before starting
    }
})();
