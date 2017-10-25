
//show first img
function startOff() {
$('.boxframe1').removeClass('openFrame');
$('.slidebox').css('width','100px');
$('img').removeClass('fullshine');
var thewidth = $('#firstRowImages').contents('.size1:nth-child(2)').contents().width();
$('.size1:nth-child(2)').width(thewidth);
$('.size1:nth-child(2)').contents().addClass('fullshine');
$('#firstRowImages').addClass('openFrame');
};

// click an image to display
$('.gallimg').hover(function switchimg(){
  var thewidth = (this).width;
$('.slidebox').css('width','100px');
$('img').removeClass('fullshine');
$('.boxframe1').removeClass('openFrame');
$(this).addClass('fullshine').parent('div').width(thewidth).parent().addClass('openFrame');

});