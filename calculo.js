let botao = document.querySelector("button");
let form = document.querySelector(".aa");

function aparecer(){
    if (form.style.display == "flex") {
        form.style.display = "none";
        botao.innerHTML = "Abrir calculo";
    }
    else{
        form.style.display = "flex";
        botao.innerHTML = "Fechar calculo";
    }
    
}
botao.onclick = aparecer;

 $(document).ready(function () {
        $('#cep').change(function () {

            var cep = $("#cep").val();

            $.getJSON("https://viacep.com.br/ws/" + cep + "/json", function (dados) {
                if (!("erro" in  dados)){
                    $("#rua").val(dados.logradouro);
                    $("#cidade").val(dados.localidade);
                    $("#uf").val(dados.uf);
                }
            })


        })

    })

 if (calculo >= 25 && idade <= 60 && salario >= 1500 && emprestimo <= 10 * salario) {
     alert("Emprestimo Aprovado");
 } else {
     alert("Emprestimo Reprovado");
};
