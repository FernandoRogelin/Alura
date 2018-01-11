var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
	var tdPeso = pacientes[i].querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = pacientes[i].querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = pacientes[i].querySelector(".info-imc");

	var pesoEhValido = validaPeso(peso);
	var alturaEhValido = validaAltura(altura);

	if(!pesoEhValido){
		pesoEhValido = false;
		tdImc.textContent = "Peso inválido";
		pacientes[i].classList.add("paciente-invalido");
	}

	if(!alturaEhValido){
		alturaEhValido = false;
		tdImc.textContent = "Altura inválida";
		pacientes[i].classList.add("paciente-invalido");
	}

	if(alturaEhValido && pesoEhValido){
		var imc = calculaImc(peso, altura);
		tdImc.textContent = imc;
	}
}

function calculaImc(peso, altura) {
	var imc = 0;

	imc = peso / (altura * altura);

	return imc.toFixed(2);
}

function validaPeso(peso){
	if(peso >= 0 && peso < 600){
		return true;
	} else{
		return false;
	}
}

function validaAltura(altura){
	if(altura >= 0 && altura < 3.0){
		return true;
	} else{
		return false;
	}
}