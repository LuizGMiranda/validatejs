# ValidateJS
Link para testes: https://luizgmiranda.github.io/validatejs/

### HTML Básico

    <body class="container">
        <div id='form_msg' style="display:none" role="alert">
        </div>
        <form name='form' id='form'>
            <label>Nome:</label>
            <input name="nome" id="form_nome" type="text"><br/>
            <label>Email:</label>
            <input id="form_email" type="email"><br/>
            <label>CPF:</label>
            <input name="cpf" id="form_cpf" type="text"><br/>
            <label>CNPJ:</label>
            <input name="cnpj" id="form_cnpj" type="text"><br/>
            <label>Moeda:</label>
            <input name="moeda" id="form_moeda" type="number"><br/>
            <label>Valor:</label>
            <input name="valor" id="form_valor" type="number"><br/>
            <br/>
            <input type="button" type="submit" onclick="validaCampos()" value="Validar">
        </form>
    </body>

#### Valida:
 - Nome (se é vazio, nulo ou em branco)
 - Email
 - ~~Telefone~~ *(em breve)*
 - CPF (básico, apenas se tem 11 dígitos e diferente de números iguais)
 - CNPJ  (básico, apenas se tem 14 dígitos e diferente de números iguais)
 - ~~Moeda~~ *(em breve)*
 - *Valor* *(em breve)*

#### Próximos Passos:
 - Colocar mascaras nos campos
 - Melhorar validação de alguns campos


