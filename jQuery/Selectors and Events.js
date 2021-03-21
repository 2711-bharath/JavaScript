/*
    In the below code we use following syntax
    $(selecor).action()

    example of selectors -
        id
        class
        element name
    example of actions are -
        ready
        hide
        click
        dbclick
        mouseenter
        mouseleave
        mousedown
        mouseup
        hover
        focus
        on
*/


$(document).ready(function() {
    $("#btn").click(function() {
        $("p").hide();
    })

    $("#btn1").click(function() {
        $("#test1").hide()
    })

    $("#btn2").click(function() {
        $("#test2").hide()
    })

    $("#btn3").click(function() {
        $("#test3").hide()
    })

    $("#btn4").click(function() {
        $(".container").hide()
    })

    $("#myDiv1").on({
        mouseenter: function() {
            $(this).css("background-color", "lightgray")
        },
        mouseleave: function() {
            $(this).css("background-color", "lightblue")
        },
        click: function() {
            $(this).css("background-color", "yellow")
        }

    })
})