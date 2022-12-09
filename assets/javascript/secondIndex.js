window.addEventListener('load', displaySaved);

function displaySaved() {
    var savedCharacter2 = JSON.parse(localStorage.getItem('Character', 'savedCharacter'));
    //var parsedCharacter = JSON.parse(savedCharacter2);
    console.log(savedCharacter2.classObject[0]);
  
    //raceEl.innerHTML = `<p id="class">Race: ${raceName}</p>`
  
  }

  displaySaved();