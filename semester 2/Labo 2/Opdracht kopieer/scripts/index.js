const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);
}

const kopieer = () => {
    let txtInput = document.getElementById("txtInput");
    let tekst = txtInput.value;
    txtOutput.innerHTML=tekst;
}

window.addEventListener("load", setup);
