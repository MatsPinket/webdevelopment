const storeSliderValues = (   ) => {

    let red = document.querySelector('#sldRed');
    let green = document.querySelector('#sldGreen');
    let blue = document.querySelector('#sldBlue');


    localStorage.setItem("red", red.value);
    localStorage.setItem("green", green.value);
    localStorage.setItem("blue", blue.value);

};

const restoreSliderValues = (   ) => {

    let red = document.querySelector('#sldRed');
    let green = document.querySelector('#sldGreen');
    let blue = document.querySelector('#sldBlue');

    let newred = localStorage.getItem("red");
    let newgreen = localStorage.getItem("green");
    let newblue = localStorage.getItem("blue");

    red.value = newred;
    green.value = newgreen;
    blue.value = newblue;

};

const storeSwatches = (   ) => {

    let sliderValues = {
        sldred : document.getElementById("sldRed").value,
        sldgreen : document.getElementById("sldGreen").value,
        sldblue : document.getElementById("sldBlue").value
    }

    let arrayMetSwatches = [];

    let swatches = document.querySelectorAll("#swatchComponents .swatch");

    for (let i = 0; i < swatches.length; i++) {
        let values = {
            red: swatches[i].getAttribute('data-red'),
            green: swatches[i].getAttribute('data-green'),
            blue: swatches[i].getAttribute('data-blue'),
        }
        arrayMetSwatches.push(values);
    }

    let array = JSON.stringify(arrayMetSwatches);

    localStorage.setItem("ArrayMetSwatches", array);

};

const restoreSwatches = (   ) => {

    let swatch = localStorage.getItem("ArrayMetSwatches");
    let swatches = JSON.parse(swatch);

    for (let i = 0; i < swatches.length; i++) {
        addSwatchComponent(swatches[i].red, swatches[i].green, swatches[i].blue);
    }
};