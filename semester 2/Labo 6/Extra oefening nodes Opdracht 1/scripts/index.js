const setup = (   ) => {

    let p = document.querySelectorAll("p")[0];
    let firstChildNode = p.childNodes[0];
    let nieuweText = document.createTextNode("Good job!");

    //p.replaceChild(nieuweText, firstChildNode);

    p.removeChild(firstChildNode);
    p.appendChild(nieuweText);

}
window.addEventListener("load", setup);