//HTML selectors
var newCharacterBtn = document.getElementsByClassName('new-character');
var savedBtn = document.getElementsByClassName('saved');
var containerEl = document.getElementsByClassName('container');
var imgEl = document.getElementsByClassName('placeholder-Image');
var raceEl = document.getElementById('race');
var classEl = document.getElementById('class')
var alignmentEl = document.getElementById('alignment')
var statsContainerEl = document.getElementsByClassName('container-Stats');
var strengthEl = document.getElementById('strength');
var dexterityEl = document.getElementById('dexterity');
var constitutionEl = document.getElementById('constitution');
var intelligenceEl = document.getElementById('intelligence');
var wisdomEl = document.getElementById('wisdom');
var charismaEl = document.getElementById('charisma');
var statsEl = document.getElementsByClassName('stats');
var rollBtn = document.getElementById('rollBtn');
var statId = document.getElementById('stat');


//DND5E API selectors
var apiServerUrl = `https://www.dnd5eapi.co`;
var apiClassUrl = `/api/classes/`;
var apiRaceUrl = `/api/races/`;
var apiAlignmentUrl = `/api/alignments/`;

//Dog API selectors
var dogApiUrl = `https://dog.ceo/api/breeds/image/random`






//random stats function
var statArray = [];
for (i = 0; i < 6; i++) {
  var statNumber = Math.floor(Math.random() * 16) + 4
  statArray.push(statNumber); 
}

console.log(statArray);
strengthEl.append(statArray[0]);
dexterityEl.append(statArray[1]);
constitutionEl.append(statArray[2]);
intelligenceEl.append(statArray[3]);
wisdomEl.append(statArray[4]);
charismaEl.append(statArray[5]);





fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
  .then((data) => console.log(data));
  



//DnD5E API fetch
fetch('https://www.dnd5eapi.co/api/classes/')
  .then((response) => response.json())
  .then((data) => console.log(data));







  
  
  