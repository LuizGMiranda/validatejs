// TODO fazer mascara para os campos


//Set Ids 
document.addEventListener("DOMContent", function () {
var form_nome = document.getElementById('#form_nome');
var form_email = document.getElementById('#form_email');
var form_cpf = document.getElementById('#form_cpf');
var form_cnpj  = document.getElementById('#form_cnpj');
var form_moeda = document.getElementById('#form_moeda');
var form_valor = document.getElementById('#form_valor');
});

function validaCampos(){
    console.log("Estou verificando");

    if(validaVazioNulo(form_nome)!=true){
        return false;
    }

    if(validaVazioNulo(form_email)!=true || ehEmail(form_email)!=true){
        return false;
    }

    if(validaVazioNulo(form_cpf)!=true || ehCpf(form_cpf)!=true){
        return false;
    }
    
    else {
        console.log("Enviado com sucesso");
    }
};


function montaMsg(atr){
    var msg;
    atr.name ? msg = ("Valor incorreto, preencha corretamente o campo " + atr.name + "!") : msg = ("Valor incorreto, preencha corretamente o campo!");
    alert(msg); // TROCAR PARA MSG EM TELA
    document.getElementById(atr.id).focus();
}

function validaVazioNulo(atr){
    if(atr.value == '' || atr.value === undefined || atr.value === null){
        montaMsg(atr);
    } else
        return true;
}
function ehEmail(atr){
    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/ ;
    if (!reg.test(atr.value)){
        montaMsg(atr);;
    } else{
        return true;
    }
}

function ehCpf(atr){
    var cpf = atr.value.replace(/[^\d]+/g,'');
    if(
        cpf != "00000000000" ||
        cpf != "11111111111" ||
        cpf != "22222222222" ||
        cpf != "33333333333" ||
        cpf != "44444444444" ||
        cpf != "55555555555" ||
        cpf != "66666666666" ||
        cpf != "77777777777" ||
        cpf != "88888888888" ||
        cpf != "99999999999"
    ){
        return true;
    } else
        montaMsg(atr);
}
