const setup = (   ) => {
    let button = document.querySelector("button");
    button.addEventListener("click", press);
}

const press = (   ) => {
    let pElement = document.createElement("p");
    let divElement = document.querySelector("div");
    let textNode = document.createTextNode("Hello World");

    pElement.appendChild(textNode);
    divElement.appendChild(pElement);

}

window.addEventListener("load", setup);