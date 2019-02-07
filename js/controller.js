$(function(data){
  $.when($("#norte").load("templates/norte.html"), $("#sur").load("templates/sur.html")).then(()=>{
    $("#menu").on("click", () => {
      $(this).addClass("active");
    });
  });
});

function carousel() {
	 var i,x = $(".slide"),y=$(".carousel_indicator");
   for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      y[i].classList.remove("current-slide");
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    y[slideIndex-1].classList.add("current-slide");
    setTimeout(carousel, 8000);
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
