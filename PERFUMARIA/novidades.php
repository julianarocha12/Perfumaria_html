
<?php
    $sql = "select titulo, conteudo from novidades";
    if($result=$db->query($sql)){
        $res=[];
        while($linha=$result->fetch_array()){$res[]=$linha;}
        if(count($res)==0){
            echo "Consulta não retornou resultado!";
        }else{
        echo "<h1 id='h1Novidades'>NEWS</h1>";
		foreach($res as $memo){
            echo "<div id='novidades'>";
            echo    "<h1>{$memo[0]}</h1>";
            echo    "<p>{$memo[1]}</p>";
            echo    "<hr>";
            echo "</div>";
            echo "<br>";
        }
	}
	}
	else{
		echo "Erro na consulta";
	}
?>

</div>
