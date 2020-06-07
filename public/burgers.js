// event handlers for adding and eating

// function to have the status changed to eat a burger

// function that listens and calls to have burger submitted

$(function () {
    $(".change-devoured").on("submit", function (event) {
        event.preventDefault();
        var id = $(this).children("id").val();
        // var newDevoured = $(this).data("newdevour");
        $.ajax({
            type: "PUT",
            url: "/burgers/" + id
        }).then(function (data) {
            location.reload();
        })




    });
   // $(".create-form").on("click", function(){
    //     event.preventDefault();
    //     var newBorger = {
    //         burger_name: $("#ca").val().trim(),
    //     };

    //     $.ajax("/api/burger", {
    //         method: "POST",
    //         data: newBorger
    //     }).then(function (data) {
    //         console.log(data)
    //         location.reload();
    //     })
    // })
 
    
})
