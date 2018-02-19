//define functions here
function getIt(){
  $('p').on('click',function(){
    alert('hey');
  })
}

function frameIt(){
  $('.tasty').on('load',function(){
    $this.css('border','1px red solid');
  })
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
});
