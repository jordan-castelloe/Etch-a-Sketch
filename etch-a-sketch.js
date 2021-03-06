$(document).ready(function() {

createGrid(20);

});

function createGrid(size){

var size = prompt("Enter a number between 1 and 100", "20");
var h= 300/size;
var w= 550/size;
var box = $('.box');

$('.box').css("height", h);
$('.box').css("width", w);


for (var i = 0; i < size*size; i++) {
   box.clone().insertAfter(box);
  }

//turn grid boxes gray when mouse hovers over them
$('.box').mouseenter(function(){
    $(this).css("background-color", "#848484");
});

// bold buttons when mouse hovers over them
$('#clear-grid, #new-grid').mouseenter(function(){
	$(this).css("font-weight", "bold");
});

//unbold buttons when mouse leaves
$('#clear-grid, #new-grid').mouseleave(function(){
	$(this).css("font-weight", "normal");
});


// clear etch-a-sketch screen when 'clear grid' button is clicked
$('#clear-grid').click(function(){
    $('.box').css("background-color", "#e0dede");
 });

//trigger pop-up box when 'new grid' button is clicked
$('#new-grid').click(function(){
    location.reload();
 });

if(size > 100 || size == null){
	var size = 16;
 }


}


