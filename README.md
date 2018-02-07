# ValidateJS
Link para testes: https://luizgmiranda.github.io/validatejs/

### HTML Básico

    <body class="container">
        <div id='form_msg' style="display:none" role="alert">
        </div>
        <form name='form' id='form'>
            <div class="form-group">
                <label>Nome:</label>
                <input name="nome" class="form-control" id="form_nome" type="text">
                <label>Telefone:</label>
                <input name="telefone" class="form-control" id="form_telefone" type="text" maxlength="15">
                <label>Email:</label>
                <input name="email" class="form-control" id="form_email" type="email">
                <label>CPF:</label>
                <input name="cpf" class="form-control" id="form_cpf" type="text" maxlength="11">
                <label>CNPJ:</label>
                <input name="cnpj" class="form-control" id="form_cnpj" type="text" maxlength="15">
                <label>Moeda:</label>
                <input name="moeda" class="form-control" id="form_moeda" type="text">
                <label>Valor:</label>
                <input name="valor" class="form-control" id="form_valor" type="text">
                <input type="button" type="submit" onclick="validaCampos()" value="Validar">
            </div>
        </form>
    </body>

#### Valida:
 - Nome (se é vazio, nulo ou em branco)
 - Email
 - ~~Telefone~~ *(em breve)*
 - CPF (básico, apenas se tem 11 dígitos e diferente de números iguais)
 - CNPJ  (básico, apenas se tem 14 dígitos e diferente de números iguais)
 - ~~Moeda~~ *(em breve)*
 - ~~Valor~~ *(em breve)*

#### Mascaras
 - Telefone
 - CPF
 - CNPJ
 - Moeda

#### Próximos Passos:
 - ~~Colocar mascaras nos campos~~
 - Melhorar validação de alguns campos
 - Ajustar mensagens
 - Fazer valiadção de mais campos
 - Fazer todas as mascaras

