document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (email === '' || password === '') {
      alert('Please fill in all fields');
      return;
    }
  
    // Simulate login processing
    setTimeout(() => {
      alert(`Welcome back, ${email.split('@')[0]}!`);
      window.location.href = 'dashboard.html'; // Redirect after login
    }, 1000);
  });
  