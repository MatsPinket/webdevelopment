const setup = (   ) => {

    let button = document.getElementById("button");
    button.addEventListener("click", pressButton);
}
const pressButton = (   ) => {

    let roker = document.getElementById("isRoker");

    if(roker.checked){
        console.log("is een roker");
    } else{
        console.log("is geen roker");
    }


    let nl = document.getElementById("nl");
    let fr = document.getElementById("fr");
    let en = document.getElementById("en");

    if(nl.checked){
        console.log("moedertaal is nl")
    } if(fr.checked){
        console.log("moedertaal is fr")
    } if(en.checked){
        console.log("moedertaal is en")
    }


    let buurland = document.getElementById("buurland").value;

    if(buurland === "Nederland"){
        console.log("favoriete buurland is Nederland");
    } if(buurland === "Frankrijk"){
        console.log("favoriete buurland is Frankrijk");
    } if(buurland === "Duitsland"){
        console.log("favoriete buurland is Duitsland");
    }


    let bestelling = document.getElementById("bestelling").children;

    let array = Array.from(bestelling);
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].selected;
    }
    let output = "bestelling bestaat uit";

    if(array[0]){
        output += " aardappelen";
    } if(array[1]){
        output += " brood";
    } if(array[2]){
        output += " melk";
    } if(array[3]){
        output += " biefstuk";
    } if(array[4]){
        output += " chips";
    } if(array[5]){
        output += " krant";
    }


    console.log(output);

}

window.addEventListener("load", setup);