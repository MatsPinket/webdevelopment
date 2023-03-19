const setup = (   ) => {

    let postcodes = [];
    let input = "";

    while (input !== "stop") {

        input = prompt("Gemeente:");

        if(input !== "stop"){
            postcodes.push(input.toLowerCase());
            postcodes.sort();
        }
        console.log(postcodes);
    }



    const keuzeLijst = document.getElementById("postcode");

    for (let i = 0; i < postcodes.length; i++) {
        const option = document.createElement("option");
        option.text = postcodes[i];
        keuzeLijst.appendChild(option);
    }

}

window.addEventListener("load", setup);