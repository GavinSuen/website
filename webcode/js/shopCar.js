

//计算小计功能的实现

function Sum(){
	var checks = document.querySelectorAll('.prod-list table .td-check input');
	var money = document.querySelectorAll('.td-money');
	var countPay = document.querySelector('#countPay'); 
	var Sum=0;
		for(var i=0;i<money.length;i++){
			if(checks[i].checked == true){
			Sum =Sum + parseFloat(money[i].innerText);
		}
		
	}
	countPay.innerText=Sum;
}



//全选功能的实现

function selectAllBottom(){
	var checks = document.querySelectorAll('.prod-list table .td-check input');
	var checkAllBottom = document.querySelector('.checkAllBottom');

	if(checkAllBottom.checked){
		for(var i=0;i<=checks.length;i++){
				checks[i].checked = true;
			}
			
		}else{
			for(var i=0;i<=checks.length;i++){
				checks[i].checked = false;
			}
			
		}



};

function selectAllTop(){
	var checks = document.querySelectorAll('.prod-list table .td-check input');
	var checkAllBottom = document.querySelector('.checkAllTop');

	if(checkAllBottom.checked){
		for(var i=0;i<=checks.length;i++){
				checks[i].checked = true;
			}
			
		}else{
			for(var i=0;i<=checks.length;i++){
				checks[i].checked = false;
			}
			
		}
};

//数量减少功能的实现

window.onload=function(){
	var subs = document.querySelectorAll('.numSub');
	var nums = document.querySelectorAll('.td-num input');
	var price = document.querySelectorAll('.td-price');
	var money = document.querySelectorAll('.td-money');
	
	for(var i=0;i<subs.length;i++){
		subs[i].index=i;
		if( nums[i].value > 0){
			subs[i].onclick=function(){
			nums[this.index].value -=1;
			money[this.index].innerText = price[this.index].innerText * nums[this.index].value;
			};
		}
	}

//数量增加功能的实现
	var adds = document.querySelectorAll('.numAdd');
	var nums = document.querySelectorAll('.td-num input');
	for(var i=0;i<adds.length;i++){
		adds[i].index=i;
		if( nums[i].value > 0){
			adds[i].onclick=function(){
			nums[this.index].value = parseInt(nums[this.index].value) + 1;
			money[this.index].innerText = price[this.index].innerText * nums[this.index].value;
			};
		}
		
	}
	
};

//删除功能的实现
function Delete(){
	var del = document.querySelectorAll('.td-edit .del');
	var line = document.querySelectorAll('.prod-list table .line');
	//alert(del.length);
	for(var i=0;i<line.length;i++){
		del[i].index=i;
		del[i].onclick=function(){
			line[this.index].style.display="none";
		};
		
	}
};


