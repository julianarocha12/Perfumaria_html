function abre(item,alvo){
	var ajax=new XMLHttpRequest();
	var params="item="+item;
	ajax.open("POST","pagina.php",true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.onreadystatechange=function()
	{
		if (ajax.readyState==4 && ajax.status==200)
		{
			document.getElementById(alvo).innerHTML=ajax.responseText;
		}
	}
	ajax.send(params);
}
function abrePagina(pagina,alvo){
	var ajax=new XMLHttpRequest();
	
	ajax.open("GET",pagina,true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.onreadystatechange=function()
	{
		if (ajax.readyState==4 && ajax.status==200)
		{
			document.getElementById(alvo).innerHTML=ajax.responseText;
		}
	}
	ajax.send();
}

function mudaTitulo(titulo){
	document.getElementById('spanTitulo').innerHTML=":"+titulo;
}
function abreMenu(titulo){			
	mudaTitulo(titulo);
	abre(titulo,'divConteudo');
}

function incluirMemiorando(){	
	var ajax=new XMLHttpRequest();	
	var objNumero=document.getElementById('memoNumero');
	var objCabecalho=document.getElementById('memoCabecalho');
	var objConteudo=document.getElementById('memoConteudo');
	var params="item=incluirMemiorando&numero="+objNumero.value+"&cabecalho="+objCabecalho.value+"&conteudo="+objConteudo.value;
	ajax.open("POST","pagina.php",true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.onreadystatechange=function(){
		if (ajax.readyState==4 && ajax.status==200){
			if(ajax.responseText!='ok'){
				alert(ajax.responseText);
			}
			else{
				alert('Pedido Gravado Com Sucesso');
				document.getElementById('frmInclusao').reset();
				
			}
		}		
	}
	ajax.send(params);
}

function consultaMemiorando(){	
	var ajax=new XMLHttpRequest();	
	var objNumero=document.getElementById('memoNumero');
	var objResultado = document.getElementById('resultadoConsulta');
	var params="item=consultaMemiorando&numero="+objNumero.value;
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

function excluirMemiorando(id){	
	if(confirm('Deseja mesmo excluir o memorando?')){
		var ajax=new XMLHttpRequest();			
		var params="item=excluirMemiorando&id="+id;
		ajax.open("POST","pagina.php",true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		ajax.onreadystatechange=function(){
			if (ajax.readyState==4 && ajax.status==200){
				if(ajax.responseText!='ok'){
					alert(ajax.responseText);
				}
				else{
					alert('Memorando Excluído Com Sucesso');
					consultaMemiorando();
				}
			}			
		}
		ajax.send(params);
	}
}

function carregarMemiorando(id){
    var ajax=new XMLHttpRequest();	
    var objConteudo=document.getElementById('divConteudo');
    var params="item=alterar&id="+id;
    ajax.open("POST","pagina.php",true);
    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ajax.onreadystatechange=function(){
        if (ajax.readyState==4 && ajax.status==200){
                objConteudo.innerHTML=ajax.responseText;
                mudaTitulo('Alteração');
        }
    }
    ajax.send(params);
}

function alterarMemiorando(id){	
	var ajax=new XMLHttpRequest();	
	var objNumero=document.getElementById('memoNumero');
	var objCabecalho=document.getElementById('memoCabecalho');
	var objConteudo=document.getElementById('memoConteudo');	
	var params="item=alterarMemiorando&id="+id+"&numero="+objNumero.value+"&cabecalho="+objCabecalho.value+"&conteudo="+objConteudo.value;
	ajax.open("POST","pagina.php",true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.onreadystatechange=function(){
		if (ajax.readyState==4 && ajax.status==200){
			if(ajax.responseText!='ok'){
				alert(ajax.responseText);
			}
			else{				
				alert('Memorando Alterado Com Sucesso!!');
				abreMenu('consulta');
				
			}
		}
		
	}
	ajax.send(params);
}
