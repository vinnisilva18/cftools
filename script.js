
function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === 'vinicius.f.silva@dhl.com' && password === 'dhl12345') {
      window.location.href = 'home.html';
  } else {
      alert('Email ou senha incorretos!');
  }
}


function togglePasswordVisibility() {
  const passwordInput = document.getElementById('password');
  const eyeIcon = document.getElementById('eye-icon');
  const eyeOpen = document.getElementById('eye-open');
  const eyeClosed = document.getElementById('eye-closed');

  if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeOpen.style.display = 'none';
      eyeClosed.style.display = 'inline';
  } else {
      passwordInput.type = 'password';
      eyeOpen.style.display = 'inline';
      eyeClosed.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('eye-closed').style.display = 'none';
});

function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'vinicius.f.silva@dhl.com' && password === 'dhl12345') {
        window.location.href = 'home.html';
    } else {
        alert('Email ou senha incorretos!');
    }
}


function checkPasswordStrength() {
    const password = document.getElementById("password").value;
    const lengthCheck = document.getElementById("length-check");
    const caseCheck = document.getElementById("case-check");
    const numberCheck = document.getElementById("number-check");
    const specialCheck = document.getElementById("special-check");
    const passwordStrengthIndicator = document.getElementById("password-strength-indicator");

    let strength = 0;

    // Verificação de critérios
    if (password.length >= 8) {
        lengthCheck.querySelector(".check-icon").style.fill = "#28a745"; 
        strength += 25;
    } else {
        lengthCheck.querySelector(".check-icon").style.fill = "#333"; 
    }

    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
        caseCheck.querySelector(".check-icon").style.fill = "#28a745";
        strength += 25;
    } else {
        caseCheck.querySelector(".check-icon").style.fill = "#333";
    }

    if (/\d/.test(password)) {
        numberCheck.querySelector(".check-icon").style.fill = "#28a745";
        strength += 25;
    } else {
        numberCheck.querySelector(".check-icon").style.fill = "#333";
    }

    if (/[^A-Za-z0-9]/.test(password)) {
        specialCheck.querySelector(".check-icon").style.fill = "#28a745"; 
        strength += 25;
    } else {
        specialCheck.querySelector(".check-icon").style.fill = "#333";
    }

    passwordStrengthIndicator.style.width = strength + "%";

    if (strength < 100) {
        passwordStrengthIndicator.style.backgroundColor = "#f00";
        
        passwordStrengthIndicator.style.backgroundColor = "#28a745";
    }
}

document.getElementById("password").addEventListener("input", checkPasswordStrength);