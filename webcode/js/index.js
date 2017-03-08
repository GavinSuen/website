window.onload = function(){
	var btnU = document.querySelector('#bannerBtnUp');
	var btnD = document.querySelector('#bannerBtnDown');
	var pos = document.querySelector('.index-banner ul');
	var i=0;

		btnU.onclick = function(){
				if(i >= 0){
					i = -2700;
					pos.style.marginLeft = i+"px";
				}else{
					i += 900;
					pos.style.marginLeft = i+"px";
				}
			};

		btnD.onclick = function(){
				if(i <= -2700){
					i=0;
					pos.style.marginLeft = i+"px";
				}else{
					i -= 900;
					pos.style.marginLeft = i+"px";
				}
				
			};


	var lists = document.querySelectorAll('.index-list .list-li');
	var lis = document.querySelectorAll('.index-list .inner-box');
	var last = lists[0];

	for(var a=0;a<=lists.length;a++){
		lists[a].index = a;
		lists[a].onmouseover = function(){
			lists[this.index].style.border = "1px solid #986a50";
			lists[last.index].style.border = "";
			lists[this.index].style.background = "#986a50";
			lists[last.index].style.background = "rgb(210,210,210)";
			lis[this.index].style.display = "block";
			lis[last.index].style.display = "none";
			last=this;
		};

		lists[a].onmouseout = function(){
			lists[this.index].style.border = "";
			lists[this.index].style.background = "rgb(210,210,210)";
			lis[this.index].style.display = "none";
		};

	}
};