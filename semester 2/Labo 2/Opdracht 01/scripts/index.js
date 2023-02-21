const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    window.alert("Dit is een mededeling");
    window.confirm("Weet u het zeker?");
    window.prompt("Wat is uw naam", "onbekend");
}
window.addEventListener("load", setup);