const MAX_PASSWORD_LENGTH = 20;
const MAX_PASSWORD_VALUE = 100;

const passwordInput = document.getElementById('password-type');
const progressBar = document.getElementById('password-progress');

progressBar.value = 0;

passwordInput.addEventListener('keypress', () => {
  const inputLength = passwordInput.value.length + 1;
  progressBar.value = 5 * inputLength;
});
