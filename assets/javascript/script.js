//HTML selectors
const newCharacterBtn = document.getElementsByClassName('new-character');
const viewSavedBtn = document.getElementById('view-saved-btn');
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
const companionEl = document.getElementById('companion');
const saveBtn = document.getElementById('Save-Btn');



viewSavedBtn.addEventListener('click', function() {
   window.location = './secondPage.html';
    });



//DND5E API selectors
const apiServerUrl = `https://www.dnd5eapi.co`;
const apiClassUrl = `/api/classes/`;
const apiRaceUrl = `/api/races/`;
const apiAlignmentUrl = `/api/alignments/`;

//Dog API selectors
const dogApiUrl = `https://dog.ceo/api/breeds/image/random`


var raceInput = [];
var classInput = [];
var alignmentInput = [];
var dogInput = [];
var statInput = [];





//generate button
genBtn.addEventListener('click', statGen)

var statArray = [];

//random function for page
function statGen() {
  statArray.length = 0
  //array for stats
  for (i = 0; i < 6; i++) {
  
    var statNumber = Math.floor(Math.random() * 16) + 4
    statArray.push(statNumber); 
  }
  statInput = [...statArray];
  savedCharacter.statObject = statInput;
  
  //displays stats with randomized numbers
  strengthEl.innerHTML = `<p id="strength"> Strength: ${statArray[0]}</p>`
  dexterityEl.innerHTML = `<p id="dexterity"> Dexterity: ${statArray[1]}</p>`
  constitutionEl.innerHTML = `<p id="constitution"> Constitution: ${statArray[2]}</p>`
  intelligenceEl.innerHTML = `<p id="intelligence"> Intelligence: ${statArray[3]}</p>`
  wisdomEl.innerHTML = `<p id="wisdom"> Wisdom: ${statArray[4]}</p>`
  charismaEl.innerHTML = `<p id="charisma"> Charisma: ${statArray[5]}</p>`
  
  //api call for dog api and displays random dog pic on page
  fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
  .then((data) => {console.log(data)
    
    let dogPic = data.message;
    console.log("The url is " + dogPic)
    companionEl.innerHTML = `<p id="companion"> Companion: <img src="${dogPic}" alt="picture of random dog companion">`
    dogInput.pop();
    dogInput.push(dogPic);
    savedCharacter.dogObject = dogInput;
  
  });
  

  //Random variables for class race and alignment
  var classNumber = Math.floor(Math.random() * 12)
  var raceNumber = Math.floor(Math.random() * 9)
  var alignmentNumber = Math.floor(Math.random() * 9)
  
  
  //DnD5E API fetch for class and displays on page
    fetch('https://www.dnd5eapi.co/api/classes/')
    .then((response) => response.json())
    .then((data) => {console.log(data)
      console.log(classNumber);
      let className = data.results[`${classNumber}`].name;
      console.log(className);
      classEl.innerHTML = `<p id="class">Class: ${className}</p>`
      classInput.pop();
      classInput.push(className);
      savedCharacter.classObject = classInput;
    });
    
  
  //DnD5E API fetch for race and displays on page
    fetch('https://www.dnd5eapi.co/api/races/')
    .then((response) => response.json())
    .then((data) => {console.log(data)
      console.log(raceNumber);
      let raceName = data.results[`${raceNumber}`].name;
      console.log(raceName);
      raceEl.innerHTML = `<p id="race">Race: ${raceName}</p>`
      raceInput.pop();
      raceInput.push(raceName);
      savedCharacter.raceObject = raceInput;
      
    });

  // If statements to set the race image on screen
    console.log("Race Number is: " + raceNumber)
    if (raceNumber == 0) {
      imgEl[0].src = "./assets/Images/dragonborn.png"
    }
    if (raceNumber == 1) {
      imgEl[0].src = "./assets/Images/dwarf.png"
    }
    if (raceNumber == 2) {
      imgEl[0].src = "./assets/Images/elf.png"
    }
    if (raceNumber == 3) {
      imgEl[0].src = "./assets/Images/gnome.png"
    }
    if (raceNumber == 4) {
      imgEl[0].src = "./assets/Images/half_elf.png"
    }
    if (raceNumber == 5) {
      imgEl[0].src = "./assets/Images/half-orc.png"
    }
    if (raceNumber == 6) {
      imgEl[0].src = "./assets/Images/halfling.png"
    }
    if (raceNumber == 7) {
      imgEl[0].src = "./assets/Images/human.png"
    }
    if (raceNumber == 8) {
      imgEl[0].src = "./assets/Images/tiefling.png"
    }

    //DnD5E API fetch for alignment and displays on page
    fetch('https://www.dnd5eapi.co/api/alignments/')
    .then((response) => response.json())
    .then((data) => {console.log(data)
      console.log(alignmentNumber);
      let alignmentName = data.results[`${alignmentNumber}`].name;
      console.log(alignmentName);
      alignmentEl.innerHTML = `<p id="alignment">Alignment: ${alignmentName}</p>`
      alignmentInput.pop();
      alignmentInput.push(alignmentName);
      savedCharacter.alignmentObject = alignmentInput;
  
    });
  }
  
  saveBtn.addEventListener('click', storeCharacter);
  
  

function storeCharacter() {
  
  console.log("LS input tests: " + classInput + " " + raceInput + " " + alignmentInput + " " + statInput + " " + dogInput);
  localStorage.setItem("Character", JSON.stringify(savedCharacter))
  
}


var savedCharacter = {
  classObject: classInput,
  raceObject: raceInput,
  alignmentObject: alignmentInput,
  dogObject: dogInput,
  statObject: statInput
}

function displaySaved() {
  var raceSaved = localStorage.getItem(savedCharacter.raceObject);
  console.log(raceSaved)

  //raceEl.innerHTML = `<p id="class">Race: ${raceName}</p>`

}






  
  
  