const MAX_PASSWORD_LENGTH = 20;
const MAX_PASSWORD_VALUE = 100;

const passwordInput = document.getElementById('password-type');
const progressBar = document.getElementById('password-progress');

progressBar.value = 0;
progressBar.max = MAX_PASSWORD_VALUE;
passwordInput.maxLength = MAX_PASSWORD_LENGTH;

passwordInput.addEventListener('keydown', updateProgressBar);

function updateProgressBar (event) {
  const inputLength = passwordInput.value.length + (event.key === "Backspace" ? -1 : 1);
  progressBar.value = (MAX_PASSWORD_VALUE / MAX_PASSWORD_LENGTH) * inputLength;
}
