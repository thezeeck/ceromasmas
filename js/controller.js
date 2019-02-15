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

function carousel(name, $node, timer) {
  var tmp = ""
	 $.get("js/carrusel.json").done(function(data){
     let arr = data[name],
        counter = 0;
     for (var i = 0; i < arr.length; i++) {
       tmp += `<section><a href="${arr[i].link}"><img src="img/${arr[i].img}"><p>${arr[i].text}<br><span>${arr[i].button}</span></p></a></section>`;
     }
     $node.addClass("custom-carrusel").html(tmp);

     $($node.children()[counter]).addClass("active");
     counter++;

     setInterval(function(){
       $node.find(".active").removeClass("active");
       $($node.children()[counter]).addClass("active");

       counter = counter < $node.children().length - 1 ? counter + 1 : 0;
     }, timer);
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
