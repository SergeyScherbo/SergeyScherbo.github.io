$(function() {
    var form = $('#ajax-contact');
    var formMessage = $('.form-message');

    $(form).submit(function(event) {
        event.preventDefault();

        var formData = $(form).serialize();

        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
        .done(function(response) {
            $(formMessage).removeClass('error');
            $(formMessage).addClass('success');

            $(formMessage).text(response);

            $('#name').val('');
            $('#email').val('');
            $('#message').val('');
        })
        .fail(function(data) {
            $(formMessage).removeClass('success');
            $(formMessage).addClass('error');

            if (data.responseText !== '') {
                $(formMessage).text(data.responseText);
            } else {
                $(formMessage).text('Oops! An error occured and your message couldn\'t be sent.');
            }
        })


    });
});
