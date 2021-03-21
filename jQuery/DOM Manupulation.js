$(document).ready(function() {

    // DOM manupulation methods 

    // DOM get methods
    $("#btn1").click(function() {
        alert("Text : " + $("#p1").text());
    })

    $("#btn2").click(function() {
        alert("Text : " + $("#p1").html());
    })

    $("#btn3").click(function() {
        alert("Value : " + $("#name").val());
    })

    $("#btn4").click(function() {
        alert("href : " + $("#refLink").attr("href"));
    })

    // DOM set methods
    // setting data and using call back displaying previous data
    $("#btn5").click(function() {
        $("#p1").text(function(i, origText) {
            return "Old text: " + origText + " New text: Learning jQuery(index: " + i + ")";
        })

    })

    $("#btn6").click(function() {
        $("#p1").html(function(i, origText) {
            return "Old html: " + origText + " New html: Learning <b>jQuery</b>(index: " + i + ")";
        });
    })

    $("#btn7").click(function() {
        $("#name").val("Bharath");
    })

    $("#btn8").click(function() {
        $("#refLink").attr("href", "https://www.w3schools.com/jquery/jquery_dom_set.asp");
    })

    $("#btn9").click(function() {
        $("#refLink").attr({
            "href": "https://www.w3schools.com/jquery/jquery_dom_set.asp",
            "title": "w3schools jQuery"
        });
    })

    // add
    $("#btn10").click(function() {
        $("#p2").append("Some appended text.");
    })

    $("#btn11").click(function() {
        $("#p2").prepend("Some prepended text.");
    })

    $("#btn13").click(function() {
        $("#p2").before("<span>Before</span>");
    })

    $("#btn12").click(function() {
        $("#p2").after("<span>After</span>");
    })

    // remove
    $("#btn14").click(function() {
        $("p").remove("#p3");
    })

    $("#btn15").click(function() {
        $("p").remove(".demo");
    })

    // Manupulating
    $("#btn16").click(function() {
        $("h3").addClass("class1");
        $("h4").addClass("class2")
    })

    $("#btn17").click(function() {
        $("h3").removeClass("class1");
        $("h4").removeClass("class2");
    })

    $("#btn18").click(function() {
        $("h3").toggleClass("class1");
        $("h4").toggleClass("class2");
    })

    $("#btn19").click(function() {
        $(".paragraph").css({ "background-color": "yellow" });
    })
})