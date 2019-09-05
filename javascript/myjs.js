(function($) {
    RecursiveSquares();
    curAnim = 0;
    stop1 = stop2 = false;

    $('.main-divs').click(function(){
        ToogleAnimation($(this).data('anim'));
    })
    
    function ToogleAimation(animation){
        if(animation !== curAnim){
            switch(curAnim){
                case 0:
                    stop1 = true;
                    break;
                case 1:
                    stop2 = true;
                    break;
            }

            switch(animation){
                case 0:
                    RecursiveSquares();
                    break;
                case 1:
                    ManiacDiv();
                    break;
            }
        }
    }

    function RecursiveSquares(stop1) {        
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
        
        if(stop1){
            return;
        }
        randomDelay = Math.floor(Math.random()*500);
        setTimeout(function() {
            RecursiveSquares();
        },randomDelay);
    }

    function ManiacDiv(stop2) {
        colors = ['#f4eda7', '#f6bf9f', '#fec5ce', '#d4bcd9', '#c1e8ce'];
        random1 = Math.floor(Math.random()*100);
        random2 = Math.floor(Math.random()*100);
        random3 = Math.floor(Math.random()*100);
        random4 = Math.floor(Math.random()*100);
        random5 = Math.floor(Math.random()*100);
        random6 = Math.floor(Math.random()*100);
        random7 = Math.floor(Math.random()*100);
        random8 = Math.floor(Math.random()*100);
        randomColor = colors[Math.floor(Math.random()*5)];
        $('maniac .container').css({'clip-path':'polygon(' + random1 + ' ' + random2 + ', ' + random3 + ' '+ random4 + ', ' + random5 +' ' + random6 +', ' + random7 +' ' + random8 +', 0 0)'});
        $('maniac .container').css({'-webkitclip-path':'polygon(' + random1 + ' ' + random2 + ', ' + random3 + ' '+ random4 + ', ' + random5 +' ' + random6 +', ' + random7 +' ' + random8 +', 0 0)'});
        $('maniac .container').css({'-moz-clip-path':'polygon(' + random1 + ' ' + random2 + ', ' + random3 + ' '+ random4 + ', ' + random5 +' ' + random6 +', ' + random7 +' ' + random8 +', 0 0)'});
        $('maniac .container').css({'background-color':colors});

        if(stop2){
            return;
        }
        setTimeout(function() {
            ManiacDiv();
        },500);
    }

})(jQuery);
