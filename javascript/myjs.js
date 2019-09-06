$(function() {
    colors = ['#f4eda7', '#f6bf9f', '#fec5ce', '#d4bcd9', '#c1e8ce'];

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
                stop0 = stop1 = stop2 =true;
        }

        switch(animation){
            case 0:
                stop0 = false;
                $('#anim0 #box-area').html('');
                RecursiveSquares(stop0);
                break;
            case 1:
                stop1 = false;
                $('#anim1 #box-area').html('');
                Bubbles(stop1);
                break;
            case 2:
                stop2 = false;
                ConcentricSquares(stop2,0);
                break;
            default:
                stop0 = stop1 = stop2 = true;
        }
        curAnim = animation;
    }
}

function RecursiveSquares(stop) {        
    $('#anim0 #box-area').append('<li></li>');
    var randomSize = Math.floor(Math.random()*180) + 15;
    $('#anim0 #box-area li:last-child').height(randomSize);
    $('#anim0 #box-area li:last-child').width(randomSize);
    
    var randomPosition = Math.floor(Math.random()*100);
    $('#anim0 #box-area li:last-child').css({left:randomPosition + '%'});
    
    var randomOpacity = Math.floor(Math.random()) + 0.6;
    $('#anim0 #box-area li:last-child').css({opacity:randomOpacity});

    var randomRotation = Math.floor(Math.random()*180);
    $('#anim0 #box-area li:last-child').css({transform:'translateY(300%) rotate(' + randomRotation + 'deg)'});
    
    if(stop){
        return;
    }
    var randomDelay = Math.floor(Math.random()*500);
    setTimeout(() => {
        RecursiveSquares(stop0);
    },randomDelay);
}

function Bubbles(stop) {        
    $('#anim1 #box-area').append('<li></li>');
    var randomSize = Math.floor(Math.random()*130) + 15;
    $('#anim1 #box-area li:last-child').height(randomSize);
    $('#anim1 #box-area li:last-child').width(randomSize);
    
    var randomPosition = Math.floor(Math.random()*100);
    $('#anim1 #box-area li:last-child').css({left:randomPosition + '%'});
    
    var randomOpacity = Math.floor(Math.random()) + 0.4;
    $('#anim1 #box-area li:last-child').css({opacity:randomOpacity});

    var randomColor = colors[Math.floor(Math.random()*5)];
    $('#anim1 #box-area li:last-child').css({'background-color':randomColor});

    if(stop){
        return;
    }
    var randomDelay = Math.floor(Math.random()*800) + 100;
    setTimeout(() => {
        Bubbles(stop1);
    },randomDelay);
}

function ConcentricSquares(stop, n) {
    for(let i = 0; i<5; i++){
        if(i+n < 5) {
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
    if(n==5){
        n=0;
    }
    setTimeout(() => {
        ConcentricSquares(stop2, n);
    },500);
}