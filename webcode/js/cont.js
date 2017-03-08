window.onload=function(){

			var btnU = document.querySelector('.prodList .btnUp');
			var btnD = document.querySelector('.prodList .btnDown');
			var pos = document.querySelector('.prodList ul');
			var img = document.querySelector('.contProduct');
			var imgs = document.querySelectorAll('.prodList ul img');
			var lastImg = imgs[0];


			for(var i = 0 ;i<imgs.length;i++){
				imgs[i].index = i;
				imgs[i].onclick = function(){
					//imgs[this.index].style.border="2px solid #555";
					//imgs[lastImg.index].style.border="";
					lastImg=this;
					var imgName = imgs[this.index].src;
					imgName = imgName.substring((imgName.length)-12);
					img.src = "img/"+imgName;
				};

			}

			var i= 0;
			btnU.onclick = function(){
				if(i >= 0){
					pos.style.marginLeft = i+"px";
				}else{
					i += 85;
					pos.style.marginLeft = i+"px";
				}
			};
			btnD.onclick = function(){
				if(i <= -190){
					pos.style.marginLeft = i+"px";
				}else{
					i -= 85;
					pos.style.marginLeft = i+"px";
				}
				
			};

			var inputs = document.querySelectorAll('.contRight input');
			var divs = document.querySelectorAll('.contRight div');
			var last = inputs[0];

			for (var i = 0; i <= inputs.length; i++) {
				inputs[i].index = i;
				inputs[i].onclick = function(){
					last.style.background='';
					divs[last.index].style.display='none';
					divs[this.index].style.display='block';
					this.style.background='#49171a';
					last=this;
				};

			}
		};

