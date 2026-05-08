// ============================================
// FEEDBACK FORM FUNCTIONALITY FOR TECHEA
// ============================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    initStarRating();
    loadSubmittedFeedbacks();
});

// Star rating functionality
function initStarRating() {
    const stars = document.querySelectorAll('.star');
    const ratingInput = document.getElementById('rating');
    const ratingText = document.getElementById('ratingText');
    
    if (!stars.length) return;
    
    // Rating descriptions
    const ratingDescriptions = {
        1: 'Poor - Very dissatisfied',
        2: 'Fair - Needs improvement',
        3: 'Good - Satisfactory',
        4: 'Very Good - Happy with service',
        5: 'Excellent - Absolutely loved it!'
    };
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            
            // Update hidden input
            if (ratingInput) ratingInput.value = rating;
            
            // Update star colors
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.classList.add('active');
                    s.style.color = '#ffc107';
                } else {
                    s.classList.remove('active');
                    s.style.color = '#ddd';
                }
            });
            
            // Update rating text
            if (ratingText) {
                ratingText.textContent = ratingDescriptions[rating] || `${rating} stars`;
                ratingText.style.color = '#4CAF50';
            }
        });
        
        // Hover effect
        star.addEventListener('mouseenter', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.style.color = '#ffc107';
                } else {
                    s.style.color = '#ddd';
                }
            });
        });
        
        star.addEventListener('mouseleave', function() {
            const currentRating = parseInt(ratingInput?.value || 0);
            stars.forEach((s, index) => {
                if (currentRating > 0 && index < currentRating) {
                    s.style.color = '#ffc107';
                } else {
                    s.style.color = '#ddd';
                }
            });
        });
    });
}

// Main submit feedback function
function submitFeedback(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const rating = document.getElementById('rating')?.value;
    const product = document.getElementById('product')?.value;
    const experience = document.getElementById('experience')?.value.trim();
    const suggestions = document.getElementById('suggestions')?.value.trim();
    const newsletter = document.getElementById('newsletter')?.checked;
    
    // Validate required fields
    const errors = [];
    
    if (!name || name.length < 2) {
        errors.push('Please enter a valid name (minimum 2 characters)');
        showFieldError('name', 'Please enter a valid name');
    } else {
        removeFieldError('name');
    }
    
    if (!email || !isValidEmail(email)) {
        errors.push('Please enter a valid email address');
        showFieldError('email', 'Please enter a valid email address');
    } else {
        removeFieldError('email');
    }
    
    if (!rating || rating < 1 || rating > 5) {
        errors.push('Please select a rating');
        showRatingError();
    } else {
        removeRatingError();
    }
    
    if (!experience || experience.length < 10) {
        errors.push('Please describe your experience (minimum 10 characters)');
        showFieldError('experience', 'Please describe your experience (minimum 10 characters)');
    } else {
        removeFieldError('experience');
    }
    
    // Show errors if any
    if (errors.length > 0) {
        showNotification(errors[0], 'error');
        return;
    }
    
    // Create feedback object
    const feedbackData = {
        id: Date.now(),
        name: name,
        email: email,
        rating: parseInt(rating),
        ratingStars: '★'.repeat(parseInt(rating)) + '☆'.repeat(5 - parseInt(rating)),
        product: product || 'Not specified',
        experience: experience,
        suggestions: suggestions || 'No suggestions provided',
        newsletter: newsletter,
        timestamp: new Date().toISOString(),
        formattedDate: new Date().toLocaleString()
    };
    
    // Save to localStorage
    saveFeedbackToStorage(feedbackData);
    
    // Show success message
    showSuccessMessage();
    
    // Reset form
    resetForm();
    
    // Update feedback display
    loadSubmittedFeedbacks();
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show field error
function showFieldError(fieldId, errorMessage) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    
    // Remove existing error
    removeFieldError(fieldId);
    
    // Add error class
    field.classList.add('error-field');
    field.style.borderColor = '#e74c3c';
    field.style.borderWidth = '2px';
    
    // Create error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error-message';
    errorDiv.style.color = '#e74c3c';
    errorDiv.style.fontSize = '12px';
    errorDiv.style.marginTop = '5px';
    errorDiv.style.marginBottom = '10px';
    errorDiv.textContent = errorMessage;
    
    // Insert after field
    field.parentNode.insertBefore(errorDiv, field.nextSibling);
}

// Remove field error
function removeFieldError(fieldId) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    
    field.classList.remove('error-field');
    field.style.borderColor = '';
    
    // Remove error message
    const nextElement = field.nextSibling;
    if (nextElement && nextElement.classList && nextElement.classList.contains('field-error-message')) {
        nextElement.remove();
    }
}

// Show rating error
function showRatingError() {
    const ratingContainer = document.querySelector('.rating-stars');
    if (!ratingContainer) return;
    
    removeRatingError();
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'rating-error-message';
    errorDiv.style.color = '#e74c3c';
    errorDiv.style.fontSize = '12px';
    errorDiv.style.marginTop = '5px';
    errorDiv.textContent = 'Please select a rating';
    
    ratingContainer.parentNode.insertBefore(errorDiv, ratingContainer.nextSibling);
}

// Remove rating error
function removeRatingError() {
    const errorMsg = document.querySelector('.rating-error-message');
    if (errorMsg) errorMsg.remove();
}

