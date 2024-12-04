// Form validation for login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let isValid = true;
  
    // Reset previous error messages
    document.getElementById("emailError").textContent = '';
    document.getElementById("passwordError").textContent = '';
  
    // Validate email
    if (!email.includes("@")) {
      document.getElementById("emailError").textContent = "Please enter a valid email.";
      isValid = false;
    }
  
    // Validate password
    if (password.length < 6) {
      document.getElementById("passwordError").textContent = "Password must be at least 6 characters long.";
      isValid = false;
    }
  
    if (isValid) {
      alert("Login Successful");
    }
  });
  
  // Form validation for registration
  document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let isValid = true;
  
    // Reset previous error messages
    document.getElementById("emailError").textContent = '';
    document.getElementById("passwordError").textContent = '';
    document.getElementById("confirmPasswordError").textContent = '';
  
    // Validate email
    if (!email.includes("@")) {
      document.getElementById("emailError").textContent = "Please enter a valid email.";
      isValid = false;
    }
  
    // Validate password
    if (password.length < 6) {
      document.getElementById("passwordError").textContent = "Password must be at least 6 characters long.";
      isValid = false;
    }
  
    // Validate password confirmation
    if (password !== confirmPassword) {
      document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
      isValid = false;
    }
  
    if (isValid) {
      alert("Registration Successful");
    }
  });
  