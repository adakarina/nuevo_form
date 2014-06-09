$(document).ready( function(){
	//$("#form_izq").hide();
	//$("#form_der").hide();
	var form1 = $('#frmDatosPersonales');
	var btnenviarDatosPersonales = $('#btnDatosPersonales');
	
	var form2 = $('#form_der');
	//form2.hide();
	var btnMedica = $('#btnMedica');
	
	var form3 = $('#frm_down');
	//form3.hide();
	var btnEstudios = $('#btnEstudios');
	
	btnenviarDatosPersonales.click(function(){

		enviarDatosPersonales(form1);
		
	});
	
	btnMedica.click(function(){

		enviarDatosPersonales(form2);
		
	});
	
	btnEstudios.click(function(){

		enviarDatosPersonales(form3);
		
	});
	
});

function enviarDatosPersonales(form){

	var ArrayForm = form.serialize();
	$.ajax({
		url: "consultas.php",
		type: "POST",
		data: ArrayForm,
		success: function(datos){
				
				alert(datos);
				
				if(datos==1)
				{
					alert("Registro exitoso");
					$('#form_der').show();
					$('#frm_down').show();
					$('#CEDULAM').val( $('#ci').val() );
					$('#CEDULAE').val( $('#ci').val());
				}
				else
					alert("Problemas con el registro");
					
					
		},
		error: function(){ alert('Error'); }
		});
}
