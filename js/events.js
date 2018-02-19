//define functions here
function getIt(){
  $('p').on('click',function(){
    alert('hey');
  })
}

function frameIt(){
  $('img').on('load',function(){
    $('img').addClass('tasty');
  })
}

function pressIt(){
  $('img').on('keydown',function(key){
    if(key.which == 71){
      alert('you pressed "g"!!')
    }
  })
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
});
