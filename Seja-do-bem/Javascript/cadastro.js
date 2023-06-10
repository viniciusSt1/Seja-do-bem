class Cadastro //classe
{
    constructor() //metodo para criar os atributos.
    {
        this.nome;
        this.sobrenome;
        this.telefone;
        this.cidade;
        this.idade;
        this.e_mail;
        this.cpf;
        this.conta;
        this.senha;
        this.genero;
        this.leite;
        this.brinquedos;
        this.anp;
        this.roupas;
        this.dinheirost;
        this.fraudas;
        this.pdl;
        this.medicamentos;
        this.anpid;
        this.dinheiroid;
        this.latinha;
        this.plastico;
        this.papelao;
        this.ut;
        this.dinheiroad;
    }
    salvamento_do_usuário(nome, telefone, idade, e_mail, cpf, conta, senha, cidade, sobrenome) //método para os atributos receberem os valores das inputs do cadastrar.
    {
        var crt = new Criptografa();
        this.senha = crt.criptografar(senha)
        this.nome = nome;
        this.telefone = telefone;
        this.idade = idade;
        this.e_mail = e_mail;
        this.cpf = cpf;
        this.conta = conta;
        this.cidade = cidade;
        this.sobrenome = sobrenome;
        var v = document.getElementsByName('genero');
        if (v[0].checked) {
            this.genero = "Masculino";
        }
        if (v[1].checked) {
            this.genero = "Feminino";
        }
        if (v[2].checked) {
            this.genero = "Não específico";
        }
        this.leite = 0;
        this.brinquedos = 0;
        this.anp = 0;
        this.roupas = 0;
        this.dinheirost = 0;
        this.fraudas = 0;
        this.pdl = 0;
        this.medicamentos = 0;
        this.anpid = 0;
        this.dinheiroid = 0;
        this.latinha = 0;
        this.plastico = 0;
        this.papelao = 0;
        this.ut = 0;
        this.dinheiroad = 0;
    }
    editar_usuario(nome, telefone, idade, e_mail, cpf, conta, senha, cidade, sobrenome) {
        dados[veri].nome=nome;
        dados[veri].telefone=telefone;
        dados[veri].idade=idade;
        dados[veri].e_mail=e_mail;
        dados[veri].cpf=cpf;
        dados[veri].conta=conta;
        dados[veri].senha=crt.criptografar(senha);
        dados[veri].cidade=cidade;
        dados[veri].sobrenome=sobrenome;
        var v = document.getElementsByName('genero');
        if (v[0].checked) {
            dados[veri].genero = "Masculino";
            document.getElementById('mas').className="visivel";
            document.getElementById('fem').className="invisivel";
            document.getElementById('outro').className="invisivel";
        }
        if (v[1].checked) {
            dados[veri].genero = "Feminino";
            document.getElementById('mas').className="invisivel";
            document.getElementById('fem').className="visivel";
            document.getElementById('outro').className="invisivel";
        }
        if (v[2].checked) {
            dados[veri].genero = "Não específico";
            document.getElementById('mas').className="invisivel";
            document.getElementById('fem').className="invisivel";
            document.getElementById('outro').className="visivel";
        }
        localStorage.setItem("user",JSON.stringify(dados));
    }
}

