const MAX_PASSWORD_LENGTH = 20;
const MAX_PASSWORD_VALUE = 100;
const LOW = 7;
const MEDIUM = 11;

const passwordInput = document.getElementById('password-type');
const progressBar = document.getElementById('password-progress');

progressBar.value = 0;
progressBar.className = 'progress progress--low';

progressBar.max = MAX_PASSWORD_VALUE;
passwordInput.maxLength = MAX_PASSWORD_LENGTH;

passwordInput.addEventListener('keydown', updateProgressBar);

function updateProgressBar (event) {
  const inputLength = passwordInput.value.length + (event.key === "Backspace" ? -1 : 1);
  progressBar.value = (MAX_PASSWORD_VALUE / MAX_PASSWORD_LENGTH) * inputLength;

  if (inputLength <= LOW)
    progressBar.className = 'progress progress--low';
  else if (inputLength <= MEDIUM)
    progressBar.className = 'progress progress--medium';
  else
    progressBar.className = 'progress progress--high';

  console.log(progressBar.className);
}
