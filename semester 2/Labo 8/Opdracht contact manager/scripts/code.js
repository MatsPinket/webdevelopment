let personen = [];

const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    const isValid = valideer();

    if (isValid) {
        // haal de ingegeven data op
        const voornaam = document.getElementById("txtVoornaam").value.trim();
        const familienaam = document.getElementById("txtFamilienaam").value.trim();
        const geboortedatum = document.getElementById("txtGeboorteDatum").value.trim();
        const email = document.getElementById("txtEmail").value.trim();
        const aantalKinderen = document.getElementById("selAantalKinderen").value;

        // een nieuw aangemaakte persoon voegen we toe
        const persoon = { voornaam, familienaam, geboortedatum, email, aantalKinderen };
        personen.push(persoon);

        // maak de lijst met personen opnieuw aan
        toonPersonen();
    }
};

const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    // maak het formulier leeg
    document.getElementById("formPersoon").reset();
};

const toonPersonen = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.innerHTML = "";
    for (let i = 0; i < personen.length; i++) {
        const persoon = personen[i];
        const option = document.createElement("option");
        option.text = `${persoon.voornaam} ${persoon.familienaam}`;
        lstPersonen.add(option);
    }
};

const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", toonGeselecteerdePersoon);
};

const toonGeselecteerdePersoon = () => {
    const selectedIndex = document.getElementById("lstPersonen").selectedIndex;
    const persoon = personen[selectedIndex];
    document.getElementById("txtVoornaam").value = persoon.voornaam;
    document.getElementById("txtFamilienaam").value = persoon.familienaam;
    document.getElementById("txtGeboorteDatum").value = persoon.geboortedatum;
    document.getElementById("txtEmail").value = persoon.email;
    document.getElementById("selAantalKinderen").value = persoon.aantalKinderen;
};

const reportError = (element, message) => {
    element.classList.add("is-invalid");
    const errorSpan = document.createElement("span");
    errorSpan.classList.add("invalid-feedback");
    errorSpan.innerText = message;
    element.parentNode.appendChild(errorSpan);
};

const clearError = (element) => {
    element.classList.remove("is-invalid");
    const errorSpan = element.parentNode.querySelector(".invalid-feedback");
}

