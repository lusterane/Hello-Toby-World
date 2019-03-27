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
            filter: "blur(15px)",
            '-webkit-filter': "blur(15px)",
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

// about-me modal open
$(document).ready(function(){
    $("#about-me-button").click(function(){
        $("#about-modal").css("display", "block");
        $("#about-close").click(function(){
            $("#about-modal").css("display", "none");
        })
    })
})

// close modal
$(document).keydown(function(){
    $(".modal").css("display", "none");
})


// projects modal open
$(document).ready(function(){
    $("#projects-button").click(function(){
        $("#project-modal").css("display", "block");
        $("#project-close").click(function(){
            $("#project-modal").css("display", "none");
        })
    })
})

// contact modal open
$(document).ready(function(){
    $("#contact-button").click(function(){
        $("#contact-modal").css("display", "block");
        $("#contact-close").click(function(){
            $("#contact-modal").css("display", "none");
        })
    })
})

// resume modal open
$(document).ready(function(){
    $("#resume-button").click(function(){
        $("#resume-modal").css("display", "block");
        $("#resume-close").click(function(){
            $("#resume-modal").css("display", "none");
        })
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
