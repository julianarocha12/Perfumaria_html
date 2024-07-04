<?php
if(isset($id)){
$sql = "
		select titulo,conteudo,id from novidades
		where id = $id
	";
	if($result=$db->query($sql)){
		$pedido=$result->fetch_array()
	?>
	
<form name='frmAltNovidade' id='frmAltNovidade'  method='POST' action="javascript:alterarNovidade(<?php echo $pedido[2] ?>);" onSubmit="return validaPedido();" >
<fieldset><legend>Novidades</legend>
	Titulo:<input type='text' name='txtTitulo' id='txtTitulo' size='10' value='<?php echo $pedido[0] ?>'><br>
	Conteudo:<br>
	<textarea name='txtConteudo' id='txtConteudo' cols='50' rows='15' ><?php echo $pedido[1] ?></textarea>
		<fieldset>
			<input type='submit' name='grv' id='grv' value='enviar'><input type='reset' name='lmp' id='lmp' value='limpar'>
		</fieldset>
	</fieldset>	
</form>
	<?php
	}
}
?>