"use strict";

$(document).ready(() => {

    new Date($.now()); //jquery for time stamp

    let bug1 = $("#bug1");
    let bug2 = $("#bug2");
    let bug3 = $("#bug3");

    let queue = [bug1,bug2,bug3];

    //removes item from end of array
    $("#x1").click(function() {
        queue.pop();
        console.log(queue);
    })

    //removes item from beginning of array
    $("#done").click(function() {
        queue.shift();
    })

});