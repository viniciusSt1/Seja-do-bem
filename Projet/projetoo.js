function troca(x) {
	limpar();
	document.getElementById('err').className = "invisivel";
	document.getElementById('cor').className = "invisivel";
	document.getElementById('exi').className = "invisivel";
	if (x == "v1") {
		document.getElementById('cadastro').className = "invisivel";
		document.getElementById('menu').className = "visivel";
	}
	if (x == "v2") {
		document.getElementById('login').className = "invisivel";
		document.getElementById('menu').className = "visivel";
	}
	if (x == "p1") {
		document.getElementById('menu').className = "invisivel";
		document.getElementById('cadastro').className = "visivel";
	}
	if (x == "p2") {
		document.getElementById('menu').className = "invisivel";
		document.getElementById('login').className = "visivel";
	}
	if (x == 'n1') {
		document.getElementById('emp').className = "invisivel";
		document.getElementById('cri').className = "visivel";
	}
	if (x == 'n2') {
		document.getElementById('emp').className = "invisivel";
		document.getElementById('ido').className = "visivel";
	}
	if (x == "n3") {
		document.getElementById('emp').className = "invisivel";
		document.getElementById('ma').className = "visivel";
	}
	if (x == 'vo1') {
		document.getElementById('emp').className = "visivel";
		document.getElementById('cri').className = "invisivel";
	}
	if (x == 'vo2') {
		document.getElementById('emp').className = "visivel";
		document.getElementById('ido').className = "invisivel";
	}
	if (x == 'vo3') {
		document.getElementById('emp').className = "visivel";
		document.getElementById('ma').className = "invisivel";
	}

}
function troca1() {
	document.getElementById('mostrar').className = "invisivel";
	document.getElementById('emp').className = "visivel";
}