const setup = (   ) => {

    const button = document.getElementById("button");
    button.addEventListener('click', get);

}

const get = () => {

    const text = "onoorbaar";

    let idx1 = 0;
    let idx2 = 3;
    let index = 3;

    while(index !== text.length +1){
        const antwoord = text.slice(idx1, idx2);
        console.log(antwoord);
        idx1 ++;
        idx2 ++;
        index ++;
    }
}

window.addEventListener("load", setup);