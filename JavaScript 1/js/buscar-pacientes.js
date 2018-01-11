var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", () => {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", () => {
        var erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status === 200){
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
    
            pacientes.forEach( (paciente) => {
                adicionaPacienteNaTabela(paciente);
            });
        } else{
            console.log(xhr.status);
            console.log("Deu tudo errado o lixo");
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});