const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let colorDemos=document.getElementsByClassName("colorDemo");
    let sliders = document.getElementsByClassName("slider");


    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }

    update();
}

const update = () => {
    // deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let colorDemos=document.getElementsByClassName("colorDemo");
    let sliders = document.getElementsByClassName("slider");
    let paragrafen = document.getElementsByTagName("p");
    let value=sliders[0].value;
    let value1 = sliders[1].value;
    let value2 = sliders[2].value;
    paragrafen[0].innerHTML = "Red " + value;
    paragrafen[1].innerHTML = "Green " + value1;
    paragrafen[2].innerHTML = "Blue " + value2;


    colorDemos[0].style.backgroundColor = 'rgb(' + value + ',' + value1 + ',' + value2 + ')';
}
window.addEventListener("load", setup);