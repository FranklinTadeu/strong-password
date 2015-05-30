function Verifica(valor) {

	
	var senha = document.getElementById('senha').value; //pega valor do input senha
	var i=0;
	var minusculo = 97;   
	var maiusculo = 65;
	var numero = 0;
	var QtdNum =0;
	var QtdMinu=0;
	var QtdMaiu=0;
	var QtdEspecial = 0;
	var Aceitavel = 0;
	var tamanho = senha.length; //pega tamanho senha
	
	
	//verifica se o tamanho da palavra digita é maior q 8
	
	/*if (tamanho>=8)
	{
		Aceitavel +=1;
	}
	*/
	
	for (i; i<tamanho; i++)
	{
			
		//verifica se tem minusculo
		for (minusculo=97; minusculo<=122; minusculo++)
		{
			if(senha[i] == String.fromCharCode(minusculo))
			{
				QtdMinu += 1;
				nEspecial = 1;	//valida para contar simbolos / so acrescenta 1 quando não é simbplpo	
			}
		}
		
		//verifica se tem maiusculo
		for (maiusculo=65; maiusculo<=90; maiusculo++)
		{
			if(senha[i] == String.fromCharCode(maiusculo))
			{
				QtdMaiu += 1;	
				nEspecial = 1;		
			}
		}
		
		//verifica se tem numero
		for (numero=0; numero<=9; numero++)
		{
			if(senha[i] == numero)
			{
				QtdNum += 1;	
				nEspecial = 1;		
			}
		}
		
		//se tem caracteres especiais
		if (nEspecial != 1)
		{
			QtdEspecial += 1;		
		}
	
		nEspecial = 0;
		
	}
/*---------------------------------------------------------------------------------------------------------------------------------------*/
		//verifica criterios aprovados
		if (QtdMinu>0)
		{
			Aceitavel +=1;
		}
		
		if (QtdMaiu>0)
		{
			Aceitavel +=1;
		}
		
		if (QtdEspecial>0)
		{
			Aceitavel +=1;
		}
		
		if (QtdNum>0)
		{
			Aceitavel +=1;
		}
			
		if (Aceitavel >=3)
		{
			if (tamanho>7)
			{
			alert("Senha aceitavel \nObrigado")
			document.getElementById("aceitavel").checked=true; //alterar checkbox aceitavel para verdadeiro se tiver mais de 4 criterios aprovados
			}
		}
		else
		{
			document.getElementById("aceitavel").checked=false; //muda pra falso
		}
		
				
		if (Aceitavel>=3) // Mostra a senha digita de muda a cor de acordo com o crit�rio
		{
			document.getElementById("sobreSenha").innerHTML = "<font color='green'>Senha digitada: " +senha+ "</font><br>";
		}
		else
		{
			document.getElementById("sobreSenha").innerHTML = "<font color='red'>Senha digitada: " +senha+ "</font><br>";
		}
	
		
		if (tamanho>7)
		{
			document.getElementById("sobreSenha").innerHTML += "<font color='green'>Quantidade de caracteres total: " +tamanho+ ". </font><br/>";
		}
		else 
		{
			document.getElementById("sobreSenha").innerHTML += "<font color='red'>Quantidade de caracteres total: " +tamanho+ ". </font><br/>";
		}
		
		if (QtdMinu>0)
		{
			document.getElementById("sobreSenha").innerHTML += "<font color='green'>Quantidade de caracteres min&uacutesculos " +QtdMinu+ " .</font><br/>";
		}
		else
		{
			document.getElementById("sobreSenha").innerHTML += "<font color='red'>Quantidade de caracteres min&uacutesculos " +QtdMinu+ " .</font><br/>";
		}
		
		if (QtdMaiu>0)
		{
		document.getElementById("sobreSenha").innerHTML += "<font color='green'>Quantidade de caracteres mai&uacutesculos: " +QtdMaiu+ " .<br/>";
		}
		else
		{
			document.getElementById("sobreSenha").innerHTML += "<font color='red'>Quantidade de caracteres mai&uacutesculos: " +QtdMaiu+ " .<br/>";
		}
		
		if (QtdEspecial>0)
		{
		document.getElementById("sobreSenha").innerHTML += "<font color='green'>Quantidade de s&iacutembolos: " +QtdEspecial+ " .</font><br>";
		}
		else {
			document.getElementById("sobreSenha").innerHTML += "<font color='red'>Quantidade de s&iacutembolos: " +QtdEspecial+ " .</font><br>";
		}
		
		if (QtdNum>0)
		{
		document.getElementById("sobreSenha").innerHTML += "<font color='green'>Quantidade de n&uacutemeros: " +QtdNum+ " .</font><br>"
		}
		else
		{
			document.getElementById("sobreSenha").innerHTML += "<font color='red'>Quantidade de n&uacutemeros: " +QtdNum+ " .</font><br>"
		}
						
		if (Aceitavel>=3)
		{
		document.getElementById("sobreSenha").innerHTML += "<font color='green'>Quantidade de crit&eacuterios aprovados:"+Aceitavel+" em 4</font>";
		}
		else
		{
			document.getElementById("sobreSenha").innerHTML += "<font color='red'>Quantidade de crit&eacuterios aprovados:"+Aceitavel+" em 4</font>";
		}
}