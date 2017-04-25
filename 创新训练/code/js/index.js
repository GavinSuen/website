//banner

(function banner(){
	var imgs = document.querySelectorAll(".banner-pic");
	var box = document.querySelector(".banner-box");
	var btnUp = document.querySelector(".arraw-up");
	var btnDn = document.querySelector(".arrae-dn");

	//点击上翻
	btnUp.onclick=function(){
		//var posLeft=0;
		//posLeft -= 730; 
		box.offsetLeft = box.offsetLeft - "730px";
		alert(box.offsetLeft);
	};
})();