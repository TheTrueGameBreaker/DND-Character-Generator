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

//API selectors
var apiServerUrl = `https://www.dnd5eapi.co`;
var apiClassUrl = `/api/classes/`;
var apiRaceUrl = `/api/races/`;
var apiAlignmentUrl = `/api/alignments/`;


//API fetch
fetch('https://www.dnd5eapi.co/api/classes/')
  .then((response) => response.json())
  .then((data) => console.log(data));






  
  
  