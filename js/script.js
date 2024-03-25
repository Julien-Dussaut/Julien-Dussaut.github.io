const subtitleValues = [
  'Javascript ',
  'Php ',
  'Html ',
  'Css ',
  'MySql ',
  'fullstack ',
  'backend ',
  'frontend ',
  'web '
];

function deleteChar() {
  console.log(subtitleValues[nextIndex]);
  if(subtitle.innerText === '') {
    indexChar = 0;
    clearInterval(suppressionSoustitre)
    addNewSubtitle = setInterval(addChar, 300);
  } else {
    subtitle.innerText = subtitle.innerText.substring(0, subtitle.innerText.length -1);
  }
}

function addChar() {
  console.log(subtitleValues[nextIndex]);  
  if(indexChar < subtitleValues[nextIndex].length - 1) {
    subtitle.textContent += subtitleValues[nextIndex][indexChar];
    indexChar++;
  } else {
    clearInterval(addNewSubtitle);
    nextIndex++;
    if(nextIndex > subtitleValues.length - 1) {
      nextIndex = 0;
    }
    suppressionSoustitre = setInterval(deleteChar, 300);
  }
}

const subtitle = document.querySelector('#subtitle');
subtitle.innerText = subtitleValues[0];
let nextIndex = 0;

if(subtitleValues.includes(subtitle.innerText)) {
  nextIndex = subtitleValues.indexOf(subtitle.innerText) + 1;
  console.log(nextIndex);
  if (nextIndex >= subtitleValues.length) {
    nextIndex = 0;
  }
}
let suppressionSoustitre = setInterval(deleteChar, 300);
let indexChar = 0;





