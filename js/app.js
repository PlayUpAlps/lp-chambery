$(document).foundation()


$(function(){

    $(window).bind("load resize", function(){
        _winHeight = $(window).height();

        if(window.innerWidth>800){
        	// Setting Height
        	$('#hero').css({'height':_winHeight});
        }
        
    });
});
