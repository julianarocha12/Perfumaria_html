<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<link rel="stylesheet" type="text/css" href="adm.css">
		<script language='javascript' src='../biblio.js'></script>
		<script language='javascript' src='biblioAdm.js'></script>
	</head>
	<body>
<?php
session_start();
if(isset($_SESSION['usuario'])){
	include "admin.php";
}
else{
	include "login.php";
}
?>
	</body>
</html>