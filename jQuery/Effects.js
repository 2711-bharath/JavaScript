var flag = 0
$(document).ready(function() {
    // Hide/Show and Toggle
    $("#myDiv1").click(function() {
        if (!flag) {
            $("#myDiv2").show(1000);
            flag = 1;
        } else {
            $("#myDiv2").hide(1000);
            flag = 0;
        }
    })
    $("#myDiv3").click(function() {
        $("#myDiv4").toggle(1000)
    })

    // Fading Methods
    $("#btn1").click(function() {
        $("#p1").fadeIn();
        $("#p2").fadeIn("slow");
        $("#p3").fadeIn(2000);
    })

    $("#btn2").click(function() {
        $("#p3").fadeOut();
        $("#p2").fadeOut("slow");
        $("#p1").fadeOut(2000);
    })

    $("#btn3").click(function() {
        $("#p1").fadeToggle();
        $("#p2").fadeToggle("slow");
        $("#p3").fadeToggle(2000);
    })

    $("#btn4").click(function() {
        $("#p1").fadeTo("slow", 0.25);
        $("#p2").fadeTo("slow", 0.50);
        $("#p3").fadeTo("slow", 0.75);
    })

    // Slide Methods
    $("#btn5").click(function() {
        $("#myDiv6").slideDown();
    })

    $("#btn6").click(function() {
        $("#myDiv6").slideUp();
    })

    $("#btn7").click(function() {
        $("#myDiv6").slideToggle();
    })

    // animations
    $("#btn8").click(function() {
        var div = $("#square1");
        div.animate({ height: '300px', opacity: '0.4' }, "slow");
        div.animate({ width: '300px', opacity: '0.8' }, "slow");
        div.animate({ height: '100px', opacity: '0.4' }, "slow");
        div.animate({ width: '100px', opacity: '0.8' }, "slow");
        div.animate({ left: '250px', opacity: '0.4' }, "slow");

    })

    // start and stop
    $("#myDiv7t").click(function() {
        $("#myDiv7").fadeToggle(4000);
    });
    $("#btn9").click(function() {
        $("#myDiv7").stop();
    });

    // call back
    $("#btn10").click(function() {
        $("#myDiv8").hide("slow", function() {
            alert("The Div is now hidden");
        });
    });

    // chaining
    $("#btn11").click(function() {
        $("#square2").css("background-color", "black").slideDown("slow").slideUp("slow");
    });


})