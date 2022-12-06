//HTML selectors
const newCharacterBtn = document.getElementsByClassName('new-character');
const savedBtn = document.getElementsByClassName('saved');
const containerEl = document.getElementsByClassName('container');
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
const genBtn = document.getElementById('Gen-Btn');
const statId = document.getElementById('stat');


//DND5E API selectors
const apiServerUrl = `https://www.dnd5eapi.co`;
const apiClassUrl = `/api/classes/`;
const apiRaceUrl = `/api/races/`;
const apiAlignmentUrl = `/api/alignments/`;

//Dog API selectors
const dogApiUrl = `https://dog.ceo/api/breeds/image/random`



genBtn.addEventListener('click', statGen)


//random stats function
function statGen() {
  var statArray = [];
  for (i = 0; i < 6; i++) {
    var statNumber = Math.floor(Math.random() * 16) + 4
    statArray.push(statNumber); 
  }

  strengthEl.innerHTML = `<h1 id="strength"> Strength: </h1>`
  dexterityEl.innerHTML = `<h1 id="dexterity"> Dexterity: </h1>`
  constitutionEl.innerHTML = `<h1 id="constitution"> Constitution: </h1>`
  intelligenceEl.innerHTML = `<h1 id="intelligence"> Intelligence: </h1>`
  wisdomEl.innerHTML = `<h1 id="wisdom"> Wisdom: </h1>`
  charismaEl.innerHTML = `<h1 id="charisma"> Charisma: </h1>`


  console.log(statArray);
  strengthEl.append(statArray[0]);
  dexterityEl.append(statArray[1]);
  constitutionEl.append(statArray[2]);
  intelligenceEl.append(statArray[3]);
  wisdomEl.append(statArray[4]);
  charismaEl.append(statArray[5]);
}





fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
  .then((data) => console.log(data));
  



//DnD5E API fetch
fetch('https://www.dnd5eapi.co/api/classes/')
  .then((response) => response.json())
  .then((data) => console.log(data));







  
  
  