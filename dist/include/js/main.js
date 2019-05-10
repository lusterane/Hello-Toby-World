var color_inverted = true;

// blurring background
$(document).ready(function(){
    $(".content").hover(function(){
        var styles={
            filter: "blur(23px)",
            '-webkit-filter': "blur(23px)",
            transition: "all 1000ms"
        }
        $(".showcase").css(styles);
        $(".content").css(unblurCSS());
    });
})

// bluring content

$(document).ready(function(){
    $(".showcase").hover(function(){
        var styles={
            filter: "blur(8px)",
            '-webkit-filter': "blur(8px)",
            transition: "all 1000ms"
        }   
        $(".content").css(styles);
        $(".showcase").css(unblurCSS());
    })
})

// changing color of logo
$(document).ready(function(){
    $("body").click(function(){
        if(!color_inverted){
            color_inverted = true;
            $("#logo").css(invert0());
        }
        else{
            color_inverted = false;
            $("#logo").css(invert100());
        }
    })
})


function unblurCSS(){
    var styles={
        filter: "blur(0px)",
        '-webkit-filter': "blur(0px)",
        transition: "all 1000ms"
    }
    return styles;  
}
function invert100(){
    var styles={
        filter: "invert(100%)",
        'webkit-filter': "invert(100%)",
        transition: "all 400ms"
    }
    return styles;
}

function invert0(){
    var styles={
        filter: "invert(0%)",
        'webkit-filter': "invert(0%)",
        transition: "all 400ms"
    }
    return styles;
}
