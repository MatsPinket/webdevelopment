const setup = (   ) => {

    programma1();
    programma2();

};

const programma1 = (   ) => {

    const student1 = {
        naam: 'Mats Pinket',
        leeftijd: 18,
        studierichting: 'Informatica',
        vakken: ['Fundamentals', 'databases', 'Webdevelopment'],
        geboortedatum: new Date('2004-10-27')
    };
    const student1Json = JSON.stringify(student1);

    console.log(student1Json);

};

const programma2 = (   ) => {

    const student1 = {
        naam: 'Mats Pinket',
        leeftijd: 18,
        studierichting: 'Informatica',
        vakken: ['Fundamentals', 'databases', 'Webdevelopment'],
        geboortedatum: new Date('2004-10-27')
    };
    const student1Json = JSON.stringify(student1);
    const student2 = JSON.parse(student1Json);

    console.log(student2.naam);

};

window.addEventListener("load", setup);