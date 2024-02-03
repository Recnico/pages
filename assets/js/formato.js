$(document).ready(function () {
  $(".card-img-top").click(function () {
      $(this).siblings(".card-body").find(".card-text").toggle("slow"); /*Para minimizar texto de destacados*/
  });
});

$(".item").click(function(){
  $("#myCarousel").carousel(1);/*indicador de #slides y para que usuario ubique que slide esta*/  
});


$(".left").click(function(){
  $("#myCarousel").carousel("prev"); /*Activar los controles de previo y siguiente*/
});



$(document).ready(function () { //Crear funcion tooltips//
    $('[data-toggle="tooltip"]').tooltip();
});


