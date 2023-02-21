const setup = () => {
    let btnSubstring=document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", substring);
}
const substring = () => {
    let txtOutput=document.getElementById("txtOutput");
    let valueLinks=document.getElementById("valueLinks");
    let valueRechts=document.getElementById("valueRechts");
    let txtWoord=document.getElementById("txtWoord");
    let g1=parseInt(valueLinks.value, 10);
    let g2=parseInt(valueRechts.value, 10);
    let woord = txtWoord.value;
    let resultaat = woord.substring(g1,g2);

    txtOutput.innerHTML=resultaat;
}
window.addEventListener("load", setup);