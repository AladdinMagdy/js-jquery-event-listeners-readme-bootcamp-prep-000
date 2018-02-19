//define functions here
function getIt(){
  $('p').on('click',function(){
    alert('hey');
  })
}

function frameIt(){
  $('img').on('load',function(img){
    img.addClass('tasty');
  })
}

function pressIt(){
  $('img').on('keydown',function(key){
    if()
  })
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
});
