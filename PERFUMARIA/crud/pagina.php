<?php
extract($_POST,EXTR_OVERWRITE);
if(!isset($item)){$item='';}
$db = new mysqli('127.0.0.1','user_teste','teste','meudb');
if (mysqli_connect_error()) {
	die('Erro de conexão (' . $db->connect_errno . ') '. $db->connect_error);
}
switch($item){
	case 'inclusao':
		include 'frmIncluiMemiorando.php';
	break;
	case 'incluirMemiorando':
		include 'incluirMemiorando.php';
	break;
	case 'consulta':
		include 'frmConsultaMemiorando.php';
	break;
	case 'consultaMemiorando':
		include 'consultaMemiorando.php';
	break;
    case 'excluirMemiorando':
		include 'excluirMemiorando.php';
	break;
    case 'alterar':
		include 'frmAlterarMemiorando.php';
	break;
    case 'alterarMemiorando':
		include 'alterarMemiorando.php';
	break;
	default:
		include "frmConsultaMemiorando.php";
	break;
}
?>