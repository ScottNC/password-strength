const MAX_PASSWORD_LENGTH = 20;
const MAX_PASSWORD_VALUE = 100;
const LOW = 7;
const MEDIUM = 11;

const passwordInput = document.getElementById('password-type');
const progressBar = document.getElementById('password-progress');
const progressLabel = document.getElementById('password-label');

progressBar.value = 0;
progressBar.className = 'progress__bar progress__bar--low';
progressLabel.className = 'progress__label progress__label--low';

progressBar.max = MAX_PASSWORD_VALUE;
passwordInput.maxLength = MAX_PASSWORD_LENGTH;

passwordInput.addEventListener('keydown', updateProgressBar);

function updateProgressBar (event) {
  const inputLength = passwordInput.value.length + (event.key === "Backspace" ? -1 : 1);
  progressBar.value = (MAX_PASSWORD_VALUE / MAX_PASSWORD_LENGTH) * inputLength;

  if (inputLength <= LOW) {
    progressBar.className = 'progress__bar progress__bar--low';
    progressLabel.className = 'progress__label progress__label--low';
    progressLabel.textContent = 'Should be longer';
  } else if (inputLength <= MEDIUM) {
    progressBar.className = 'progress__bar progress__bar--medium';
    progressLabel.className = 'progress__label progress__label--medium';
    progressLabel.textContent = 'Pretty good';
  } else {
    progressBar.className = 'progress__bar progress__bar--high';
    progressLabel.className = 'progress__label progress__label--high';
    progressLabel.textContent = 'Grrrreat!';
  }
}
