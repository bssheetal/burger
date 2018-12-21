$(function () {

     $("#addburger").on("submit", function (event) 
    {

        event.preventDefault();

        var newBurger = {
            burger_name: $("#addburger [name=burger_name]").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new Burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});


