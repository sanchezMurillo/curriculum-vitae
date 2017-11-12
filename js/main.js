// Mostrar menu
$('#button-menu').click(function() {
	if ($('#button-menu').attr('class') == 'fa fa-bars'){
		$('#button-menu').removeClass('fa fa-bars').addClass('fa fa-close');
		$('.navegacion .menu').css({'left': '0px'});
		$('.navegacion').css({'width': '100%', 'background': 'rgba(0, 0, 0, .3)'});
	} else {
		$('#button-menu').removeClass('fa fa-close').addClass('fa fa-bars');
		$('.navegacion .menu').css({'left': '-320px'});
		$('.navegacion .submenu').css({'left': '-320px'});
		$('.navegacion').css({'width': '0%', 'background': 'rgba(0, 0, 0, 0)'});
	}
});

// Mostrar submenu
$('.navegacion .menu > .item-submenu a').click(function(){
	var positionMenu = $(this).parent().attr('menu'); // Buscamos el valor del atributo menu y lo guardamos en una variable
	console.log(positionMenu); 
	$('.item-submenu[menu='+positionMenu+'] .submenu').css({'left':'0px'}); // Mostramos El submenu correspondiente
});

// Ocultar submenu
$('.navegacion .submenu li.go-back').click(function(){
	$(this).parent().css({'left':'-320px'}); // Ocultamos el submenu
});

// Nicescroll
$("body").niceScroll({ cursorcolor:"black", cursorwidth:"5px", cursorborder: "1px solid #fff", cursorborderradius: "5px" });


/*$("body").niceScroll({cursorcolor:"gray",cursorwidth:"5px"});*/

// Boton ir arriba
$(document).ready(function() {
	$('.up').hide();

	$(window).scroll(function() {
		if($(this).scrollTop() > 100){
			$('.up').fadeIn(1000);
		} else {
			$('.up').fadeOut(1000);
		}	
	});

	$('.up').click(function() {
		$('body, html').animate({
			scrollTop:0
		}, 150);
	});
});

// Navegacion con tabs/pestañas
$('ul.tabs li a:first()').addClass('active');
$('.tabs-containers article').hide();
$('.tabs-containers article:first()').show();

$('ul.tabs li a').click(function() {
	$('ul.tabs li a').removeClass('active');
	$(this).addClass('active');
	$('.tabs-containers article').hide();

	var activeTab = $(this).attr('href');
	$(activeTab).show();
	return false;
});

//Slide
var imgItems = $('.slider li').length; // Numero de Slides
var imgPos = 1;

// Agregando paginacion --
for (i = 0; i < imgItems; i++)  {
	$('.pagination').append('<li><i class="fa fa-circle"></i></li>');	
}
//-------------------

$('.slider li').hide(); // 0cultamos todos los slides
$('.slider li:first').show(); // Mostramos el primer slide
$('.pagination li:first').css({'color':'#cd6e2e'}); // Damos estilos al primer item de la paginacion

// Ejecutamos todas las funciones
$('.pagination li').click(pagination);
$('.prev i').click(prevSlider);
$('.next i').click(nextSlider);


setInterval(function(){
	nextSlider();
}, 8000);

// Finciones
function pagination(){
	var paginationPosition = $(this).index() + 1; // Posicion de la paginacion seleccionada

	$('.slider li').hide(); // 0cultamos todos los slides
	$('.slider li:nth-child('+ paginationPosition +')').fadeIn(); // Mostramos el slide seleccionado

	// Dandole estilos a la paginacion seleccionada
	$('.pagination li').css({'color':'#858585'});
	$(this).css({'color':'#cd6e2e'});

	imgPos = paginationPosition;

}

function prevSlider(){
	if (imgPos <= 1) {
		imgPos = imgItems;
	} else {
		imgPos--;
	}
	console.log(imgPos);
	$('.pagination li').css({'color':'#858585'});
	$('.pagination li:nth-child('+ imgPos +')').css({'color':'#cd6e2e'});


	$('.slider li').hide(); // 0cultamos todos los slides
	$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el slide seleccionado

}

function nextSlider(){
	if (imgPos >= imgItems) {
		imgPos = 1;
	} else {
		imgPos++;
	}
	console.log(imgPos);
	$('.pagination li').css({'color':'#858585'});
	$('.pagination li:nth-child('+ imgPos +')').css({'color':'#cd6e2e'});


	$('.slider li').hide(); // 0cultamos todos los slides
	$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el slide seleccionado

}








