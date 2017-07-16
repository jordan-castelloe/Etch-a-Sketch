$(document).ready(function() {

createGrid(16);

});

function createGrid(size){

if(size > 100 || size == null){
	var size = 16;
 }

var h= 300/size;
var w= 550/size;
var box = $('.box');


	for (var i = 0; i < size*size; i++) {
      box.clone().insertAfter(box);
  }

$('.box').mouseenter(function(){
    $(this).css("background-color", "#848484");


    });


}


