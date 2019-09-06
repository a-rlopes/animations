$(function() {
    colors = ['#f4eda7', '#f6bf9f', '#fec5ce', '#d4bcd9', '#c1e8ce', '#f4eda7'];

    RecursiveSquares();
    curAnim = 0;
    stop0 = stop1 = stop2 =false;

    for(let i = 0; i<3; i++){
        $('#toggleAnim' + i).on('click', () => {
            ToggleAnimation(i)
        });
    }
});


function ToggleAnimation(animation){
    if(animation != curAnim){
        switch(curAnim){
            case 0:
                stop0 = true;
                break;
            case 1:
                stop1 = true;
                break;
            case 2:
                stop2 = true;
                break;
            default:
                stop0 = stop1 = stop2 =false;
        }

        switch(animation){
            case 0:
                stop0 = false;
                $('#box-area').html('');
                RecursiveSquares(stop0);
                break;
            case 1:
                stop1 = false;
                //ManiacDiv(stop1,0);
                break;
            case 2:
                stop2 = false;
                ConcentricSquares(stop2,0);
                break;
            default:
                stop0 = stop1 = stop2 = false;
        }
        curAnim = animation;
    }
}

function RecursiveSquares(stop) {        
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
    
    if(stop){
        return;
    }
    randomDelay = Math.floor(Math.random()*500);
    setTimeout(() => {
        RecursiveSquares(stop0);
    },randomDelay);
}

function ManiacDiv(stop) {
    randomColor = colors[Math.floor(Math.random()*5)];
    /*
    random1 = Math.floor(Math.random()*100);
    random2 = Math.floor(Math.random()*100);
    random3 = Math.floor(Math.random()*100);
    random4 = Math.floor(Math.random()*100);
    random5 = Math.floor(Math.random()*100);
    random6 = Math.floor(Math.random()*100);
    random7 = Math.floor(Math.random()*100);
    random8 = Math.floor(Math.random()*100);

    $('#anim1 .container').css({'clip-path':'polygon(' + random1 + ' ' + random2 + ', ' + random3 + ' '+ random4 + ', ' + random5 +' ' + random6 +', ' + random7 +' ' + random8 +', 0 0)',
    '-webkitclip-path':'polygon(' + random1 + ' ' + random2 + ', ' + random3 + ' '+ random4 + ', ' + random5 +' ' + random6 +', ' + random7 +' ' + random8 +', 0 0)',
    '-moz-clip-path':'polygon(' + random1 + ' ' + random2 + ', ' + random3 + ' '+ random4 + ', ' + random5 +' ' + random6 +', ' + random7 +' ' + random8 +', 0 0)',
    'background-color':randomColor});
    */

    if(stop){
        return;
    }
    setTimeout(() => {
        ManiacDiv(stop1);
    },500);
}

function ConcentricSquares(stop, n) {

    for(let i = 0; i<6; i++){
        if(i+n < 6) {
            c = i+n;
        } else {
            c = (i + n) - 5;
        }

        $('.c' + i).css({'background-color':colors[c]});
    }

    if(stop){
        return;
    }

    n++;
    if(n==6){
        n=0;
    }
    setTimeout(() => {
        ConcentricSquares(stop2, n);
    },500);
}