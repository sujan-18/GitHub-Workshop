// Fun and interactive script for the portfolio
document.addEventListener('DOMContentLoaded', function() {
    // Toggle skills visibility with animation
    const toggleButton = document.getElementById('skill-toggle');
    if (toggleButton) {
        const skillsUl = document.querySelector('#skills ul');

        toggleButton.addEventListener('click', function() {
            if (skillsUl.style.display === 'none') {
                skillsUl.style.display = 'block';
                toggleButton.textContent = 'Hide Skills 🙈';
            } else {
                skillsUl.style.display = 'none';
                toggleButton.textContent = 'Show Skills 👀';
            }
        });
    }

    // Add a fun click effect to projects
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('click', function() {
            alert('🚀 Awesome project! Check it out on GitHub!');
        });
    });

    // Random fun fact generator (students can expand this)
    const funFacts = [
        "Did you know? GitHub has over 100 million repositories! 🌟",
        "Fun fact: The first commit on Git was in 2005. 🕰️",
        "Tip: Use emojis in commit messages for fun! 😄"
    ];

    const randomFactBtn = document.querySelector('#learning button');
    if (randomFactBtn) {
        randomFactBtn.addEventListener('click', function() {
            const fact = funFacts[Math.floor(Math.random() * funFacts.length)];
            alert(fact);
        });
    }

    // Submission counter for submissions.html
    const countSpan = document.getElementById('count');
    if (countSpan) {
        const submissions = document.querySelectorAll('.submission');
        let submittedCount = 0;
        submissions.forEach(sub => {
            const name = sub.querySelector('h3').textContent;
            if (!name.includes('[Your Name]') && name !== 'Student 1: [Your Name]' && !name.includes('Student') && name.trim() !== '') {
                submittedCount++;
            }
        });
        countSpan.textContent = submittedCount;
    }

    // Simple animation on load
    const header = document.querySelector('header h1');
    if (header) {
        header.style.opacity = '0';
        setTimeout(() => {
            header.style.transition = 'opacity 1s';
            header.style.opacity = '1';
        }, 500);
    }
});