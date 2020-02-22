//created a function to test submit button and add prevent default to stop auto refresh
//used getElementById.value to console log values from bootsrap form

const dinos = []

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

};
   
    // console.log('hi from newDino', dinos);



//init function to add event listener to submit dino button
const init = () => {
    document.getElementById('submit-new-dino').addEventListener('click', newDino);
   
};

init();