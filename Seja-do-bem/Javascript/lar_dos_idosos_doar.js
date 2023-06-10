class Lar_dos_Idosos 
{
	salvar() 
	{
		if (parseInt(frauda.value) == null || frauda.value == "") 
		{
			dados[veri].fraudas+= 0;
		}
		else
		{
			dados[veri].fraudas+=parseInt(frauda.value);
		} 
		if (parseInt(pdl.value) == null || pdl.value == "") 
		{
			dados[veri].pdl+= 0;
		}
		else
		{
			dados[veri].pdl+=parseInt(pdl.value);
		}
		if (parseInt(medicamentos.value) == null || medicamentos.value == "") 
		{
			dados[veri].medicamentos+= 0;
		}
		else
		{
			dados[veri].medicamentos+= parseInt(medicamentos.value);
		}
		if (parseInt(anp.value) == null || anp.value == "") 
		{
			dados[veri].anpid += 0;
		}
		else
		{
			dados[veri].anpid+= parseInt(anp.value);
		}
		if (parseInt(dinheiro_idosos.value) == null || dinheiro_idosos.value == "") 
		{
			dados[veri].dinheiroid+= 0;
		}
		else
		{
			dados[veri].dinheiroid+=parseInt(dinheiro_idosos.value);
		}
		localStorage.setItem('user',JSON.stringify(dados));
	}
}
function doar_lar_dos_idosos() {
	var doar = new Lar_dos_Idosos();
	doar.salvar();
	lar_idosos = 1;
	mostrar_doadores();
	limpar();
}