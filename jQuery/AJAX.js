/* 
    
    AJAX (Asynchronous JavaScript And XML)  
    --------------------------------------

    AJAX helps in fetching data asynchronously without interfering with the existing page.

    Page is not reloaded/refresh.

    Modern websites uses JSON instead or XML for data transfer.
    
    Use of AJAX - 

    -> Saves network bandwith.
    -> Very Interactive.

    How it Works - 

    -> AJAX uses XMLHttpRequest object (also called xhr object) to achieve this.
    -> Data can be transfered in any format and protocol (Not always http necessarily) 
*/

$(document).ready(function() {
    $("#fetchBtn").click(function() {
        $("#h1").load("demo.txt");
    })

    $("#fetchBtn1").click(function() {
        $("#div1").load('https://jsonplaceholder.typicode.com/todos/1');
    })

    $("#btn1").click(function() {
        $("#div2").load("demo1.txt", function(responseTxt, statusTxt, xhr) {
            if (statusTxt == "success")
                alert("External content loaded successfully!");
            if (statusTxt == "error")
                alert("Error: " + xhr.status + ": " + xhr.statusText);
        });
    });

    $("#btn2").click(function() {
        $.get("demo2.txt", function(data, status) {
            alert("Data: " + data + "\nStatus: " + status);
            $("#p2").text(data)
            $("#status").text("Status : " + status);
        });
    });
});