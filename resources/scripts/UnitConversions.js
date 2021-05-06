function fromSqrMtrs() {
	var squaremeters = document.getElementById("squaremeters");
	var squarefeet = document.getElementById("squarefeet");
	var hectares = document.getElementById("hectares");
	var cents = document.getElementById("cents");

	squarefeet.value = (squaremeters.value)*10.7639;
	hectares.value = (squaremeters.value)*0.0001;
	cents.value = (squaremeters.value)*0.0247105;
}

function fromSqrFeet() {
	var squaremeters = document.getElementById("squaremeters");
	var squarefeet = document.getElementById("squarefeet");
	var hectares = document.getElementById("hectares");
	var cents = document.getElementById("cents");

	squaremeters.value = (squarefeet.value)/10.7639;
	hectares.value = (squarefeet.value)*0.0000092903;
	cents.value = (squarefeet.value)*0.00229568;
}

function fromHect() {
	var squaremeters = document.getElementById("squaremeters");
	var squarefeet = document.getElementById("squarefeet");
	var hectares = document.getElementById("hectares");
	var cents = document.getElementById("cents");

	squaremeters.value = (hectares.value)*10000;
	squarefeet.value = (hectares.value)*107639;
	cents.value = (hectares.value)*247.105;
}

function fromCents() {
	var squaremeters = document.getElementById("squaremeters");
	var squarefeet = document.getElementById("squarefeet");
	var hectares = document.getElementById("hectares");
	var cents = document.getElementById("cents");

	squaremeters.value = (cents.value)*40.4686;
	squarefeet.value = (cents.value)*435.6;
	hectares.value = (cents.value)*0.00404686;
}