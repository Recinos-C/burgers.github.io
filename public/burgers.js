// event handlers for adding and eating

// function to have the status changed to eat a burger

// function that listens and calls to have burger submitted
$(document).ready(function () {
    $(function () {
        $(".change-devoured").on("click", function (event) {
            event.preventDefault();
            var id = $(this).val()
            console.log("this has been clicked")
            var eat = $(this).data("eat")
            // var newDevoured = $(this).data("newdevour");
            $.ajax("/api/burger" + id,{
                type: "PUT",
                data: eat
            }).then(function (data) {
                console.log("changed" + data)
                location.reload();
            })
        });
        $(".add-borger").on("click", function () {
            event.preventDefault();
            var newBorger = {
                burger_name: $("#burger_name").val().trim(),
            };
            console.log(newBorger)
            $.ajax("/api/burger", {
                method: "POST",
                data: newBorger
            }).then(function (data) {
                console.log("added" + data)
                location.reload();
            })
        })
    })
})