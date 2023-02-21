const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}
window.addEventListener("load", setup);