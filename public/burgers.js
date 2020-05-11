// event handlers for adding and eating

// function to have the status changed to eat a burger

// function that listens and calls to have burger submitted

$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newdevoured = $(this).data("newdevour");
        var newDevouredstate = {
            devoured: 1
        }
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newDevouredstate
        }).then(function () {
            location.reload();
        })




    });

    $(".create-form").on("submit", function(){
        event.preventDefault();
        var newBorger = {
            burger_name: $("#devoured").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burger", {
            type: "POST",
            data: newBorger
        }).then(function () {
            location.reload();
        })
    })
    
})
