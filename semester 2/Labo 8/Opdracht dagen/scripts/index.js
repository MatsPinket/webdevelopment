const setup = (   ) => {

    const birthday = new Date('2004-10-27');
    const today = new Date();
    const diffInMs = today.getTime() - birthday.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    console.log(`Het aantal dagen tussen mijn verjaardag en vandaag is ${diffInDays} dagen.`);

};

window.addEventListener("load", setup);