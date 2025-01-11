// FAQ Interaction
document.addEventListener('DOMContentLoaded', () => {
    // Add click handlers to FAQ buttons
    const faqButtons = document.querySelectorAll('.space-y-4 button');
    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('i');
            
            // Toggle content visibility
            content.classList.toggle('hidden');
            
            // Rotate icon
            icon.classList.toggle('rotate-180');
        });
    });

    // Mobile Menu Interaction
    const menuButton = document.querySelector('.md\\:hidden.text-gray-600');
    const mobileMenu = document.querySelector('.md\\:hidden.hidden');
    
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            // Toggle mobile menu visibility
            mobileMenu.classList.toggle('hidden');
        });
    }
});
