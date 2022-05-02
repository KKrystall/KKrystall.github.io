var enlarge, data, switchover = false;
var picture = true;
var num_data = 3;

$(document).ready(function () {
    $("button.picture").css("background", "#ccc");

    $("button.picture").click(function (event) {
        $("div.page-data").slideUp(200, function () {
            $("button.m-btn").css("background", "");
            $("div.page-switchover").slideUp(200, function () {
                $("div.page-picture").slideDown(500);
                $("button.picture").css("background", "#ccc");
            });
        });
        picture = true, data = false, switchover = false;
    });
    $("button.data").click(function (event) {
        $("div.large").fadeOut(200, function () {
            $("div.large").siblings().css("filter", "none");
            $("div.page-picture").slideUp(200, function () {
                $("button.m-btn").css("background", "");
                $("button.data").css("background", "#ccc");
                $("div.page-switchover").slideUp(200, function () {
                    $("div.page-data").slideDown(500);
                    $("div.page-data").css("display", "flex");
                });
            });
        })
        data = true, picture = false, switchover = false, enlarge = false;
    });
    $("button.switchover").click(function (event) {
        $("div.large").fadeOut(200, function () {
            $("div.large").siblings().css("filter", "none");
            $("div.page-picture").slideUp(200, function () {
                $("button.m-btn").css("background", "");
                $("div.page-data").slideUp(200, function () {
                    $("div.page-switchover").slideDown(500);
                    $("button.switchover").css("background", "#ccc");
                });
            });
        });
        switchover = true, picture = false, data = false, enlarge = false;
    });

    $("div.box").click(function (event) {
        if (!enlarge) {
            event.stopPropagation();
            $("div.large").siblings().css("filter", "blur(3px)");
            $("div.large").css("background", $(this).attr("id"));
            $("div.large").fadeIn(500);
            enlarge = true;
        }
    });
    $("div.page-picture").click(function () {
        if (enlarge) {
            $("div.large").fadeOut(500);
            $("div.large").siblings().css("filter", "none");
            enlarge = false;
        }
    });
    $("button.add").on("mouseover mouseout click", function () {
        if (event.type == "mouseover") {
            $(this).css("borderColor", "rgb(41,78,68)");
        } else if (event.type == "mouseout") {
            $(this).css("borderColor", "gray");
        } else if (event.type == "click") {
            if (num_data < 10) {
                var item = $('<div>', {
                    class: "item"
                });
                var order = $('<div>', {
                    class: "order"
                });
                order.appendTo(item);
                order.html(++num_data);
                var content = $('<div>', {
                    class: "content"
                });
                content.appendTo(item);
                var del = $('<div>', {
                    class: "del"
                });
                del.html("Delete");
                del.appendTo(item);
                $("div.list").append(item);
            } else {
                alert("too many lists!");
            }
        }
    });
    $("div").on("mouseover mouseout click", ".del", function () {
        if (event.type == "mouseover") {
            $(this).css("background", "lightblue");
        } else if (event.type == "mouseout") {
            $(this).css("background", "#ccc");
        } else if (event.type == "click") {
            $(this).parent().remove();
            num_data--;
            var i = 1;
            $("div.item").each(function () {
                $(this).children(".order").html(i++);
            });
        }
    });
});
