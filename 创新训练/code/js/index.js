//banner
(function banner(){
	var imgs = document.querySelectorAll(".banner-pic");
	var box = document.querySelector(".banner-box");
	var btnUp = document.querySelector(".arraw-up");
	var btnDn = document.querySelector(".arraw-dn");
	var btnLi = document.querySelectorAll(".arraw-btn-list");
	var posLeft

	//点击上翻
	btnUp.onclick=function(){
		var posLeft= box.offsetLeft;
		posLeft = posLeft + 730;
		if(posLeft > 0){
			box.style.left = -730*(imgs.length-1) + "px";
		}else{
			box.style.left = posLeft + "px";
		}
		activeImg();
	};

	//点击下翻
	btnDn.onclick=function(){
		var posLeft= box.offsetLeft;
		posLeft = posLeft - 730;
		if(posLeft > -730*(imgs.length)){
			box.style.left = posLeft + "px";
		}else{
			box.style.left = 0 + "px";
		}
		activeImg();
		
	};

	//按钮点击
	for(var i=0;i<btnLi.length;i++){
		btnLi[i].index = i;
		btnLi[i].onclick=function(){
			posLeft = this.index * -730;
			box.style.left = posLeft + "px";
			activeImg();
		};
	}

	//判断图片
	function activeImg(){
		var posLeft= box.offsetLeft;
		var num = Math.abs(posLeft/730);
		for(var i=0;i<btnLi.length;i++){
			btnLi[i].style.background="yellow";
		}
		btnLi[num].style.background="blue";
	}
	activeImg();
})();

//login-tab
(function loginTab(){
	var btns = document.querySelectorAll(".consult-tab .tab-btn");
	var cons = document.querySelectorAll(".consult-content");

	for(var i=0;i<btns.length;i++){
		btns[i].index=i;
		btns[i].onclick=function(){
			//alert(this.index);
			for(var j=0;j<btns.length;j++){
				btns[j].style.background="#fff";
				cons[j].style.display="none";
			}
			this.style.background="yellow";
			cons[this.index].style.display="block";
		};
	}
})();