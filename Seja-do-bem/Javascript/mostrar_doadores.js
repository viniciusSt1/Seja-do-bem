var mt;
class Doacoes
{
	constructor()
	{
		this.somaleite;
		this.somabrinquedos;
		this.somaanp;
		this.somaroupa;
		this.somadinheiost;
		this.somafraudas;
		this.somapdl;
		this.somamedi;
		this.somaanpid;
		this.somadinheioid;
		this.somalatinha;
		this.somaplast;
		this.somaut;
		this.somapapel;
		this.somadinheioad;
	}
	bd()
	{
		this.somaleite=0;
		this.somabrinquedos=0;
		this.somaanp=0;
		this.somaroupa=0;
		this.somadinheirost=0;
		this.somafraudas=0;
		this.somapdl=0;
		this.somamedi=0;
		this.somaanpid=0;
		this.somadinheiroid=0;
		this.somalatinha=0;
		this.somaplast=0;
		this.somaut=0;
		this.somapapel=0;
		this.somadinheiroad=0;
	}
	salvar()
	{
		mt= JSON.parse(localStorage.getItem('doacoes'));
		if (parseInt(frauda.value) == null || frauda.value == "") 
		{
			mt.somafraudas+= 0;
		}
		else
		{
			mt.somafraudas+=parseInt(frauda.value);
		} 
		if (parseInt(pdl.value) == null || pdl.value == "") 
		{
			mt.somapdl+= 0;
		}
		else
		{
			mt.somapdl+=parseInt(pdl.value);
		}
		if (parseInt(medicamentos.value) == null || medicamentos.value == "") 
		{
			mt.somamedi+= 0;
		}
		else
		{
			mt.somamedi+= parseInt(medicamentos.value);
		}
		if (parseInt(anp.value) == null || anp.value == "") 
		{
			mt.somaanpid += 0;
		}
		else
		{
			mt.somaanpid+= parseInt(anp.value);
		}
		if (parseInt(dinheiro_idosos.value) == null || dinheiro_idosos.value == "") 
		{
			mt.somadinheiroid+= 0;
		}
		else
		{
			mt.somadinheiroid+=parseInt(dinheiro_idosos.value);
		}
		if (parseInt(leite.value) == null || leite.value == "") 
		{
			mt.somaleite += 0;
		}
		else
		{
			mt.somaleite+= parseInt(leite.value);
		}
		if (parseInt(brinquedos.value) == null || brinquedos.value == "")
		{
			mt.somabrinquedos += 0;
		}
		else
		{
			mt.somabrinquedos+= parseInt(brinquedos.value);
		}
		if (parseInt(alimentos.value) == null || alimentos.value == "") 
		{
			mt.somaanp += 0;
		}
		else
		{
			mt.somaanp+= parseInt(alimentos.value);
		}
		if (parseInt(roupa.value) == null || roupa.value == "") 
		{
			mt.somaroupa+= 0;
		}
		else
		{
			mt.somaroupa+= parseInt(roupa.value);
		}
		if (parseInt(dinheiro.value) == null || dinheiro.value == "") 
		{
			mt.somadinheirost += 0;
		}
		else
		{
			mt.somadinheirost+= parseInt(dinheiro.value);
		}
		if (parseInt(latinha.value) == null || latinha.value == "")
		{
			mt.somalatinha+= 0;
		}
		else
		{
			mt.somalatinha+=parseInt(latinha.value);
		}
		if (parseInt(plastico.value) == null || plastico.value == "") 
		{
			mt.somaplast+= 0;
		}
		else
		{
			mt.somaplast+=parseInt(plastico.value);
		}
		if (parseInt(papelao.value) == null || papelao.value == "") 
		{
			mt.somapapel+= 0;
		}
		else
		{
			mt.somapapel+= parseInt(papelao.value);
		}
		if (parseInt(ut.value) == null || ut.value == "") 
		{
			mt.somaut+= 0;
		}
		else
		{
			mt.somaut+=parseInt(ut.value);
		}
		if (parseInt(dinheiro_meio_ambiente.value) == null || dinheiro_meio_ambiente.value == "") 
		{
			mt.somadinheiroad+= 0;
		}
		else
		{
			mt.somadinheiroad+= parseInt(dinheiro_meio_ambiente.value);
		}
		localStorage.setItem('doacoes',JSON.stringify(mt));
	}
}

function mostrar_doadores() 
{	
	var doar_todos= new Doacoes();
	doar_todos.bd();	
	if(localStorage.getItem("doacoes")==undefined)
	{
		localStorage.setItem('doacoes',JSON.stringify(doar_todos));
    }  
	doar_todos.salvar();
}
function vis()
{
	mt= JSON.parse(localStorage.getItem('doacoes'));
	if(mt==undefined){
		var zera=new Doacoes();
		zera.bd();
		localStorage.setItem('doacoes',JSON.stringify(zera));
		mt= JSON.parse(localStorage.getItem('doacoes'));
	}
	document.getElementById('emp').className = "invisivel";
	document.getElementById('mostrar').className = "visivel";
	document.getElementById('b1').className = "visivel";
	document.getElementById("leitem").innerHTML=" "+mt.somaleite+" ";
	document.getElementById("brinquedosm").innerHTML=" "+mt.somabrinquedos+" ";
	document.getElementById("alimentostm").innerHTML=" "+mt.somaanp+" ";
	document.getElementById("roupam").innerHTML=" "+mt.somaroupa+" ";
	document.getElementById("dinheirost").innerHTML=" "+mt.somadinheirost+" ";
	document.getElementById("fraudasm").innerHTML=" "+mt.somafraudas+" ";
	document.getElementById("produtosm").innerHTML=" "+mt.somapdl+" ";
	document.getElementById("medicamentom").innerHTML=" "+mt.somamedi+" ";
	document.getElementById("alimentom").innerHTML=" "+mt.somaanpid+" ";
	document.getElementById("dinheiroLi").innerHTML=" "+mt.somadinheiroid+" ";
	document.getElementById("latinham").innerHTML=" "+mt.somalatinha+" ";
	document.getElementById("plasticom").innerHTML=" "+mt.somaplast+" ";
	document.getElementById("papelaom").innerHTML=" "+mt.somapapel+" ";
	document.getElementById("utm").innerHTML=mt.somaut;
	document.getElementById("dinheiroIm").innerHTML=mt.somadinheiroad;
}