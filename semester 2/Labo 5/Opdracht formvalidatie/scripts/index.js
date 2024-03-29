const setup = (   ) => {
	let button = document.getElementById("validate");
	button.addEventListener("click", pressButton);
}


const pressButton = (   ) => {
	valideerVoornaam();
	valideerFamilienaam();
	valideerGeboorte();
	valideerMail();
	valideerKinderen();
}


const valideerVoornaam = (   ) => {

	let txtVoornaam = document.getElementById("txtVoornaam");
	let error = document.getElementById("error1");

	let voornaam = txtVoornaam.value.trim();

	if (voornaam.length > 30) {
		txtVoornaam.className="invalid";
		error.innerHTML = "max. 30 karakters";
	} else {
		txtVoornaam.className="";
		error.innerHTML = "";
	}
}


const valideerFamilienaam = (   ) => {

	let txtFamilienaam = document.getElementById("txtFamilienaam");
	let error = document.getElementById("error2");

	let familienaam = txtFamilienaam.value.trim();

	if (familienaam.length > 50) {
		txtFamilienaam.className="invalid";
		error.innerHTML += "max. 50 karakters";
	} else {
		txtFamilienaam.className="";
		error.innerHTML = "";
	} if (familienaam.length === 0) {
		txtFamilienaam.className="invalid";
		error.innerHTML += "verplicht veld";
	} else {
		txtFamilienaam.className="";
		error.innerHTML = "";
	}
}


const valideerGeboorte = (   ) => {

	let txtGeboorte = document.getElementById("txtGeboorte");
	let error = document.getElementById("error3");

	let geboorte = txtGeboorte.value.trim();
	let format = /^\d{4}-\d{2}-\d{2}$/;

	if (geboorte.length === 0) {
		txtGeboorte.className="invalid";
		error.innerHTML = "verplicht veld";
	} else if(!format.test(geboorte)){
		txtGeboorte.className="invalid";
		error.innerHTML = "formaat is niet jjjj-mm-dd";
	} else {
		txtGeboorte.className="";
		error.innerHTML = "";
	}

}


const valideerMail = (   ) => {
	let txtMail = document.getElementById("txtMail");
	let error = document.getElementById("error4");

	let mail = txtMail.value.trim();

	if (mail.length === 0) {
		txtMail.className="invalid";
		error.innerHTML = "verplicht veld";
	} else if(!mail){
		//controle @ lukt niet en tijd is op.
	} else {
		txtMail.className="";
		error.innerHTML = "";
	}
}


const valideerKinderen = (   ) => {
	let txtKinderen = document.getElementById("txtKinderen");
	let error = document.getElementById("error5");

	let kinderen = txtKinderen.value.trim();
	let format = /^[0-9]{1,2}$/

	if(!format.test(kinderen) || kinderen.substring(0,1) === "-"){
		txtKinderen.className="invalid";
		error.innerHTML = "is geen positief getal";
	} else if (kinderen.length < 99) {
		txtKinderen.className="invalid";
		error.innerHTML = "is te vruchtbaar";
	} else {
		txtKinderen.className="";
		error.innerHTML = "";
	}
}


window.addEventListener("load", setup);