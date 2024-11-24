function showHint() {
    const hint = document.getElementById('hint');
    hint.classList.toggle('hidden');
}

function submitFlag(challenge) {
    const input = document.querySelector(`[data-challenge="${challenge}"]`);
    const flag = input.value.trim();
    const button = input.nextElementSibling;
    const completionMessage = document.getElementById('completion-message');

    // Add loading state
    button.disabled = true;
    button.innerHTML = `
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Checking...
    `;

    // Simulate network delay
    setTimeout(() => {
        if (checkFlag(challenge, flag)) {
            showNotification('success', '🎉 Congratulations! You found the correct flag!');
            input.classList.add('success');
            input.disabled = true;
            updateProgress(challenge);
            
            // Success button state
            button.innerHTML = `
                <svg class="w-6 h-6 text-white inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Challenge Completed!
            `;
            button.classList.add('bg-green-500');
            
            // Show completion message
            completionMessage.classList.remove('hidden');
            completionMessage.classList.add('animate-fadeIn');
        } else {
            showNotification('error', '❌ That\'s not the correct flag. Keep trying!');
            input.classList.add('error');
            setTimeout(() => input.classList.remove('error'), 1000);
            
            // Reset button
            button.disabled = false;
            button.innerHTML = 'Submit Flag';
        }
    }, 1000);
} 