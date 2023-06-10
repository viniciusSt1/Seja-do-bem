class Santa_Rita {
	salvar() 
	{
		if (parseInt(leite.value) == null || leite.value == "") 
		{
			dados[veri].leite += 0;
		}
		else
		{
			dados[veri].leite+= parseInt(leite.value);
		}
		if (parseInt(brinquedos.value) == null || brinquedos.value == "")
		{
			dados[veri].brinquedos += 0;
		}
		else
		{
			dados[veri].brinquedos+= parseInt(brinquedos.value);
		}
		if (parseInt(alimentos.value) == null || alimentos.value == "") 
		{
			dados[veri].anp += 0;
		}
		else
		{
			dados[veri].anp+= parseInt(alimentos.value);
		}
		if (parseInt(roupa.value) == null || roupa.value == "") 
		{
			dados[veri].roupas += 0;
		}
		else
		{
			dados[veri].roupas+= parseInt(roupa.value);
		}
		if (parseInt(dinheiro.value) == null || dinheiro.value == "") 
		{
			dados[veri].dinheirost += 0;
		}
		else
		{
			dados[veri].dinheirost+= parseInt(dinheiro.value);
		}
		localStorage.setItem('user',JSON.stringify(dados));
	}
}
function doar_santa_rita() 
{
	var doar = new Santa_Rita();
	doar.salvar();
	santa_rita = 1;
	mostrar_doadores();
	limpar();
}