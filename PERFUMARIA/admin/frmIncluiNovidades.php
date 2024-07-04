<form name='frmIncluiNovidades' id='frmIncluiNovidades'  method='POST' action="javascript:gravaPedido();" onSubmit="return validaPedido();" >
	<fieldset><legend>Novidade</legend>
		Titulo:<input type='text' name='txtTitulo' id='txtTitulo' size='45'><br>
		Conteudo:<br>
		<textarea name='txtConteudo' id='txtConteudo' cols='50' rows='10' >
		</textarea>
	</fieldset>
	<fieldset>
		<input type='submit' name='env' value='enviar'>
		<input type='reset' name='lmp' value='limpar'>
	</fieldset>
</form>
<div id='resultadoNovidades'></div>