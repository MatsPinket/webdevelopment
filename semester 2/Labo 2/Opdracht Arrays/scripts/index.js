var family = ["moeder","vader","broer","zus","neef"];
const setup = () => {
    console.log(family.length);
    console.log(family[0]);
    console.log(family[2]);
    console.log(family[4]);

    VoegNaamToe();
    console.log(family.join())
}
const VoegNaamToe = () => {
    let persoon = prompt("Voeg een familielid toe: ", "nicht")
    family.push(persoon)
}
window.addEventListener("load", setup);