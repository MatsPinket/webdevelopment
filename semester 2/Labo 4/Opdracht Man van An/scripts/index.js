const setup = () => {

    const text = "De man van An geeft geen hand aan ambetante verwanten"

    let count = 0;
    let i = 0;


    // indexOf
    while (i !== -1) {
        i = text.indexOf("an", i + 1);
        count++;
    }

    console.log(count);


    //lastIndexOf
    count = 1;
    i = text.lastIndexOf("an");

    while (i !== -1) {
        count++;
        i = text.lastIndexOf("an", i - 1)

    }

    console.log(count);
}

window.addEventListener("load", setup);