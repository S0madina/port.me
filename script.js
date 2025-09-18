document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons(); // Initialize Lucide icons

    const navLinks = document.querySelectorAll('nav a');
    let activeSection = 'home';

    // Smooth scrolling for navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');
            activeSection = sectionId;
            updateActiveNav();
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Update active nav item
    function updateActiveNav() {
        navLinks.forEach(link => {
            const sectionId = link.getAttribute('data-section');
            link.classList.toggle('active', sectionId === activeSection);
        });
    }

    // Intersection Observer for auto-highlighting
    const sections = document.querySelectorAll('section[id], header[id]'); // Updated to include header
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -80% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activeSection = entry.target.id;
                updateActiveNav();
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // Handle clicks on clickable skills
    const skills = document.querySelectorAll('.clickable-skill');
    skills.forEach(skill => {
        skill.addEventListener('click', (e) => {
            const skillName = e.target.getAttribute('data-skill');
            alert(`You clicked on: ${skillName}`);
        });
    });
});