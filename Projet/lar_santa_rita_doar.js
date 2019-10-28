var doar_santa = new Array(), santa_rita = 0;
class Santa_Rita {
	constructor() {
		this.doador;
		this.leite;
		this.brinquedos;
		this.anp;
		this.roupas;
		this.dinheiro;
	}
	salvar() {
		this.doador = user[veri].nome;
		this.leite = leite.value;
		this.brinquedos = brinquedos.value;
		this.anp = alimentos.value;
		this.roupas = roupa.value;
		this.dinheiro = dinheiro.value;
		if (this.leite == "" || this.leite == "undefined") {
			this.leite = 0;
		}
		if (this.brinquedos == "" || this.brinquedo == "undefined") {
			this.brinquedos = 0;
		}

		if (this.anp == "" || this.anp == "undefined") {
			this.anp = 0;
		}
		if (this.roupas == "" || this.roupas == "undefined") {
			this.roupas = 0;
		}
		if (this.dinheiro == "" || this.dinheiro == "undefined") {
			this.dinheiro = 0;
		}
	}
}
function doar_santa_rita() {
	var doar = new Santa_Rita();
	doar.salvar();
	doar_santa.push(doar);
	santa_rita = 1;
	limpar();
}