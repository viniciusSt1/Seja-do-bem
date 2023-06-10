function troca(x) {
	limpar();
	document.getElementById('err').className = "invisivel";
	document.getElementById('cor').className = "invisivel";
	document.getElementById('exi').className = "invisivel";
	document.getElementById('l1').className = "invisivel";
	document.getElementById('l2').className = "invisivel";
	if (x == "v1") {
		document.getElementById('dcadastro').className = "invisivel";
		document.getElementById('dmenu').className = "visivel";
	}
	if (x == "v2") {
		document.getElementById('dlogin').className = "invisivel";
		document.getElementById('dmenu').className = "visivel";
	}
	if (x == "p1") {
		document.getElementById('dmenu').className = "invisivel";
		document.getElementById('dcadastro').className = "visivel";
		document.getElementById("lCad").className = "s visivel";
		document.getElementById("lEd").className = "s invisivel";
		document.getElementById("bCad").className = "visivel";
		document.getElementById("bEd").className = "invisivel";
	}
	if (x == "p2") {
		document.getElementById('dmenu').className = "invisivel";
		document.getElementById('dlogin').className = "visivel";
	}
	if (x == 'n1') {
		document.getElementById('emp').className = "invisivel";
		document.getElementById('dcri').className = "visivel";
	}
	if (x == 'n2') {
		document.getElementById('emp').className = "invisivel";
		document.getElementById('dido').className = "visivel";
	}
	if (x == "n3") {
		document.getElementById('emp').className = "invisivel";
		document.getElementById('dma').className = "visivel";
	}
	if (x == 'vo1') {
		document.getElementById('emp').className = "visivel";
		document.getElementById('dcri').className = "invisivel";
	}
	if (x == 'vo2') {
		document.getElementById('emp').className = "visivel";
		document.getElementById('dido').className = "invisivel";
	}
	if (x == 'vo3') {
		document.getElementById('emp').className = "visivel";
		document.getElementById('dma').className = "invisivel";
	}
	if (x == 'vx') {
		document.getElementById('emp').className = "visivel";
		document.getElementById('dperfil').className = "invisivel";
	}
	if (x == 'ed') {//editar usuário;
		document.getElementById("dperfil").className = "invisivel";//"modificando" a div de cadastro;
		document.getElementById("dcadastro").className = "visivel";
		document.getElementById("lCad").className = "s invisivel";
		document.getElementById("lEd").className = "s visivel";
		document.getElementById("bCad").className = "invisivel";
		document.getElementById("bEd").className = "visivel";
		nome.value = dados[veri].nome;
		sobrenome.value = dados[veri].sobrenome;
		telefone.value = dados[veri].telefone;
		cidade.value = dados[veri].cidade;
		idade.value = dados[veri].idade;
		email.value = dados[veri].e_mail;
		cpf.value = dados[veri].cpf;
	}
	if (x == 'b') {
		document.getElementById("dperfil").className = "invisivel";
		document.getElementById("menuBusca").className = "visivel";
	}
	if (x == 'vmenu') {
		document.getElementById('menuBusca').className = "invisivel";
		document.getElementById('dperfil').className = "visivel";
	}
	if(x == "vxB"){
		document.getElementById('dbusca').className="invisivel";
		document.getElementById('menuBusca').className="visivel";
	}
}
function troca1() {
	document.getElementById('b1').className = "invisivel";
	document.getElementById('mostrar').className = "invisivel";
	document.getElementById('emp').className = "visivel";
}
function retornoP(x) {
	for (var i = 0; i < dados.length; i++) {
		if (dados[i].cpf == x) {
			return i;
		}
	}
}
function perfilU() {
	var somaDi = 0;
	somaDi = +dados[veri].dinheiroad + dados[veri].dinheiroid + dados[veri].dinheirost;
	if (somaDi >= 50) {
		document.getElementById('selo').className = "visivel";
	}
	var p = document.getElementById('dadosP');
	var d = document.getElementById('dadosD');
	document.getElementById('dperfil').className = "visivel";
	document.getElementById('emp').className = "invisivel";
	document.getElementById('dcri').className = "invisivel";
	document.getElementById('dido').className = "invisivel";
	document.getElementById('dma').className = "invisivel";
	document.getElementById('mostrar').className = "invisivel";
	document.getElementById("dcadastro").className = "invisivel";
	document.getElementById("menuBusca").className = "invisivel";
	document.getElementById("dbusca").className = "invisivel";
	p.innerHTML = "";
	p.innerHTML += "<div id='start'> Conta:</div> <div id='end'> " + dados[veri].conta + "</div><br>";
	p.innerHTML += "<div id='start'>Nome:</div> <div id='end'> " + dados[veri].nome + "</div><br>";
	p.innerHTML += "<div id='start'>Telefone:</div> <div id='end'> " + dados[veri].telefone + "</div><br>";
	p.innerHTML += "<div id='start'>Cidade:</div> <div id='end'> " + dados[veri].cidade + "</div><br>";
	p.innerHTML += "<div id='start'>Idade:</div> <div id='end'> " + dados[veri].idade + "</div><br>";
	p.innerHTML += "<div id='start'>E-mail:</div> <div id='end'> " + dados[veri].e_mail + "</div><br>";
	p.innerHTML += "<div id='start'>CPF:</div> <div id='end'> " + dados[veri].cpf + "</div><br>";
	p.innerHTML += "<div id='start'>Gênero:</div> <div id='end'> " + dados[veri].genero + "</div><br>";
	p.innerHTML += "<p></p>"
	d.innerHTML = "";

	d.innerHTML += "<h3>Santa Rita:</h3>"
	d.innerHTML += "Leite: " + dados[veri].leite + " litros || ";
	d.innerHTML += "Brinquedos: " + dados[veri].brinquedos + " peças || ";
	d.innerHTML += "Alimentos não perecíveis: " + dados[veri].anp + " Kg || ";
	d.innerHTML += "Roupas: " + dados[veri].roupas + " peças ||";
	d.innerHTML += "Dinheiro: " + dados[veri].dinheirost + " R$";

	d.innerHTML += "<h3>Lar dos Idosos:</h3>"
	d.innerHTML += "Fraudas: " + dados[veri].fraudas + " peças || ";
	d.innerHTML += "Produtos de limpeza: " + dados[veri].pdl + " peças || ";
	d.innerHTML += "Medicamentos: " + dados[veri].medicamentos + " caixas || ";
	d.innerHTML += "Alimentos não perecíveis: " + dados[veri].anpid + " Kg || ";
	d.innerHTML += "Dinheiro: " + dados[veri].dinheiroid + " R$";

	d.innerHTML += "<h3>Instituto do Meio Ambiente:</h3>"
	d.innerHTML += "Latinhas: " + dados[veri].latinha + " Kg || ";
	d.innerHTML += "Plástico: " + dados[veri].plastico + " Kg || ";
	d.innerHTML += "Papelão: " + dados[veri].papelao + " Kg || ";
	d.innerHTML += "Utensílios Tecnológicos: " + dados[veri].ut + " peças || ";
	d.innerHTML += "Dinheiro: " + dados[veri].dinheiroad + " R$";
}
function remover() {
	var conf = confirm("Deseja mesmo excluir sua conta?")
	if (conf) {
		var conf = confirm("Mesmo????");
		if (conf) {
			dados.splice(veri, 1);
			localStorage.setItem('user', JSON.stringify(dados));
			dados = JSON.parse(localStorage.getItem("user"));
			document.getElementById('dperfil').className = "invisivel";
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
}
function buscar() {
	var position = retornoP(buscaCPF.value);
	if (position == undefined) {
		document.getElementById('bE').className="visivel";
		setTimeout(function () { document.getElementById('bE').className = "invisivel"; }, 3000);
	} else {
		document.getElementById('bE').className="invisivel";
		document.getElementById("menuBusca").className = "invisivel";
		document.getElementById("dbusca").className = "visivel";

		var somaDi = 0;
		somaDi = +dados[position].dinheiroad + dados[position].dinheiroid + dados[position].dinheirost;
		if (somaDi >= 50) {
			document.getElementById('seloB').className = "visivel";
		}
		var p = document.getElementById('dadosPb');
		var d = document.getElementById('dadosDb');
		p.innerHTML = "";
		p.innerHTML += "<div id='start'> Conta:</div> <div id='end'> " + dados[position].conta + "</div><br>";
		p.innerHTML += "<div id='start'>Nome:</div> <div id='end'> " + dados[position].nome + "</div><br>";
		p.innerHTML += "<div id='start'>Telefone:</div> <div id='end'> " + dados[position].telefone + "</div><br>";
		p.innerHTML += "<div id='start'>Cidade:</div> <div id='end'> " + dados[position].cidade + "</div><br>";
		p.innerHTML += "<div id='start'>Idade:</div> <div id='end'> " + dados[position].idade + "</div><br>";
		p.innerHTML += "<div id='start'>E-mail:</div> <div id='end'> " + dados[position].e_mail + "</div><br>";
		p.innerHTML += "<div id='start'>CPF:</div> <div id='end'> " + dados[position].cpf + "</div><br>";
		p.innerHTML += "<div id='start'>Gênero:</div> <div id='end'> " + dados[position].genero + "</div><br>";
		p.innerHTML += "<p></p>"
		d.innerHTML = "";

		d.innerHTML += "<h3>Santa Rita:</h3>"
		d.innerHTML += "Leite: " + dados[position].leite + " litros || ";
		d.innerHTML += "Brinquedos: " + dados[position].brinquedos + " peças || ";
		d.innerHTML += "Alimentos não perecíveis: " + dados[position].anp + " Kg || ";
		d.innerHTML += "Roupas: " + dados[position].roupas + " peças ||";
		d.innerHTML += "Dinheiro: " + dados[position].dinheirost + " R$";

		d.innerHTML += "<h3>Lar dos Idosos:</h3>"
		d.innerHTML += "Fraudas: " + dados[position].fraudas + " peças || ";
		d.innerHTML += "Produtos de limpeza: " + dados[position].pdl + " peças || ";
		d.innerHTML += "Medicamentos: " + dados[position].medicamentos + " caixas || ";
		d.innerHTML += "Alimentos não perecíveis: " + dados[position].anpid + " Kg || ";
		d.innerHTML += "Dinheiro: " + dados[position].dinheiroid + " R$";

		d.innerHTML += "<h3>Instituto do Meio Ambiente:</h3>"
		d.innerHTML += "Latinhas: " + dados[position].latinha + " Kg || ";
		d.innerHTML += "Plástico: " + dados[position].plastico + " Kg || ";
		d.innerHTML += "Papelão: " + dados[position].papelao + " Kg || ";
		d.innerHTML += "Utensílios Tecnológicos: " + dados[position].ut + " peças || ";
		d.innerHTML += "Dinheiro: " + dados[position].dinheiroad + " R$";
	}
}