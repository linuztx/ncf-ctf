// Track completed challenges
let completedChallenges = JSON.parse(localStorage.getItem('completedChallenges')) || [];


// Backend API configuration
const API_BASE_URL = 'http://localhost:8000';

// Function to check flags via API
async function checkFlag(challenge, flag) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/flags/verify`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                challenge: challenge,
                flag: flag
            })
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        return result.success;
    } catch (error) {
        console.error('Error verifying flag:', error);
        // Fallback to showing an error message
        showNotification('error', '🔌 Connection error. Please ensure the backend server is running.');
        return false;
    }
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