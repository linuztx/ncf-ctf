// Track completed challenges
let completedChallenges = JSON.parse(localStorage.getItem('completedChallenges')) || [];


// Function to check flags
function checkFlag(challenge, flag) {
    const flags = {
        'challenge1': 'NCF{1nsp3ct_3l3m3nt_pr0}',
        'challenge2': 'NCF{c0ns0l3_m4st3r_2024}',
        'challenge3': 'NCF{c00k13_m0nst3r}',
        'challenge4': 'NCF{sweden}',
        'challenge5': 'NCF{st3g0_m4st3r_2024}',
        'challenge6': 'NCF{b4s64_d3c0d3r}'
    };

    return flags[challenge].toLowerCase() === flag.toLowerCase();
}

// Update UI to show completed challenges and progress
function updateCompletedChallenges() {
    // Update challenge cards
    completedChallenges.forEach(challenge => {
        const challengeElement = document.querySelector(`[data-challenge="${challenge}"]`);
        if (challengeElement) {
            challengeElement.classList.add('challenge-solved');
        }
    });

    // Update progress bar and text
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    
    if (progressBar && progressText) {
        const totalChallenges = 6;
        const completedCount = Math.min(completedChallenges.length, totalChallenges);
        const progressPercentage = (completedCount / totalChallenges) * 100;
        
        progressBar.style.width = `${Math.min(progressPercentage, 100)}%`;
        progressText.textContent = `${completedCount}/${totalChallenges}`;

        // Add completion effects when all challenges are completed
        if (completedCount === totalChallenges) {
            progressBar.classList.add('animate-pulse');
            showNotification('success', '🎉 Congratulations! You\'ve completed all challenges!');
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    updateCompletedChallenges();
});

// Update progress when a challenge is completed
function updateProgress(challenge) {
    if (!completedChallenges.includes(challenge)) {
        completedChallenges.push(challenge);
        localStorage.setItem('completedChallenges', JSON.stringify(completedChallenges));
        updateCompletedChallenges();
    }
}

function toggleHint() {
    const hint = document.getElementById('hint');
    if (hint.classList.contains('hidden')) {
        hint.classList.remove('hidden');
        hint.classList.add('opacity-100', 'translate-y-0');
    } else {
        hint.classList.add('hidden');
        hint.classList.remove('opacity-100', 'translate-y-0');
    }
}