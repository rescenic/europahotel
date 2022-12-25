$(function () {
    $('.contact-form form .inputBox input, .contact-form form .textareaBox textarea').on('blur', function() {
        if($(this).val() != "") {
            $(this).parent().addClass('place-effect');
        } else {
            $(this).parent().removeClass('place-effect');
        }
    })
})