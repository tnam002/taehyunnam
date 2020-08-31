$('body').on('click', 'button', function(){
    $('input').fadeToggle(200);
});

$('input[type="text"]').keypress(function(e) {
    if (e.keyCode === 13) {
        if ($(this).val() === "") { }
        else {
            $('ul').append('<li><span><i class="fas fa-trash-alt"></i></span>' + $(this).val() + '</li>');
            $(this).val("");
        }
    }
});

$('body').on('click', 'span', function() {
    $(this).parent('li').remove();
});

$('body').on('click', 'li', function() {
    $(this).toggleClass('done');
});