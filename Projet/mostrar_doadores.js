function mostrar_doadores() {
	if (santa_rita == 0 && lar_idosos == 0 && meio_ambiente == 0)// se caso nenhuma doação for feita e o usuário tentar ver o mostrar.
	{
		alert("Não foi feita nenhuma doação");
	}
	else {
		document.getElementById('emp').className = "invisivel";//se alguma doação já ter sido feita ele deixará o emp com display none.
		document.getElementById('mostrar').className = "visivel";// e deixará a div mostrar com o display block.
	}
	if (santa_rita == 1) {
		for (var j = 0; j < doar_santa.length; j++) {
			document.getElementById('mostrar').innerHTML += "<table><tr><td>Instituição: Santa Rita</td></tr><tr><td>Quem Doou: </td><td>" + doar_santa[j].doador + "</td></tr><tr><td>Quantas caixinhas de leite doou:</td><td>" + doar_santa[j].leite + "</td></tr><tr><td>Quantos brinquedos doou:</td><td>" + doar_santa[j].brinquedos + "</td></tr><tr><td>Quantos KG de Alimentos não perecíveis foi doado:</td><td>" + doar_santa[j].anp + "</td></tr><tr><td>Quantas Roupas infantis foi doado:</td><td>" + doar_santa[j].roupas + "</td></tr><tr><td>Quantos R$ foi doado:</td><td>" + doar_santa[j].dinheiro + "</td></tr></table>";
		}
	}
	if (lar_idosos == 1) {
		for (var j = 0; j < doar_idosos.length; j++) {
			document.getElementById('mostrar').innerHTML += "<table><tr><td>Instituição: Lar dos Idosos</td></tr><tr><td>Quem Doou: </td><td>" + doar_idosos[j].doador + "</td></tr><tr><td>Quantas Fraudas de Adultos foi doado:</td><td>" + doar_idosos[j].fraudas + "</td></tr><tr><td>Qunatos Produtos de Limpeza foi doado:</td><td>" + doar_idosos[j].pdl + "</td></tr><tr><td>Quantos medicamentos foi doado:</td><td>" + doar_idosos[j].medicamentos + "</td></tr><tr><td>Quantos KG de Alimentos não perecíveis foi doado:</td><td>" + doar_idosos[j].anp + "</td></tr><tr><td>Quantos R$ foi doado:</td><td>" + doar_idosos[j].dinheiro + "</td></tr></table><br><br>";
		}
	}
	if (meio_ambiente == 1) {
		for (var j = 0; j < doar_idosos.length; j++) {
			document.getElementById('mostrar').innerHTML += "<table><tr><td>Instituição: Instituto de Meio Ambiente</td></tr><tr><td>Quem Doou: </td><td>" + doar_meio_ambiente[j].doador + "</td></tr><tr><td>Quantas latinhas foi doado:</td><td>" + doar_meio_ambiente[j].latinha + "</td></tr><tr><td>Quantos KG de Plásticos foi doado:</td><td>" + doar_meio_ambiente[j].plastico + "</td></tr><tr><td>Qunatos Kg de Papelão foi doado:</td><td>" + doar_meio_ambiente[j].papelao + "</td></tr><tr><td>Quantos Kg de Utensílios Tecnológicos foi doado:</td><td>" + doar_meio_ambiente[j].ut + "</td></tr><td>Quantos R$ foi doado:</td><td>" + doar_meio_ambiente[j].dinheiro + "</td></tr></table><br><br>";
		}
	}
	document.getElementById('mostrar').innerHTML += "<button onclick='troca1()''>Voltar</button>";
}