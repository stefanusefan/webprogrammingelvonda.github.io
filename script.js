$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    $('h1').css({
        'transform': 'translate(0px,' + wScroll / 2 + '%)'
    });
    $('.kotak').css({
        'transform': 'translate(0px,' + wScroll / 4 + '%)'
    });

});

// About

$(window).on('load', function () {
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});





// parallax jumbotron

$(window).scroll(function() {
	var scrollJumbotron =$(this).scrollTop();

	$('.jumbotron img').css({
		'transform' : 'translate(0px,' + scrollJumbotron / 4 + '%)'
	});

$('.jumbotron h1').css({
		'transform' : 'translate(0px,' + scrollJumbotron / 2 + '%)'
	});	

$('.jumbotron p').css({
		'transform' : 'translate(0px,' + scrollJumbotron/1.2 + '%)'
	});	

// Parallax
// abaut





// Paralaxx portfolio

if(scrollJumbotron > $('.portfolio').offset().top - 250 ){


	$('.portfolio .thumbnail').each(function(i){
// Memunculkan gambar satu per satu 
		setTimeout(function(){
			$('.portfolio .thumbnail').eq(i).addClass('muncul');
		}, 300 * (i+1));



	});



}


});