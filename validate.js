// TODO fazer mascara para os campos

//Set Ids 
document.addEventListener("DOMContent", function () {
    var form_nome = document.getElementById('form_nome');
    var form_telefone = document.getElementById('form_telefone');
    var form_email = document.getElementById('form_email');
    var form_cpf = document.getElementById('form_cpf');
    var form_cnpj  = document.getElementById('form_cnpj');
    var form_moeda = document.getElementById('form_moeda');
    var form_valor = document.getElementById('form_valor');
    var form_msgErro = document.getElementById('form_msg');
});

function validaCampos(){
    console.log("Estou verificando");

    //NOME
    if(validaVazioNulo(form_nome)!=true){
        return false;
    }

    //EMAIL
    if(validaVazioNulo(form_email)!=true || ehEmail(form_email)!=true){
        return false;
    }

    //CPF
    if(validaVazioNulo(form_cpf)!=true || ehCpf(form_cpf)!=true){
        return false;
    }

    //CNPJ
    if(validaVazioNulo(form_cnpj)!=true || ehCnpj(form_cnpj)!=true){
        return false;
    }

    //Moeda
    if(validaVazioNulo(form_moeda)!=true){
        return false;
    }

    //Valor
    if(validaVazioNulo(form_valor)!=true){
        return false;
    }

    //Form Valido
    else {
        document.getElementById('form_msg').innerHTML = "Enviado com sucesso";
        document.getElementById('form_msg').className = 'alert alert-success';
        document.getElementById('form_msg').style.display = 'block'; 
        fade('form_msg', 3, 100, 0);
    }
};


function montaMsg(atr){
    var msg;
    atr.name ? msg = ("Valor incorreto, preencha corretamente o campo " + atr.name + "!") : msg = ("Valor incorreto, preencha corretamente o campo!");
    document.getElementById('form_msg').innerHTML = msg;
    document.getElementById('form_msg').className = 'alert alert-danger';
    document.getElementById('form_msg').style.display = 'block'; 
    document.getElementById(atr.id).focus();
    fade('form_msg', 3, 100, 0);
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
    if( cpf.length == 11 ||
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

function ehCnpj(atr){
    var cnpj = atr.value.replace(/[^\d]+/g,'');
    if( cpf.length == 14 ||
        cnpj != "00000000000" ||
        cnpj != "11111111111" ||
        cnpj != "22222222222" ||
        cnpj != "33333333333" ||
        cnpj != "44444444444" ||
        cnpj != "55555555555" ||
        cnpj != "66666666666" ||
        cnpj != "77777777777" ||
        cnpj != "88888888888" ||
        cnpj != "99999999999"
    ){
        return true;
    } else
        montaMsg(atr);
}

function fade(id, time, ini, fin) {
    var target = document.getElementById(id);
    var alpha = ini;
    var inc;
    if (fin >= ini) { 
        inc = 2; 
    } else {
        inc = -2;
    }
    timer = (time * 1000) / 50;
    var i = setInterval(
        function() {
            if ((inc > 0 && alpha >= fin) || (inc < 0 && alpha <= fin)) {
                clearInterval(i);
            }
            setAlpha(target, alpha);
            alpha += inc;
        }, timer);
}

function setAlpha(target, alpha) {
    target.style.filter = "alpha(opacity="+ alpha +")";
    target.style.opacity = alpha/100;
}