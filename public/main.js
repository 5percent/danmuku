$(function() {
    var socket = io();
    socket.on('print', function (data) {
        var $p = $('<p>'+data.text+'</p>');
        $('#panel').append($p);

        $p.css('right', -1 * $p.outerWidth()).animate({right: 1200}, 10000, function(){
            $p.remove();
        });
    });

    $('.send').click(function(){
        var text = $('[name=danmaku]').val().trim();

        if (text) {
            socket.emit('send', {text: text});
        }
    });
});
