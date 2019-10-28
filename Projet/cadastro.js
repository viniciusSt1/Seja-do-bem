var user = new Array(), b = 0, a; var vi = 0, a23 = 1;
class Cadastro//classe
{
	constructor()//metodo para criar os atributos.
	{
		this.nome;
		this.telefone;
		this.cidade;
		this.idade;
		this.e_mail;
		this.cpf;
		this.conta;
		this.senha;
		this.cidade;
		this.genero;
		this.v;
	}
	salvamento_do_usuário(nome, telefone, idade, e_mail, cpf, conta, senha, cidade)//método para os atributos receberem os valores das inputs do cadastrar.
	{
		this.nome = nome;
		this.telefone = telefone;
		this.idade = idade;
		this.e_mail = e_mail;
		this.cpf = cpf;
		this.conta = conta;
		this.senha = senha;
		this.cidade = cidade;
		this.v = document.getElementsByName('genero')
		if (this.v[0].checked) {
			this.genero = "Masculino";
		}
		if (this.v[1].checked) {
			this.genero = "Feminino";
		}
		if (this.v[2].checked) {
			this.genero = "Não específico";
		}
	}
}
function salvar_usuário(nome, telefone, idade, e_mail, cpf, conta, senha, confirmar_senha, cidade) {
	if (senha == confirmar_senha) {
		if (vi == 0) {
			if (nome == "" || telefone == "" || idade, e_mail == "" || cpf == "" || conta == "" || senha == "" || confirmar_senha == "" || cidade == "" || document.getElementsByName('genero')[0].checked == false && document.getElementsByName('genero')[1].checked == false && document.getElementsByName('genero')[2].checked == false) {
				document.getElementById('pre').className = "anima";
				document.getElementById('exi').className = "invisivel";
				document.getElementById('err').className = "invisivel";
				document.getElementById('cor').className = "invisivel";
			}
			else {
				var usuario = new Cadastro();
				usuario.salvamento_do_usuário(nome, telefone, idade, e_mail, cpf, conta, senha, cidade);
				user.push(usuario);
				document.getElementById('pre').className = "invisivel";
				document.getElementById('exi').className = "invisivel";
				document.getElementById('err').className = "invisivel";
				document.getElementById('cor').className = "anima";
				limpar();
				vi++;
			}

		}
		else {
			for (a = 0; a < user.length; a++) {
				if (user[a].conta == conta) {
					document.getElementById('pre').className = "invisivel";
					document.getElementById('err').className = "invisivel";
					document.getElementById('cor').className = "invisivel";
					document.getElementById('exi').className = "anima";
					b = 1;
				}
			}
			if (b == 0) {
				if (nome == "" || telefone == "" || idade, e_mail == "" || cpf == "" || conta == "" || senha == "" || confirmar_senha == "" || cidade == "" || document.getElementsByName('genero')[0].checked == false && document.getElementsByName('genero')[1].checked == false && document.getElementsByName('genero')[2].checked == false) {
					document.getElementById('pre').className = "anima";
					document.getElementById('exi').className = "invisivel";
					document.getElementById('err').className = "invisivel";
					document.getElementById('cor').className = "invisivel";
				}
				else {
					var usuario = new Cadastro();
					usuario.salvamento_do_usuário(nome, telefone, idade, e_mail, cpf, conta, senha, cidade);
					user.push(usuario);
					document.getElementById('pre').className = "invisivel";
					document.getElementById('exi').className = "invisivel";
					document.getElementById('err').className = "invisivel";
					document.getElementById('cor').className = "anima";
					limpar();
				}
			}
			b = 0;
		}
	}
	else {
		document.getElementById('pre').className = "invisivel";
		document.getElementById('exi').className = "invisivel";
		document.getElementById('cor').className = "invisivel";
		document.getElementById('err').className = "anima";
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
	for (i = 0; i <= 2; i++) {
		document.getElementsByName('genero')[i].checked = false;
	}
}	