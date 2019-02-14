$(function(data){
  haderLoad();
});

function haderLoad() {
  var $header = new $.Deferred(),
      $footer = new $.Deferred();

  $.when($header, $footer).then(function() {
    let currentMenu = location.href,
        linksMenu = $("#menuBar a");

    for (var i = 0; i < linksMenu.length; i++) {
      if (linksMenu[i].href === currentMenu) {
        $(linksMenu[i]).addClass("active");
      }
    }

    $("#menu").on("click", (e) => {
      $(e.currentTarget).toggleClass("active").next().slideToggle();
    });
  });

  $("#norte").load("templates/norte.html", function() { $header.resolve(); });
  $("#sur").load("templates/sur.html", function() { $footer.resolve(); });
}

function carousel(name) {
	 $.get("js/carrusel.json").done(function(data){
     console.log(data);
   });
}
function cambia(cual){
  var i,x = $(".slide"),y=$(".carousel_indicator");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
     y[i].classList.remove("current-slide");
   }
   slideIndex=cual;
   x[slideIndex].style.display = "block";
   y[slideIndex].classList.add("current-slide");
}
function caruselBaner(){
  var i,x = $(".itemDescripcionBeneficio");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
   }
   beneficioIndex++;
   if (beneficioIndex > x.length) {beneficioIndex = 1}
   x[beneficioIndex-1].style.display = "flex";
   setTimeout(caruselBaner, 8000);
}
function terms() {
  $(".accordion").on("click", function(e) {
    $(e.currentTarget).toggleClass("active").next().slideToggle();
  });
}
