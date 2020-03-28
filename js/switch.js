$(document).ready(function(){
    $(".checkbox").click(function(){
        $(".light").toggleClass("dark"); return false;
    });
});

// Смена изображений
function chg(id,chk){
	var el = document.getElementById(id);
	var ch = document.getElementById(chk);
	if (el.src.indexOf("1.jpg")>0){
		el.src="3.jpg"
		ch.checked="true";
	}else{
		el.src="1.jpg"
		ch.checked="";
	}
}