const setup = () => {
    let btnWelkom=document.getElementById("btnWelkom")
    btnWelkom.addEventListener("click", welkom);
}
const welkom = () => {
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}
window.addEventListener("load", setup);