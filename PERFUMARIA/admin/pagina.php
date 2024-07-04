<?php
session_start();
extract($_POST,EXTR_OVERWRITE);
if(!isset($item)){$item='';}	
if(!isset($_SESSION['usuario']) && $item!='autenticar'){
	echo "<script language='javascript'>document.location.href='';</script>";
}else{
	$db = new mysqli('127.0.0.1','user_teste','teste','meudb');
	if (mysqli_connect_error()) {
		die('Erro de conexão (' . $db->connect_errno . ') '. $db->connect_error);
	}
	switch($item){
		case 'autenticar':
			include "autenticar.php";
		break;	
		case 'sair':
			include "sair.php";
		break;
        case 'frmConsultaPedidos':
			include "frmConsultaPedidos.php";
		break;
		case 'consultarPedidos':
			include "consultarPedidos.php";
		break;
		case 'excluirPedido':
			include "excluirPedido.php";
		break;
		case 'carregarPedido':
			include "carregarPedido.php";
		break;
		case 'alterarPedido':
			include "alterarPedido.php";
		break;
		case 'frmConsultaNovidades':
			include "frmConsultaNovidades.php";
		break;
		case 'frmIncluiNovidades':
			include "frmIncluiNovidades.php";
		break;
		case 'incluiNovidades':
			include "incluiNovidades.php";
		break;
		case 'consultarNovidades':
			include "consultarNovidades.php";
		break;
		case 'excluirNovidades':
			include "excluirPedido.php";
		break;
		case 'carregarNovidade':
			include "carregarNovidade.php";
		break;
		case 'alterarNovidade':
			include "alterarNovidade.php";
		break;
		default:
			
	}
}
?>