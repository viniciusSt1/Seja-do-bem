var i, k = 0, cont = 0, veri, conf;
class Login {
	constructor() {
		this.lconta;//conta para logar.
		this.lsenha;//senha para logar.
	}
	entrada() {
		this.lconta = cl.value;//this.lconta está recebendo os valores da input conta.
		this.lsenha = sl.value;//this.lsenha está recebendo os valores da input senha.
	}
	autenticacao() {
		for (i = 0; i < user.length; i++)//esse for está sendo utilizado para acessar determinada posição do vetor user.conta e user.senha através do valor do i.
		{
			if (user[i].conta == this.lconta && user[i].senha == this.lsenha)// esse if está sendo utilizado para poder fazer a verificação se a conta e a senha estão cadastradas ou seja se o usuário já foi cadastrado.
			{
				cont = 1; veri = i;
			}
		}
		for (i = 0; i < user.length; i++) {
			if (user[i].conta == this.lconta || user[i].senha == this.lsenha) {
				if (cont != 1) {
					k = 1;
				}
			}
		}
		if (cont == 1) {
			document.getElementById('desconec').className = "invisivel";
			document.getElementById('conec').className = "visivel";
			document.getElementById('l2').className = "invisivel";
			document.getElementById('l1').className = "invisivel";
			document.getElementById('img_menus').className = "visivel";
			if (user[veri].genero == "Masculino") {
				document.getElementById('an').className = "invisivel";
				document.getElementById('fem').className = "invisivel";
				document.getElementById('mas').className = "visivel";
			}
			if (user[veri].genero == "Feminino") {
				document.getElementById('an').className = "invisivel";
				document.getElementById('mas').className = "invisivel";
				document.getElementById('fem').className = "visivel";
			}
			if (user[veri].genero == "Não específico") {
				document.getElementById('an').className = "visivel";
				document.getElementById('fem').className = "invisivel";
				document.getElementById('mas').className = "invisivel";
			}
			np.value = user[veri].nome;
			cp.value = user[veri].conta;
			document.getElementById('login').className = "invisivel";
			document.getElementById('emp').className = "visivel";
		}
		if (k == 1) {
			document.getElementById('l2').className = "invisivel";
			document.getElementById('l1').className = "visivel";
		}
		if (k == 0 && cont == 0) {
			document.getElementById('l1').className = "invisivel";
			document.getElementById('l2').className = "visivel";
		}
		cont = 0;
		k = 0;
	}
}
var login = new Login();// aqui está sendo criado um objeto global.
function lg()//função para logar.
{
	login.entrada();//o objeto login está acessando o método entrada.
	login.autenticacao();//o objeto login está acessando o método autenticacao.
	limpar();// esse limpar foi definido no cadastro.js, assim que essa função for chamada todas as inputs do login será substituida por "" o que simularia um apagar.
}
function sairc() {
	conf = confirm("Deseja mesmo sair da conta?")
	if (conf == true) {
		document.getElementById('emp').className = "invisivel";
		document.getElementById('menu').className = "visivel";
		cp.value = "";
		np.value = "";
		document.getElementById('conec').className = "invisivel";
		document.getElementById('desconec').className = "visivel";
		document.getElementById('img_menus').className = "invisivel";
		document.getElementById('mas').className = "invisivel";
		document.getElementById('fem').className = "invisivel";
		document.getElementById('an').className = "invisivel";
	}
}