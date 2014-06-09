	$(document).ready( function(){
	//$("#form_izq").hide();
	//$("#form_der").hide();
	//var form = $('#frmSesion');
	//var btnSesion = $('#btnSesion');
	
	//btnSesion.click(function(){
		
		//enviarDatos(form);
		
	//});
	
	$('#frmSesion').submit(function(e){
		var bool = false;
		console.log('Prueb de debug');
		var ArrayForm = $(this).serialize();
		$.ajax({
			url: "consulta_sesion.php",
			type: "POST",
			data: ArrayForm,
			success: function(datos){
				console.log(datos);
				if(datos=="U"){
					bool = true;
					console.log('Usuario');
					window.location = "usuario/terminado-form.html";
					}
				else
				if(datos=="A"){
					console.log('Administrador');
					bool = true;
					window.location = "administrador/terminado-form.html";	
					}
				else{
					alert("Usuario o password incorrecto");
					}
			},
			error: function(){ 
				bool = false;
				alert('Error'); }
			});
			
		return bool;
			
	});
	
});


function enviarDatos(form){
	var bool = false;
	console.log('Prueb de debug');
	var ArrayForm = form.serialize();
	$.ajax({
		url: "consulta_sesion.php",
		type: "POST",
		data: ArrayForm,
		success: function(datos){
				if(datos=="U"){
					console.log('Usuario');
					window.location = "grid.html";
					}
				else
				if(datos=="A"){
					console.log('Administrador');
					bool = true;
					}
				else{
					alert("Usuario o password incorrecto");
					}
					
		},
		error: function(){ alert('Error'); }
		});
		
	return bool;
}