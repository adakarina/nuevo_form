$(document).on('ready', function(){
	$('#formulario-busqueda').submit(function(){
		$.ajax({
			url: './consulta-usuarios.php',
			data: $(this).serialize(),
			type: 'POST',
			format: 'Object',
			success: function(data){
				data = $.parseJSON(data);
				console.log(data);
				$('#nombre').val(data.NOMBRE);
				$('#apellido').val(data.APELLIDO);
				$('#ci').val(data.CI);
				$('#tlf').val(data.TELEFONO);
				$('#tlfemerg').val(data.TELEFONO_EMERGENCIA);
				$('#lugarnnac').val(data.LUGAR_NACIMIENTO);
				$('#email').val(data.EMAIL);
				$('#fb').val(data.FACEBOOK);
				$('#direccion').val(data.DIRECCION);
			},
			error: function(a, b, c){
				console.log("Hubo un error");
			}			
		});
		return false;
	});
});