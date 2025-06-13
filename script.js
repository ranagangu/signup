document.addEventListener('DOMContentLoaded', function () {
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirm-password');
  const passwordHelp = document.getElementById('passwordHelp');
  const matchHelp = document.getElementById('matchHelp');
  const form = document.getElementById('signupForm');
  const formMessage = document.getElementById('formMessage');

  // Password strength validation
  passwordInput.addEventListener('input', () => {
    const value = passwordInput.value;
    const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

    if (!regex.test(value)) {
      passwordHelp.textContent = 'Password must be at least 8 characters, include a number and an uppercase letter.';
      passwordHelp.style.color = 'red';
    } else {
      passwordHelp.textContent = 'Password looks good.';
      passwordHelp.style.color = 'green';
    }
  });

  // Confirm password match
  confirmPasswordInput.addEventListener('input', () => {
    if (confirmPasswordInput.value !== passwordInput.value) {
      matchHelp.textContent = "Passwords do not match.";
      matchHelp.style.color = 'red';
    } else {
      matchHelp.textContent = "Passwords match.";
      matchHelp.style.color = 'green';
    }
  });

  // Form submission
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Final password match check
    if (passwordInput.value !== confirmPasswordInput.value) {
      formMessage.textContent = "Please fix errors before submitting.";
      formMessage.style.color = 'red';
      return;
    }

    formMessage.textContent = "Form submitted successfully!";
    formMessage.style.color = 'green';

    // Optional: reset form
    // form.reset();
  });
});
