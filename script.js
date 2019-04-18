$("div").hide();





$("button").click(function() {

    $(".1st").show();
    $(".find").hide();
});
$(".run").click(function() {

    $(".1st").fadeOut();
    $(".pls").text("OH, you lost, try again!");

});
$(".get").click(function() {

    $(".pls").text("double click the treasure !");
    $(".1st").hide();



});
$(".hunt").dblclick(function() {

    $(".4th").show();
    $(".hole").hide();
    $("body").css("background-color", "red");
    $("1st").hide();


});
$(".giveup").click(function() {

    $(".pls").text("OH, you lost again, try again!");
    $(".4th").fadeOut();
    $(".1st").fadeOut();


});
$(".keep").click(function() {
    $(".pls").text("DoubleClike the Title!!!!!");
    $(".4th").fadeOut();
    $(".2nd").fadeIn();
    $("body").css("background-color", "lime");
});
$("h1").dblclick(function() {
    $("div").hide();
    $("h1").hide();
    $(".hunt").hide();
    $("button").hide();
    $(".5th").show();
    $(".pls").text("You won!!!!!!");
    
    $(".1st").hide();
});