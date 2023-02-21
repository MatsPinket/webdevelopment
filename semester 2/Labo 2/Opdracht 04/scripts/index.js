const setup = () => {
    // deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    debugger;
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}
window.addEventListener("load", setup);