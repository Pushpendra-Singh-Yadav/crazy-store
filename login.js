document.getElementById("googleLogin").addEventListener("click", () => {
  alert("Redirecting to Google login...");
  // Replace this with your actual Google login integration
});

document.getElementById("otherLogin").addEventListener("click", () => {
  alert("Redirecting to Apple login...");
  // Replace this with your actual Apple login integration
});

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    alert("Login successful!");
    // Add your login logic here
  } else {
    alert("Please fill in all fields.");
  }
});
