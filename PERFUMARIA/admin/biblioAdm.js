function validaLogin(){
	var objUsuario=document.getElementById('usuario');
	var objSenha=document.getElementById('senha');
	var msg ='';
	
	if(objUsuario.value==''){
		msg+="Informe o usuário\n";
	}
	if(objSenha.value==''){
		msg+="Informa senha\n";
	}
	if(msg!=''){
		alert(msg);
		return false;
	}
	else{
		return true;
	}
}

function autenticar(){
	var ajax=new XMLHttpRequest();
	var objUsuario=document.getElementById('usuario');
	var objSenha=document.getElementById('senha');
	var params="item=autenticar&usuario="+objUsuario.value+"&senha="+objSenha.value;
	ajax.open("POST","pagina.php",true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.onreadystatechange=function(){
		if (ajax.readyState==4 && ajax.status==200){
			if(ajax.responseText!='ok'){
				alert(ajax.responseText);
			}
			else{				
				document.location.href='';
				
			}
		}
	}
	ajax.send(params);
}

function sair(){
	var ajax=new XMLHttpRequest();
	var params="item=sair";
	ajax.open("POST","pagina.php",true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.onreadystatechange=function(){
		if (ajax.readyState==4 && ajax.status==200){
						
				document.location.href='';
			
		}
	}
	ajax.send(params);
}

function consultarPedidos(){	
	var ajax=new XMLHttpRequest();	
	var objEmail=document.getElementById('email');	
	var objResultado = document.getElementById('resultadoConsulta');
	var params="item=consultarPedidos&email="+objEmail.value;
	ajax.open("POST","pagina.php",true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.onreadystatechange=function(){
		if (ajax.readyState==4 && ajax.status==200){
			if(ajax.responseText!=''){
				objResultado.innerHTML=ajax.responseText;
			}
		}
	}
	ajax.send(params);
}

function validaPedido(){
	var objTitulo=document.getElementById('txtTitulo');
	var objConteudo=document.getElementById('txtConteudo');
	var msg ='';
	
	if(objTitulo.value==''){
		msg+="Por favor preecha o titulo!\n";
		msg+="Por favor preencha o conteudo!\n";
	}
	if(objConteudo.value==''){
		msg+="Por favor preencha o conteudo\n";
	}
	if(msg!=''){
		alert(msg);
		return false;
	}
	else{
		return true;
	}
}

function gravaPedido(){
	var ajax=new XMLHttpRequest();
	var objTitulo=document.getElementById('txtTitulo');
	var objConteudo=document.getElementById('txtConteudo');
	var params="item=incluiNovidades&titulo="+objTitulo.value+"&conteudo="+objConteudo.value;
	ajax.open("POST","pagina.php",true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.onreadystatechange=function(){
		if (ajax.readyState==4 && ajax.status==200){
			if(ajax.responseText!='ok'){
				alert(ajax.responseText);
			}
			else{
				alert('Pedido Gravado Com Sucesso');
				document.getElementById('frmIncluiNovidades').reset();
				
			}
		}
	}
	ajax.send(params);
}



function excluirPedido(id){	
	if(confirm('Deseja mesmo excluir o pedido id = '+id+' ?')){
		var ajax=new XMLHttpRequest();			
		var params="item=excluirPedido&id="+id;
		ajax.open("POST","pagina.php",true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		ajax.onreadystatechange=function(){
			if (ajax.readyState==4 && ajax.status==200){
				if(ajax.responseText!='ok'){
					alert(ajax.responseText);
				}
				else{
					alert('Pedido excluído com sucesso');
					document.getElementById('frmConsultaPedidos').submit();
				}
			}			
		}
		ajax.send(params);
	}
}

function carregarPedido(id){
	var ajax=new XMLHttpRequest();	
	var objConteudo=document.getElementById('divConteudo');
	var params="item=carregarPedido&id="+id;
	ajax.open("POST","pagina.php",true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.onreadystatechange=function(){
		if (ajax.readyState==4 && ajax.status==200){
				objConteudo.innerHTML=ajax.responseText;					
		}
	}
	ajax.send(params);
}

function alterarPedido(id){	
	var ajax=new XMLHttpRequest();
	var objEmail=document.getElementById('txtEmail');
	var objPedido=document.getElementById('txtPedido');
	var params="item=alterarPedido&id="+id+"&email="+objEmail.value+"&pedido="+objPedido.value;
	ajax.open("POST","pagina.php",true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.onreadystatechange=function(){
		if (ajax.readyState==4 && ajax.status==200){
			if(ajax.responseText!='ok'){
				alert(ajax.responseText);
			}
			else{
				alert('Pedido Gravado Com Sucesso');
				abre('frmConsultaPedidos','divConteudo');
			}
		}
	}
	ajax.send(params);
}
function consultarNovidades(){	
	var ajax=new XMLHttpRequest();	
	var objTitulo=document.getElementById('titulo');	
	var objResultado = document.getElementById('resultadoNovidades');
	var params="item=consultarNovidades&titulo="+objTitulo.value;
	ajax.open("POST","pagina.php",true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.onreadystatechange=function(){
		if (ajax.readyState==4 && ajax.status==200){
			if(ajax.responseText!=''){
				objResultado.innerHTML=ajax.responseText;
			}
		}
	}
	ajax.send(params);
}
function excluirNovidades(id){	
	if(confirm('Deseja mesmo excluir a novidade id = '+id+' ?')){
		var ajax=new XMLHttpRequest();			
		var params="item=excluirNovidades&id="+id;
		ajax.open("POST","pagina.php",true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		ajax.onreadystatechange=function(){
			if (ajax.readyState==4 && ajax.status==200){
				if(ajax.responseText!='ok'){
					alert(ajax.responseText);
				}
				else{
					alert('Novidade excluído com sucesso');
					document.getElementById('frmConsultaNovidades').submit();
				}
			}			
		}
		ajax.send(params);
	}
}
function carregarNovidade(id){
	var ajax=new XMLHttpRequest();	
	var objConteudo=document.getElementById('divConteudo');
	var params="item=carregarNovidade&id="+id;
	ajax.open("POST","pagina.php",true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.onreadystatechange=function(){
		if (ajax.readyState==4 && ajax.status==200){
				objConteudo.innerHTML=ajax.responseText;					
		}
	}
	ajax.send(params);
}

function alterarNovidade(id){	
	var ajax=new XMLHttpRequest();
	var objTitulo=document.getElementById('txtTitulo');
	var objConteudo=document.getElementById('txtConteudo');
	var params="item=alterarNovidade&id="+id+"&titulo="+objTitulo.value+"&conteudo="+objConteudo.value;
	ajax.open("POST","pagina.php",true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.onreadystatechange=function(){
		if (ajax.readyState==4 && ajax.status==200){
			if(ajax.responseText!='ok'){
				alert(ajax.responseText);
			}
			else{
				alert('Novidade Gravada Com Sucesso');
				abre('frmConsultaPedidos','divConteudo');
			}
		}
	}
	ajax.send(params);
}
