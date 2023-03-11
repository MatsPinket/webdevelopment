const setup = () => {

    const text = "De man van An geeft geen hand aan ambetante verwanten"

    let count = 0;
    let index = 0;


    // indexOf
    while (index !== -1) {
        index = text.indexOf("an", index + 1);
        count++;
    }

    console.log(count);


    //lastIndexOf
    count = 1;
    index = text.lastIndexOf("an");

    while (index !== -1) {
        count++;
        index = text.lastIndexOf("an", index - 1)

    }

    console.log(count);
}

window.addEventListener("load", setup);