// Save feedback to localStorage
function saveFeedbackToStorage(feedback) {
    let feedbacks = JSON.parse(localStorage.getItem('techeaFeedbacks') || '[]');
    feedbacks.unshift(feedback); // Add to beginning
    
    // Keep only last 50 feedbacks
    if (feedbacks.length > 50) {
        feedbacks = feedbacks.slice(0, 50);
    }
    
    localStorage.setItem('techeaFeedbacks', JSON.stringify(feedbacks));
    
    // Also store user's email for newsletter if subscribed
    if (feedback.newsletter) {
        saveNewsletterSubscriber(feedback.email, feedback.name);
    }
}

// Save newsletter subscribers
function saveNewsletterSubscriber(email, name) {
    let subscribers = JSON.parse(localStorage.getItem('newsletterSubscribers') || '[]');
    
    // Check if already subscribed
    const exists = subscribers.find(sub => sub.email === email);
    if (!exists) {
        subscribers.push({
            email: email,
            name: name,
            subscribedDate: new Date().toISOString()
        });
        localStorage.setItem('newsletterSubscribers', JSON.stringify(subscribers));
    }
}

// Show success message
function showSuccessMessage() {
    const successDiv = document.getElementById('feedbackSuccess');
    if (successDiv) {
        successDiv.style.display = 'block';
        
        // Scroll to success message
        successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Hide after 5 seconds
        setTimeout(() => {
            successDiv.style.display = 'none';
        }, 5000);
    }
    
    showNotification('Thank you for your feedback! 🎉', 'success');
}

// Reset form
function resetForm() {
    const form = document.getElementById('feedbackForm');
    if (form) form.reset();
    
    // Reset stars
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.style.color = '#ddd';
        star.classList.remove('active');
    });
    
    // Reset rating input
    const ratingInput = document.getElementById('rating');
    if (ratingInput) ratingInput.value = '';
    
    // Reset rating text
    const ratingText = document.getElementById('ratingText');
    if (ratingText) ratingText.textContent = '';
    
    // Remove all error messages
    document.querySelectorAll('.field-error-message, .rating-error-message').forEach(error => error.remove());
    
    // Remove error styles from fields
    document.querySelectorAll('.error-field').forEach(field => {
        field.classList.remove('error-field');
        field.style.borderColor = '';
    });
}

// Show notification
function showNotification(message, type = 'success') {
    // Remove existing notification
    const existingNotification = document.querySelector('.custom-notification');
    if (existingNotification) existingNotification.remove();
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'custom-notification';
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#e74c3c'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        font-family: Arial, sans-serif;
        max-width: 350px;
    `;
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 20px;">${type === 'success' ? '✅' : '⚠️'}</span>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Load and display submitted feedbacks (optional - for admin/review section)
function loadSubmittedFeedbacks() {
    const feedbackContainer = document.getElementById('submittedFeedbacks');
    if (!feedbackContainer) return;
    
    const feedbacks = JSON.parse(localStorage.getItem('techeaFeedbacks') || '[]');
    
    if (feedbacks.length === 0) {
        feedbackContainer.innerHTML = '<p style="text-align: center; color: #666;">No feedback submitted yet.</p>';
        return;
    }
    
    // Show last 3 feedbacks
    const recentFeedbacks = feedbacks.slice(0, 3);
    
    feedbackContainer.innerHTML = `
        <h3 style="margin-top: 30px; margin-bottom: 15px;">Recent Feedback</h3>
        ${recentFeedbacks.map(fb => `
            <div style="background: #f9f9f9; border-left: 4px solid #4CAF50; padding: 15px; margin-bottom: 15px; border-radius: 8px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                    <strong>${escapeHtml(fb.name)}</strong>
                    <span style="color: #ffc107;">${fb.ratingStars}</span>
                </div>
                <div style="font-size: 14px; color: #666; margin-bottom: 10px;">
                    Product: ${escapeHtml(fb.product)}
                </div>
                <div style="margin-bottom: 10px;">${escapeHtml(fb.experience.substring(0, 100))}...</div>
                <div style="font-size: 12px; color: #999;">${new Date(fb.timestamp).toLocaleDateString()}</div>
            </div>
        `).join('')}
    `;
}

// Helper function to escape HTML
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Add CSS animations
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .star {
        font-size: 30px;
        cursor: pointer;
        transition: transform 0.2s;
        display: inline-block;
        margin-right: 5px;
    }
    
    .star:hover {
        transform: scale(1.1);
    }
    
    .error-field {
        border: 2px solid #e74c3c !important;
    }
    
    .success-message {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 20px;
        border-radius: 10px;
        text-align: center;
        margin-top: 30px;
        animation: slideInRight 0.5s ease-out;
    }
`;

document.head.appendChild(styleSheet);

// Real-time validation on input fields
document.addEventListener('DOMContentLoaded', () => {
    // Add real-time validation
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const experienceInput = document.getElementById('experience');
    
    if (nameInput) {
        nameInput.addEventListener('input', () => {
            if (nameInput.value.trim().length >= 2) {
                removeFieldError('name');
            }
        });
    }
    
    if (emailInput) {
        emailInput.addEventListener('input', () => {
            if (isValidEmail(emailInput.value.trim())) {
                removeFieldError('email');
            }
        });
    }
    
    if (experienceInput) {
        experienceInput.addEventListener('input', () => {
            if (experienceInput.value.trim().length >= 10) {
                removeFieldError('experience');
            }
        });
    }
});

// Console log for debugging
console.log('Techea Feedback Form Loaded Successfully!');