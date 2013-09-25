$(document).ready(function(){

//opening and closing the lightbox to add quotes
//
$('.addContentButton').on('click', function(){
	$('.addQuoteLight').css('display', 'block');
});

$('.closeButton').on('click', function(){
	$('.addQuoteLight').css('display', 'none')
});
//
//
//opening and closing the random quote lightbox
//
$('.randomContentButton').on('click', function(){
	$('.randomQuoteLight').css('display', 'block');
});

$('.closeButton').on('click', function(){
	$('.randomQuoteLight').css('display', 'none')
});
//
//




$('.quoteInputSubmit').on('click', function(){
	var quoteAuthor = $('.quoteAuthor').val();
	var quoteText = $('.quoteInput').val();
	$('.quoteBox').append("<p>" + quoteAuthor +"</p>");
	$('.quoteBox').append("<p>" + quoteText + "</p>");
});









//
//
// function for picking out random quotes from an object in utilities file
//
//






























});