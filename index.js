// $("h1").css("color", "red");
// $("h1").text("Bye");
// $("h1").addClass("big-title margin-50");
// $("h1").removeClass("big-title");
// $("button").html("<em>Don't click me</em>");
// $("a").attr("href", "https://www.yahoo.com");
$("h1").addClass("big-title margin-50");
$("h1").html("<em>Hello</em>");

$("h1").click(myFunction());

function myFunction() {
  $("h1").css("color", "yellow");
}

$("button.pu").click(function () {
  $("h1").css("color", "purple");
});
$("button.b").click(function () {
  $("h1").css("color", "blue");
});
$("button.g").click(function () {
  $("h1").css("color", "green");
});
$("button.pi").click(function () {
  $("h1").css("color", "pink");
});

$("body").keypress(function (event) {
  $("h1").text(event.key).slideUp().slideDown();
});

// $("body").keypress(function(e){
//   $("h1").animate({opacity:0.5});
// })
// $("h1").on("mouseover", function(){
//     $("h1").css("color","aqua");
// })

// $("button").on("click", function(){
//   $("h1").fadeToggle();
// })

// $("button").on("click", function(){
//   $("h1").slideToggle();
// })

// $("button").on("click", function(){
//   $("h1").animate({opacity: 0.5, margin: 200,});
// })

$("button").on("click", function () {
  $("h1").animate({ opacity: 0.5 }).slideUp().slideDown();
});
