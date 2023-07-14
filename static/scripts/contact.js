$(document).ready(function() {
    $('#form').on('submit', function(event) {
        event.preventDefault();
        $('#form')[0].reset();
        // It returns a array of object 
        let userinfo = $(this).serializeArray();
        let user = {};
        userinfo.forEach((value) => {
              
            // Dynamically create an object
            user[value.name] = value.value;
        });
        let url = "/";
        $.ajax({
            method: "POST",
            url: url,
            data: user
        }).done(function(msg) {
            // When the request is successful
            $('.test').text('user is successfully created with Id ' + msg.id);
        }).fail(function(err, textstatus, error) {
            $('.test').text(textstatus);
        });
    });
});