var currentdate = new Date();
jQuery(document).ready(function ($) {
	$(document).ready(function() {
		$('.datepicker').pickadate({
		monthsFull: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
		monthsShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'],
		weekdaysFull: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'],
		weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sáb'],
		format: 'yyyy-mm-dd '+currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds() + "." + currentdate.getMilliseconds(),
		today: 'Ahora',
		clear: 'Borrar',
		close: 'Cerrar',
		selectMonths: true, // Creates a dropdown to control month
		selectYears: 15 // Creates a dropdown of 15 years to control year
		});


		$('select').material_select();
	});
});
$('.modal').modal({
		dismissible: true, // Modal can be dismissed by clicking outside of the modal
		opacity: .8, // Opacity of modal background
		in_duration: 300, // Transition in duration
		out_duration: 200, // Transition out duration
		starting_top: '4%', // Starting top style attribute
		ending_top: '10%', // Ending top style attribute
	}
);
$(document).ready(function(){
    $('.carousel').carousel();
});
$(document).ready(function(){
	$('.slider').slider({full_width: true});
});
