"use strict";
var content = window.document.getElementById("content");
window.onload = function () {
    var socket = io();
    socket.on("content", function (name) {
        console.log(name);
        content.innerHTML += "<p>" + name + " tt</p>";
    });
    //console.log(socket);
};
