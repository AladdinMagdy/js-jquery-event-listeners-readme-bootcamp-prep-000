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
  $(document).on('keydown',function(key){
    if(key.which == 71){
      alert('you pressed "g"!!')
    }
  })
}

function submitIt(){
  $('form').on('submit',function(){
      alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
});
