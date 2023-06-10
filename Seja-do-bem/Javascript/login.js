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
		dados = JSON.parse(localStorage.getItem('user'));
		try {
			for (i = 0; i < dados.length; i++) {
				if (dados[i].conta == this.lconta && senhasDsc[i] == this.lsenha)// esse if está sendo utilizado para poder fazer a verificação se a conta e a senha estão cadastradas ou seja se o usuário já foi cadastrado.
				{
					cont = 1; veri = i;//veri estará armazenado a posição da conta logada até ser afetuado outro login;
				}
			}
			for (i = 0; i < dados.length; i++) {
				if (localStorage.getItem('user') != undefined) {
					if (dados[i].conta == this.lconta || senhasDsc[i] == this.lsenha) {
						if (cont != 1) {
							k = 1;
						}
					}
				}
			}
		} catch (err) {
			cont = 0;
			k = 0;
		}
		if (cont == 1) {
			document.getElementById('desconec').className = "invisivel";
			document.getElementById('conec').className = "visivel";
			document.getElementById('l2').className = "invisivel";
			document.getElementById('l1').className = "invisivel";
			document.getElementById('img_menus').className = "visivel";
			document.getElementById('dlogin').className = "invisivel";
			document.getElementById('emp').className = "visivel";
			if (dados[veri].genero == "Masculino") {
				document.getElementById('an').className = "invisivel";
				document.getElementById('mas').className = "visivel";
			}
			if (dados[veri].genero == "Feminino") {
				document.getElementById('an').className = "invisivel";
				document.getElementById('fem').className = "visivel";
			}
			if (dados[veri].genero == "Não específico") {
				document.getElementById('an').className = "invisivel";
				document.getElementById('outro').className = "visivel";
			}
			np.value = dados[veri].nome;
			cp.value = dados[veri].conta;
		}
		if (k == 1) {
			document.getElementById('l2').className = "invisivel";
			document.getElementById('l1').className = "visivel";
			setTimeout(function () { document.getElementById('l1').className = "invisivel"; }, 3000);
		}
		if (k == 0 && cont == 0) {
			document.getElementById('l1').className = "invisivel";
			document.getElementById('l2').className = "visivel";
			setTimeout(function () { document.getElementById('l2').className = "invisivel"; }, 3000);
		}
		cont = 0;
		k = 0;
	}
}
var login = new Login();
function lg()//função para logar.
{
	login.entrada();//o objeto login está acessando o método entrada.
	login.autenticacao();//o objeto login está acessando o método autenticacao.
	limpar();// esse limpar foi definido no cadastro.js, assim que essa função for chamada todas as inputs do login será substituida por "" o que simularia um apagar.
}
function sairc() {
	conf = confirm("Deseja mesmo sair da conta?")
	if (conf) {
		document.getElementById('emp').className = "invisivel";
		document.getElementById('dmenu').className = "visivel";
		cp.value = "";
		np.value = "";
		document.getElementById('conec').className = "invisivel";
		document.getElementById('desconec').className = "visivel";
		document.getElementById('mas').className = "invisivel";
		document.getElementById('fem').className = "invisivel";
		document.getElementById('outro').className = "invisivel";
		document.getElementById('an').className = "visivel";
		window.location.reload(true);
	}
}
