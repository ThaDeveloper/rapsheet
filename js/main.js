$().ready(function () {
    $('.menu-toggler').on('click', function() {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    })

    $('.top-nav .nav-link').on('click', function() {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    })
    $('nav a[href*="#"]').on('click', function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
            }, 2000);
    });
    $('#up').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
            }, 2000);
    })
    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });
    //Emailer
    $("#contact-form").on("submit", function(event) {
        event.preventDefault(); // prevent reload
        var name = $('#name').val(), email = $('#email').val(), message = $('#message').val();
        if ( !name || !email || !message){
            return alertify.error('All fields are required!');
        }
        var name_error = $('#name-error')[0].innerHTML,
                        email_error = $('#email-error')[0].innerHTML,
                        message_error = $('#message-error')[0].innerHTML;
        if(name_error.length > 0 || email_error.length > 0 || message_error.length > 0){
            return alertify.error('Please fix all the errors before submission!');
        }
        var formData = new FormData(this);
        formData.append('service_id', 'default_service');
        formData.append('template_id', 'template_wyYkW5FA');
        formData.append('user_id', 'user_hBKz1zGLF219W7uf5Nrh2');
     
        $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
            type: 'POST',
            data: formData,
            contentType: false, // auto-detection
            processData: false // no need to parse formData to string
        }).done(function() {
            alertify.success('Email sent successfully');
        }).fail(function(error) {
            alertify.error('Oops... An error occured, please check your details and send again');
        });
        $(this).get(0).reset();
    });
}); 
