var mouseHover=false;
var resizing=false;
var mouseX;
var mouseY;

$(function(){
	$("#col-left").width(($('body').innerWidth()/2)-4);
	$("#col-right").width(($('body').innerWidth()/2));
});

$(window).mousemove(function(event) {
	mouseX=event.pageX;
	mouseY=event.pageY;
	mouseMove();
});


$(window).mousedown(function(event) {
	if(mouseHover){
		resizing=true;
		$("body").append("<div id='coverer' style='height:100%;position:absolute;top:0;left:0;width:100%;z-index:10000'></div>");
	}
});

$(window).mouseup(function(event) {
	if(mouseHover){
		resizing=false;
		$("#coverer").remove();
	}
});

function mouseMove(){
	var halfway=$("#col-left").width()+4;
	if(!resizing){
		if(mouseY>55 && mouseX>halfway-4 && mouseX<halfway){
			$("body").css("cursor","col-resize");
			mouseHover=true;
		}else{
			$("body").css("cursor","");
			mouseHover=false;
		}
	}else{
		var newLeft=mouseX-4;
		
		if(newLeft<50){
			newLeft=50;
		}
		
		if(newLeft>$('body').innerWidth()-50){
			newLeft=$('body').innerWidth()-50;
		}
		
		var newRight=$('body').innerWidth()-(newLeft+4);;
		
		$("#col-left").width(newLeft);
		$("#col-right").width(newRight);
		$("#col-right").css("margin-left",(newLeft+4)+"px");
		editor.refresh();
	}
}