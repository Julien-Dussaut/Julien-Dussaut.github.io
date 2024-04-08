const subtitleValues = 
[
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

const colorsSubtitles = 
[
  '-webkit-linear-gradient(90deg, #EFD81D 0%, #EFD81D 100%)',//JS
  '-webkit-linear-gradient(90deg, #7377AD 0%, #7377AD 100%)',//Php
  '-webkit-linear-gradient(90deg, #E96228 0%, #E96228 100%)',//Html
  '-webkit-linear-gradient(90deg, #2862E9 0%, #2862E9 100%)',//Css
  '-webkit-linear-gradient(90deg, #005E86 0%, #005E86 100%)',//Mysql
  '-webkit-linear-gradient(to left, #E96228, #005E86 100%)',//Fullstack
  '-webkit-linear-gradient(90deg, #7377AD 0%, #005E86 100%)',//Backend
  '-webkit-linear-gradient(90deg, #E96228 0%, #2862E9 100%)',//Fronted
  '-webkit-linear-gradient(90deg, #EFD81D 0%, #005E86 100%)' //Web
];

function deleteChar() 
{
  console.log(subtitleValues[nextIndex]);
  if(subtitle.innerText === '') 
  {
    indexChar = 0;
    clearInterval(suppressionSoustitre)
    addNewSubtitle = setInterval(addChar, 300);
  } else 
  {
    subtitle.innerText = subtitle.innerText.substring(0, subtitle.innerText.length -1);
  }
}

function addChar() 
{
  console.log(subtitleValues[nextIndex]);
  subtitle.style.backgroundImage = colorsSubtitles[nextIndex];

  if(indexChar < subtitleValues[nextIndex].length - 1) 
  {
    subtitle.textContent += subtitleValues[nextIndex][indexChar];
    indexChar++;
  } else 
  {
    clearInterval(addNewSubtitle);
    nextIndex++;
    if(nextIndex > subtitleValues.length - 1) 
    {
      nextIndex = 0;
    }
    suppressionSoustitre = setInterval(deleteChar, 300);
  }
}

const subtitle = document.querySelector('#subtitle');
subtitle.style.backgroundImage = "-webkit-linear-gradient(90deg, #EFD81D 0%, #EFD81D 100%)";
subtitle.innerText = subtitleValues[0];
let nextIndex = 0;

if(subtitleValues.includes(subtitle.innerText)) 
{
  nextIndex = subtitleValues.indexOf(subtitle.innerText) + 1;
  if (nextIndex >= subtitleValues.length) 
  {
    nextIndex = 0;
  }
}
let suppressionSoustitre = setInterval(deleteChar, 300);
let indexChar = 0;

const navLink = document.querySelectorAll('.nav-link');

navLink.forEach(currentLink => {
  currentLink.addEventListener('click', function(event) {
    document.querySelector('#title-section').innerText = event.currentTarget.innerText;
  });
});
const titleSection = document.querySelector('#title-section');




