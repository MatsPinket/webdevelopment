const initialize = (   ) => {

	let button = document.querySelector("button");
	button.addEventListener("click", save);

	let sliders = document.getElementsByClassName("slider");
	for (let i = 0; i < sliders.length; i++) {
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	update();
};

const update = (   ) => {
	let red=document.getElementById("sldRed").value;
	let green=document.getElementById("sldGreen").value;
	let blue=document.getElementById("sldBlue").value;
	document.getElementById("lblRed").innerHTML=red;
	document.getElementById("lblGreen").innerHTML=green;
	document.getElementById("lblBlue").innerHTML=blue;
	let swatch=document.getElementById("swatch");
	swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";
};

const save = (   ) => {

	let red=document.querySelector("#sldRed").value;
	let green=document.querySelector("#sldGreen").value;
	let blue=document.querySelector("#sldBlue").value;

	let swatch = document.createElement("div");
	let lastDiv = document.querySelector("body > div:last-of-type");
	let close = document.createElement("button");
	let discardButton = document.createTextNode("X");


	close.appendChild(discardButton);
	close.addEventListener("click", remove);

	close.style.float="right";

	swatch.insertAdjacentElement("beforeend", close);
	swatch.addEventListener("click", selectColor);


	swatch.classList.add("swatch");
	swatch.style.backgroundColor = "rgb("+red+","+green+","+blue+")";

	lastDiv.appendChild(swatch);

};

const selectColor = (event) => {

	let target = event.target;
	let currentTarget = event.currentTarget;
	if (target === currentTarget){

		let swatch = document.querySelector("#swatch");
		let rgb = target.style.backgroundColor.split(",");
		let red = rgb[0].substring(4, rgb[0].length);
		let green = rgb[1].substring(1, rgb[1].length);
		let blue = rgb[2].substring(1, rgb[2].length -1);

		document.querySelector("#sldRed").value=red;
		document.querySelector("#sldGreen").value=green;
		document.querySelector("#sldBlue").value=blue;
		document.querySelector("#lblRed").innerHTML=red;
		document.querySelector("#lblGreen").innerHTML=green;
		document.querySelector("#lblBlue").innerHTML=blue;

		swatch.style.backgroundColor = target.style.backgroundColor;
	}

};

const remove = (event) => {

	let target = event.target;

	target.parentElement.remove();

};



window.addEventListener("load", initialize);