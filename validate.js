/*
    Para validar usar os ids
    #form_nome para Nome
    #form_email para Email
    #form_cpf para CPF
    #form_cnpj para CNPJ
    #form_moeda para Dinheiro
    #form_valor para Inteiro
*/

document.addEventListener("DOMContent", function () {
var form_nome = document.getElementById('#form_nome');
var form_email = document.getElementById('#form_email');
var form_cpf = document.getElementById('#form_cpf');
var form_cnpj  = document.getElementById('#form_cnpj');
var form_moeda = document.getElementById('#form_moeda');
var form_valor = document.getElementById('#form_valor');
});


//Validação de Email
var exclude=/[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/;
var check=/@[w-]+./;
var checkend=/.[a-zA-Z]{2,3}$/;

function verificaName(atr){
    var msg;
    atr.name ? msg = ("Valor incorreto, preencha corretamente o campo " + atr.name + "!") : msg = ("Valor incorreto, preencha corretamente o campo!");
    alert(msg); // TROCAR PARA MSG EM TELA
    document.getElementById(atr.id).focus();
}

function validaVazioNulo(atr){
    if(atr.value == '' || atr.value === undefined || atr.value === null){
        verificaName(atr);
    }
}

function validaCampos(){
    console.log("Estou verificando");

    if(form_nome){
        validaVazioNulo(form_nome);
    }

    validaEmail();
    
};

function validaEmail(){
    validaVazioNulo(form_email);
    
    if(form_email.value == ''|| form_email.value === undefined || form_email.value === null){
        return false;
    }
}