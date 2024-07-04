<form name='frmIncPedido' id='frmIncPedido'  method='POST' action="javascript:gravaPedido();" onSubmit="return validaPedido();" >
	<fieldset><legend>Pedido</legend>
	E-mail para Retorno:<input type='text' name='txtEmail' id='txtEmail' size='10'><br>
	Pedido<br>
	<textarea name='txtPedido' id='txtPedido' cols='90' rows='15' >Gostaria de fazer um pedido dos seguintes itens:
-1 Versace Bright Crystal Absolu Eau de Parfum Feminino – 90ml R$569,00
-1 Giorgio Armani Code Masculino Eau de Toilette – 125ml R$498,00
Atenciosamente,
Nome Cliente
Endereço Cliente</textarea>
	<fieldset>
		<input type='submit' name='grv' id='grv' value='enviar'><input type='reset' name='lmp' id='lmp' value='limpar'>
	</fieldset>
	</fieldset>	
</form>
