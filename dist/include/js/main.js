$(document).ready(function(){
    $(".content").hover(function(){
        var styles={
            filter: "blur(10px)",
            '-webkit-filter': "blur(10px)",
            transition: "all 1000ms"
        }
        $(".showcase").css(styles);
        $(".content").css(unblurCSS());
    });
})

$(document).ready(function(){
    $(".showcase").hover(function(){
        var styles={
            filter: "blur(10px)",
            '-webkit-filter': "blur(10px)",
            transition: "all 1000ms"
        }   
        $(".content").css(styles);
        $(".showcase").css(unblurCSS());
    })
})

function unblurCSS(){
    var styles={
        filter: "blur(0px)",
        '-webkit-filter': "blur(0px)",
    }
    return styles;
}
