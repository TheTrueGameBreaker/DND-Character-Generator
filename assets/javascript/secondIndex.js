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
const newCharacterBtn = document.getElementById('newCharacterBtn');
const companionEl = document.getElementById('companion');

window.addEventListener('load', displaySaved);

function displaySaved() {
    var savedCharacter2 = JSON.parse(localStorage.getItem('Character', 'savedCharacter'));
    //var parsedCharacter = JSON.parse(savedCharacter2);
    console.log(savedCharacter2.statObject[0]);
  
    //Race, Class, Alignment
    raceEl.innerHTML = `<p id="race">Race: ${savedCharacter2.raceObject[0]}</p>`
    classEl.innerHTML =`<p id="class">Class: ${savedCharacter2.classObject[0]}</p>`
    alignmentEl.innerHTML = `<p id="alignment">Alignment: ${savedCharacter2.alignmentObject[0]}`
    
    //Stats
    strengthEl.innerHTML = `<p id="strength"> Strength: ${savedCharacter2.statObject[0]}</p>`
    dexterityEl.innerHTML = `<p id="dexterity"> Dexterity: ${savedCharacter2.statObject[1]}</p>`
    constitutionEl.innerHTML = `<p id="constitution"> Constitution: ${savedCharacter2.statObject[2]}</p>`
    intelligenceEl.innerHTML = `<p id="intelligence"> Intelligence: ${savedCharacter2.statObject[3]}</p>`
    wisdomEl.innerHTML = `<p id="wisdom"> Wisdom: ${savedCharacter2.statObject[4]}</p>`
    charismaEl.innerHTML = `<p id="charisma"> Charisma: ${savedCharacter2.statObject[5]}</p>`

    //Companion
    companionEl.innerHTML = `<p id="companion"> Companion: <img src="${savedCharacter2.dogObject[0]}" alt="picture of random dog companion">`
    
    if (savedCharacter2.raceObject[0] == 'Dragonborn') {
        imgEl[0].src = "./assets/Images/dragonborn.png"
        console.log("dragonborn")
      }

      if (savedCharacter2.raceObject[0] == 'Dwarf') {
        imgEl[0].src = "./assets/Images/dwarf.png"
        console.log("dwarf");
      }

      if (savedCharacter2.raceObject[0] == 'Elf') {
        imgEl[0].src = "./assets/Images/elf.png"
        console.log("elf");
      }

      if (savedCharacter2.raceObject[0] == 'Gnome') {
        imgEl[0].src = "./assets/Images/gnome.png"
        console.log("gnome");
      }

      if (savedCharacter2.raceObject[0] == 'Half-Elf') {
        imgEl[0].src = "./assets/Images/half_elf.png"
        console.log("half elf");
      }

      if (savedCharacter2.raceObject[0] == 'Half-Orc') {
        imgEl[0].src = "./assets/Images/half-orc.png"
        console.log("half orc");
      }

      if (savedCharacter2.raceObject[0] == 'Halfling') {
        imgEl[0].src = "./assets/Images/halfling.png"
        console.log("halfling");
      }

      if (savedCharacter2.raceObject[0] == 'Human') {
        imgEl[0].src = "./assets/Images/human.png"
        console.log('human');
      }

      if (savedCharacter2.raceObject[0] == 'Tiefling') {
        imgEl[0].src = "./assets/Images/tiefling.png"
        console.log('tiefling');
      }
  
  }

newCharacterBtn.addEventListener('click', function () {
    window.location = "./index.html";
});