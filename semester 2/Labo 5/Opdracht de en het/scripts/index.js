const setup = (   ) => {

    const button = document.getElementById("button");
    button.addEventListener('click', change);

}

const change = () => {

    const text = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let antwoord = "";
    let index = 0;
    let idx1 = 0;
    let idx2 = 1;
    let lastIndex = 0;


    while(index !== text.length){

        if(text.slice(idx1, idx2) === "d"){

            if(text.slice(idx1 + 1, idx2 + 1) === "e"){

                if(text.slice(idx1 - 1, idx2 - 1) === " "){

                    if(text.slice(idx1 + 2, idx2 + 2) === " "){

                        antwoord += text.slice(lastIndex, index -1) + " het ";
                        lastIndex = (idx1 + 3);

                    }
                }
            }
        }

        idx1 ++;
        idx2 ++;
        index ++;
    }

    antwoord += text.slice(text.lastIndexOf(" de ") + 4, text.length);

    console.log(antwoord);

}

window.addEventListener("load", setup);