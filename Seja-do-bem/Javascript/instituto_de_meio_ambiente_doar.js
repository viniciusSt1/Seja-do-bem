class Meio_Ambiente 
{
	salvar() 
	{
		if (parseInt(latinha.value) == null || latinha.value == "")
		{
			dados[veri].latinha+= 0;
		}
		else
		{
			dados[veri].latinha+=parseInt(latinha.value);
		}
		if (parseInt(plastico.value) == null || plastico.value == "") 
		{
			dados[veri].plastico+= 0;
		}
		else
		{
			dados[veri].plastico+=parseInt(plastico.value);
		}
		if (parseInt(papelao.value) == null || papelao.value == "") 
		{
			dados[veri].papelao+= 0;
		}
		else
		{
			dados[veri].papelao+= parseInt(papelao.value);
		}
		if (parseInt(ut.value) == null || ut.value == "") 
		{
			dados[veri].ut+= 0;
		}
		else
		{
			dados[veri].ut+=parseInt(ut.value);
		}
		if (parseInt(dinheiro_meio_ambiente.value) == null || dinheiro_meio_ambiente.value == "") 
		{
			dados[veri].dinheiroad+= 0;
		}
		else
		{
			dados[veri].dinheiroad+= parseInt(dinheiro_meio_ambiente.value);
		}
		localStorage.setItem('user',JSON.stringify(dados));
	}
}
function doar_instituto_de_meio_ambiente() 
{
	var doar = new Meio_Ambiente();
	doar.salvar();
	meio_ambiente = 1;
	mostrar_doadores();
	limpar();
}