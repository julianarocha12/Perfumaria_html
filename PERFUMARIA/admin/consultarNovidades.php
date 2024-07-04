<?php
if($titulo){	
	$sql = "
		select titulo,conteudo,id from novidades
		where titulo like ('%".$db->real_escape_string($titulo)."%')
	";
	if($result=$db->query($sql)){
        $res=[];
		while($linha=$result->fetch_array()){$res[]=$linha;}
        if(count($res)==0){
            echo "Consulta não retornou resultado!";
        }else{

		echo "<table><tr><th>id</th><th>titulo</th></tr><tr><th colspan='2'>conteudo</th></tr>";
		foreach($res as $memo){
			echo "<tr>
					<td>{$memo[2]}</td>
					<td>{$memo[0]}</td>
				</tr>
				<tr>
					<td colspan='2'><pre>{$memo[1]}</pre></td>
				</tr>
				<tr>
					<td colspan='2'><a href='javascript:excluirNovidades({$memo[2]})'>Excluir</a> - <a href='javascript:carregarNovidade({$memo[2]})'>Alterar</a></td>
				</tr>
	  ";
		}
		echo "</table>";

        }
	}
	else{
		echo "Erro na consulta";
	}
}
?>