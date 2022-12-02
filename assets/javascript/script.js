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

//DND5E API selectors
var apiServerUrl = `https://www.dnd5eapi.co`;
var apiClassUrl = `/api/classes/`;
var apiRaceUrl = `/api/races/`;
var apiAlignmentUrl = `/api/alignments/`;

//rapid API selectors
const options = {
  method: 'GET',
  headers: {
      'X-RapidAPI-Key': '59081f9c3cmsh0d56af2b7637b33p1c04a7jsnbda0126eca15',
      'X-RapidAPI-Host': 'dice-roll.p.rapidapi.com'
  }
};



//DnD5E API fetch
fetch('https://www.dnd5eapi.co/api/classes/')
  .then((response) => response.json())
  .then((data) => console.log(data));




//rapid API fetch
fetch('https://dice-roll.p.rapidapi.com/roll/1/d/20', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));





  
  
  