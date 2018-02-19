//define functions here
function getIt(){
  $('p').on('click',function(){
    alert('hey');
  })
}

function frameIt(){
  $('.tasty').on('load',function(){
    $this.css()
  })
}

$(document).ready(function(){

// call functions here
  getIt();
});