function salvar_usuário(nome, telefone, idade, e_mail, cpf, conta, senha, confirmar_senha, cidade, sobrenome, ident) {
    if (senha == confirmar_senha) {//verificar se conta e senha estao corretas
        numb = 0;
        for (var i = 0; i < senha.length; i++) {
            if (senha[i] == "0" || senha[i] == "1" || senha[i] == "2" || senha[i] == "3" || senha[i] == "4" || senha[i] == "5" || senha[i] == "6" || senha[i] == "7" || senha[i] == "8" || senha[i] == "9") {
                numb++;
            }
        }
        if (senha.length == numb && numb != 0) {//se caso a senha for apenas numeros nao realizara cadastro
            document.getElementById('apn').className = "anima";
            setTimeout(function () { document.getElementById('apn').className = "invisivel"; }, 3000);
            document.getElementById('pre').className = "invisivel";
            document.getElementById('exi').className = "invisivel";
            document.getElementById('err').className = "invisivel";
            document.getElementById('cor').className = "invisivel";
        } else {
            try{
                if(ident==undefined){//se for cadastro verificar
                    for (a = 0; a < dados.length; a++) {//verificando se a senha ja existe
                        if (dados[a].conta == conta) {
                            document.getElementById('apn').className = "invisivel";
                            document.getElementById('pre').className = "invisivel";
                            document.getElementById('err').className = "invisivel";
                            document.getElementById('cor').className = "invisivel";
                            document.getElementById('exi').className = "anima";//caso exista
                            setTimeout(function () { document.getElementById('exi').className = "invisivel"; }, 3000);
                            b = 1;
                        }
                    }
                }else{//se for edição o usuario pode usar a sua mesma conta
                    for (a = 0; a < dados.length; a++) {
                        if (dados[a].conta == conta && dados[veri].conta!=conta) {
                            document.getElementById('apn').className = "invisivel";
                            document.getElementById('pre').className = "invisivel";
                            document.getElementById('err').className = "invisivel";
                            document.getElementById('cor').className = "invisivel";
                            document.getElementById('exi').className = "anima";
                            setTimeout(function () { document.getElementById('exi').className = "invisivel"; }, 3000);
                            b = 1;
                        }
                    }
                }
                
            }
            catch(err){

            }
            if (b == 0) {//caso não exista
                if (document.getElementsByName('genero')[0].checked == false && document.getElementsByName('genero')[1].checked == false && document.getElementsByName('genero')[2].checked == false || sobrenome == "" || nome == ""  || telefone == "" || idade =="" || e_mail == "" || cpf == "" || conta == "" || senha == "" || confirmar_senha == "" || cidade == "") {
                    document.getElementById('pre').className = "anima";
                    setTimeout(function () { document.getElementById('pre').className = "invisivel"; }, 3000);
                    document.getElementById('exi').className = "invisivel";
                    document.getElementById('err').className = "invisivel";
                    document.getElementById('cor').className = "invisivel";
                    document.getElementById('apn').className = "invisivel";
                } else {//se tiver preenchido todos os campos
                    if(ident==undefined){//no caso de cadastro
                        var usuario = new Cadastro();
                        usuario.salvamento_do_usuário(nome, telefone, idade, e_mail, cpf, conta, senha, cidade, sobrenome);
                        bank.saveUser(usuario);
                        document.getElementById('apn').className = "invisivel";
                        document.getElementById('pre').className = "invisivel";
                        document.getElementById('exi').className = "invisivel";
                        document.getElementById('err').className = "invisivel";
                        document.getElementById('cor').className = "anima";
                        setTimeout(function () { document.getElementById('cor').className = "invisivel"; }, 3000);
                        limpar();
                    }else{//no caso de editar
                        var e=new Cadastro();
                        e.editar_usuario(nome, telefone, idade, e_mail, cpf, conta, senha, cidade, sobrenome);
                        document.getElementById('apn').className = "invisivel";
                        document.getElementById('pre').className = "invisivel";
                        document.getElementById('exi').className = "invisivel";
                        document.getElementById('err').className = "invisivel";
                        document.getElementById('edS').className = "anima";
                        setTimeout(function () { document.getElementById('edS').className = "invisivel"; }, 3000);
                        limpar();
                    }
                }
            }
            b = 0;
        }
    }

    else {
        document.getElementById('apn').className = "invisivel";
        document.getElementById('pre').className = "invisivel";
        document.getElementById('exi').className = "invisivel";
        document.getElementById('cor').className = "invisivel";
        document.getElementById('err').className = "anima";
        setTimeout(function () { document.getElementById('err').className = "invisivel"; }, 3000);
    }
}

function limpar() {
    nome.value = "";
    telefone.value = "";
    cidade.value = "";
    idade.value = "";
    email.value = "";
    cpf.value = "";
    conta.value = "";
    senha.value = "";
    con_senha.value = "";
    cl.value = "";
    sl.value = "";
    leite.value = "";
    brinquedos.value = "";
    alimentos.value = "";
    roupa.value = "";
    dinheiro.value = "";
    frauda.value = "";
    pdl.value = "";
    medicamentos.value = "";
    anp.value = "";
    dinheiro_idosos.value = "";
    latinha.value = "";
    plastico.value = "";
    papelao.value = "";
    ut.value = "";
    dinheiro_meio_ambiente.value = "";
    sobrenome.value = "";
    buscaCPF.value="";
    for (i = 0; i <= 2; i++) {
        document.getElementsByName('genero')[i].checked = false;
    }
}