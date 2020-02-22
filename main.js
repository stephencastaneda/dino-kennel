
const dinos = [
    {
      id: 'dino1',
      name: 'Rex',
      type: 'T Rex',
      age: 100,
      owner: 'Zoe',
      adventures: [],
      health: 100,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg'
    },
    {
      id: 'dino2',
      name: 'Steve',
      type: 'Velociraptor',
      age: 1,
      owner: 'Mary',
      adventures: [],
      health: 100,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg'
    },
    {
      id: 'dino3',
      name: 'Susan',
      type: 'Stegasaurus',
      age: 55,
      owner: 'Luke',
      adventures: [],
      health: 100,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg'
    }
  ];
  

//printtodom function
const printToDom = (divID, textToPrint) => {
    const selectedDiv = document.getElementById(divID);
    selectedDiv.innerHTML = textToPrint;
}

const closeSingleViewEvent = () => {
    printToDom('single-view', '');
    printDinos(dinos);
}
//created function to print button and clear cards
const viewSingleDino = () => {
    let domString = ''
    domString += `<button id="close-single-view" class="btn btn-outline-dark"><i class="far fa-window-close"></i></button>`
    printToDom('kennel','');
    printToDom('single-view', domString);
    document.getElementById('close-single-view').addEventListener('click', closeSingleViewEvent);
};


//added event listener to each button
const singleDinoAddEvents = () => {
    const dinoViewButtons = document.getElementsByClassName('single-dino');
    for(let i=0; i < dinoViewButtons.length; i++) {
        dinoViewButtons[i].addEventListener('click', viewSingleDino);
    }
};


//function to print dinocards using bootstrap cards
const printDinos = (dinoArray) => {
    let domString = '';
    for (let i =0; i < dinoArray.length; i++){
      domString += '<div class="col-4">';
      domString += '<div class="card">';
      domString += `<img class="card-img-top" src="${dinoArray[i].imageUrl}" alt="Card image cap">`;
      domString += '<div class="card-body">';
      domString += `<h5 class="card-title">${dinoArray[i].name}</h5>`;
      domString += `<p class="card-text">Health: ${dinoArray[i].health}</p>`;
      domString += `<button class="btn btn-outline-dark single-dino"><i class="fas fa-eye"></i></button>`
      domString += '</div>';
      domString += '</div>';
      domString += '</div>';
    }
    printToDom('kennel', domString);
    singleDinoAddEvents();
  };

//created a function to test submit button and add prevent default to stop auto refresh
//used getElementById.value to console log values from bootsrap form

const newDino = (e) => {
    e.preventDefault();
    const brandNewDino = {
        id: `dino${dinos.length + 1}`,
        name: document.getElementById('dino-name').value,
        type: document.getElementById('dino-type').value,
        age: document.getElementById('dino-age').value,
        owner: document.getElementById('dino-owner').value,
        adventures: [],
        health: 100,
        imageUrl: document.getElementById('dino-image').value
    };


    dinos.push(brandNewDino);
    console.log(dinos);
    document.getElementById('new-dino-form').reset();
    document.getElementById('collapseOne').classList.remove('show');
    printDinos(dinos);
};

   
//init function to add event listener to submit dino button
const init = () => {
    document.getElementById('submit-new-dino').addEventListener('click', newDino);
    printDinos(dinos);
   
};

init();