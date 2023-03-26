const setup = () => {

    let elements = document.querySelectorAll("li");
    let style = document.createElement("style");
    let head = document.querySelector("head");
    let image = document.createElement("img")
    let body = document.querySelector("body")

    let node = document.createTextNode(".listItem{color: red;}");
    style.appendChild(node)
    head.appendChild(style);

    for (let i=0;i<elements.length;i++) {
        elements[i].classList.add("listItem");
    }

    image.setAttribute("src","images/me.jpg")
    body.appendChild(image);

}
window.addEventListener("load", setup);