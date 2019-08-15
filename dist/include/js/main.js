var animated = false;

// logo animation
$(document).ready(function(){
    $("#logo").click( function(){
        var styles;
        if(animated){
            animated = false;
            styles={    
                '-webkit-animation': 'jello-horizontal-1 0.9s both',
                    animation: "jello-horizontal-1 0.9s both"
            }
        }
        else{
            animated = true;
            styles={    
                '-webkit-animation': 'jello-horizontal 0.9s both',
                    animation: "jello-horizontal 0.9s both"
            }
        }
        $("#logo").css(styles);
    });
});