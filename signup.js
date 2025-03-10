// Get form elements
const signupForm = document.getElementById('signup-form');
const signupButton = document.getElementById('signup-btn');
const googleButton = document.getElementById('google-btn');
const appleButton = document.getElementById('apple-btn');

// ✅ Form Validation
function validateForm() {
  const fullName = document.getElementById('full-name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (fullName === '') {
    alert('Please enter your full name');
    return false;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address');
    return false;
  }

  if (password.length < 6) {
    alert('Password must be at least 6 characters');
    return false;
  }

  return true;
}

// ✅ Email Validation
function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
  return emailPattern.test(email);
}

// ✅ Submit Handler
signupForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (validateForm()) {
    signupButton.textContent = 'Signing up...';
    signupButton.disabled = true;

    try {
      // Simulate API request for signup (replace with real API endpoint)
      const response = await fakeSignupAPI();

      if (response.success) {
        alert('Signup successful! Redirecting...');
        window.location.href = '/dashboard'; // Redirect after signup
      } else {
        alert(`Error: ${response.message}`);
      }
    } catch (error) {
      console.error('Signup failed:', error);
      alert('Signup failed. Please try again.');
    } finally {
      signupButton.textContent = 'Sign Up';
      signupButton.disabled = false;
    }
  }
});

// ✅ Fake Signup API (Simulate backend)
function fakeSignupAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1500);
  });
}

// ✅ Google Signup (OAuth)
googleButton.addEventListener('click', async () => {
  try {
    // Google authentication via Firebase/Auth or OAuth2
    console.log('Signing up with Google...');
    alert('Google signup successful! Redirecting...');
    window.location.href = '/dashboard';
  } catch (error) {
    console.error('Google signup failed:', error);
    alert('Google signup failed. Please try again.');
  }
});

// ✅ Apple Signup (OAuth)
appleButton.addEventListener('click', async () => {
  try {
    // Apple authentication via OAuth2 or SignInWithApple.js
    console.log('Signing up with Apple...');
    alert('Apple signup successful! Redirecting...');
    window.location.href = '/dashboard';
  } catch (error) {
    console.error('Apple signup failed:', error);
    alert('Apple signup failed. Please try again.');
  }
});