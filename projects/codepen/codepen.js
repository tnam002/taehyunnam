$('button').click(function() {
    $(this).toggleClass('yellow');
});

// on keypress, display the character code. on enter, alert the value and clear the value.
$('input[type="text"]').keypress(function(event){
    $('span').text(event.which);
    if(event.which === 13) {
        alert('You typed ' + $(this).val());
        $(this).val("");
    }
});

$('li').on('click', function(){
    $(this).slideToggle(function(){
        console.log('li deleted!');
    });
});