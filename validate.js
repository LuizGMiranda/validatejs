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
    if( cnpj.length == 14 ||
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

// Animação mensagem de erro e sucesso
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


//Mascaras
function pegaId( el ){
	return document.getElementById( el );
}

function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execMascara()",1)
}
function execMascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mascaraTelefone(v){
    v=v.replace(/\D/g,"");                  //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}

function mascaraCpf(v){
    v=v.replace(/\D/g,"");
    v=v.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4"); 
    return v;
}

function mascaraCnpj(v){
    v=v.replace(/\D/g,"");     
    v=v.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1 $2 $3/$4-$5"); 
    return v;
} 

function mascaraMoeda(v){    
    v=v.replace(/\D/g,"") // permite digitar apenas numero 
    v=v.replace(/(\d{1})(\d{17})$/,"$1.$2") // coloca ponto antes dos ultimos digitos 
    v=v.replace(/(\d{1})(\d{13})$/,"$1.$2") // coloca ponto antes dos ultimos 13 digitos 
    v=v.replace(/(\d{1})(\d{10})$/,"$1.$2") // coloca ponto antes dos ultimos 10 digitos 
    v=v.replace(/(\d{1})(\d{7})$/,"$1.$2") // coloca ponto antes dos ultimos 7 digitos 
    v=v.replace(/(\d{1})(\d{1,2})$/,"$1,$2") // coloca virgula antes dos ultimos 4 digitos 
    return v;
} 

window.onload = function(){
	pegaId('form_telefone').onkeyup = function(){
		mascara( this, mascaraTelefone );
    }
    pegaId('form_cpf').onkeyup = function(){
		mascara( this, mascaraCpf );
    }
    pegaId('form_cnpj').onkeyup = function(){
		mascara( this, mascaraCnpj );
    }
    pegaId('form_moeda').onkeyup = function(){
		mascara( this, mascaraMoeda );
	}
}