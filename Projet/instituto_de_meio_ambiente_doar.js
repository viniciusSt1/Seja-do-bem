var doar_meio_ambiente = new Array(), meio_ambiente = 0;
class Meio_Ambiente {
	constructor() {
		this.doador;
		this.latinha;
		this.plastico;
		this.papelao;
		this.ut;
		this.dinheiro;
	}
	salvar() {
		this.doador = user[veri].nome;
		this.latinha = latinha.value;
		this.plastico = plastico.value;
		this.papelao = papelao.value;
		this.ut = ut.value;
		this.dinheiro = dinheiro_meio_ambiente.value;
		if (this.latinha == "" || this.latinha == "undefined") {
			this.latinha = 0;
		}
		if (this.plastico == "" || this.plastico == "undefined") {
			this.plastico = 0;
		}

		if (this.papelao == "" || this.papelao == "undefined") {
			this.papelao = 0;
		}
		if (this.ut == "" || this.ut == "undefined") {
			this.ut = 0;
		}
		if (this.dinheiro == "" || this.dinheiro == "undefined") {
			this.dinheiro = 0;
		}
	}
}
function doar_instituto_de_meio_ambiente() {
	var doar = new Meio_Ambiente();
	doar.salvar();
	doar_meio_ambiente.push(doar);
	meio_ambiente = 1;
	limpar();
}