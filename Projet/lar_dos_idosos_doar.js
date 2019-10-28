var doar_idosos = new Array(), lar_idosos = 0;
class Lar_dos_Idosos {
	constructor() {
		this.doador;
		this.fraudas;
		this.pdl;
		this.medicamentos;
		this.anp;
		this.dinheiro;
	}
	salvar() {
		this.doador = user[veri].nome;
		this.fraudas = frauda.value;
		this.pdl = pdl.value;
		this.medicamentos = medicamentos.value;
		this.anp = anp.value;
		this.dinheiro = dinheiro_idosos.value;
		if (this.fraudas == "" || this.fraudas == "undefined") {
			this.fraudas = 0;
		}
		if (this.pdl == "" || this.pdl == "undefined") {
			this.pdl = 0;
		}

		if (this.medicamentos == "" || this.medicamentos == "undefined") {
			this.medicamentos = 0;
		}
		if (this.anp == "" || this.anp == "undefined") {
			this.anp = 0;
		}
		if (this.dinheiro == "" || this.dinheiro == "undefined") {
			this.dinheiro = 0;
		}
	}
}
function doar_lar_dos_idosos() {
	var doar = new Lar_dos_Idosos();
	doar.salvar();
	doar_idosos.push(doar);
	lar_idosos = 1;
	limpar();
}