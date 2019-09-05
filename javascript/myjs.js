(function($) {
    Recursive();

    function Recursive() {        
        $('#box-area').append('<li></li>');
        randomSize = Math.floor(Math.random()*180) + 15;
        $('#box-area li:last-child').height(randomSize);
        $('#box-area li:last-child').width(randomSize);
        
        randomPosition = Math.floor(Math.random()*100);
        $('#box-area li:last-child').css({left:randomPosition + '%'});
        
        randomOpacity = Math.floor(Math.random()) + 0.6;
        $('#box-area li:last-child').css({opacity:randomOpacity});

        randomRotation = Math.floor(Math.random()*180);
        $('#box-area li:last-child').css({transform:'translateY(300%) rotate(' + randomRotation + 'deg)'});
        
        randomDelay = Math.floor(Math.random()*500);
        setTimeout(function AddSquare() {
            Recursive();
        },randomDelay);
    }

})(jQuery);
