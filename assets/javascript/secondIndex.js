const imgEl = document.getElementsByClassName('placeholder-Image');
const raceEl = document.getElementById('race');
const classEl = document.getElementById('class')
const alignmentEl = document.getElementById('alignment')
const statsContainerEl = document.getElementsByClassName('container-Stats');
const strengthEl = document.getElementById('strength');
const dexterityEl = document.getElementById('dexterity');
const constitutionEl = document.getElementById('constitution');
const intelligenceEl = document.getElementById('intelligence');
const wisdomEl = document.getElementById('wisdom');
const charismaEl = document.getElementById('charisma');
const statsEl = document.getElementsByClassName('stats');

window.addEventListener('load', displaySaved);

function displaySaved() {
    var savedCharacter2 = JSON.parse(localStorage.getItem('Character', 'savedCharacter'));
    //var parsedCharacter = JSON.parse(savedCharacter2);
    console.log(savedCharacter2.statObject[0][1]);
  
    raceEl.innerHTML = `<p id="race">Race: ${savedCharacter2.raceObject[0]}</p>`
    classEl.innerHTML =`<p id="class">Class: ${savedCharacter2.classObject[0]}</p>`
    alignmentEl.innerHTML = `<p id="alignment">Alignment: ${savedCharacter2.alignmentObject[0]}`


    
  
  }

  