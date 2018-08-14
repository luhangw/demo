/*!
 * 自定义函数库
 */
 
//window.onresize = function(){
//	$(".menu dl").css({"height":""}); //清除菜单高度
//}

$(document).ready(function() {	
	menuSlide(); //下拉菜单	
	workShowLayout(); //案例显示层
    
}); 


// work下拉菜单
function workShowLayout(){
	$(".worklist a").mouseover(function(index){
		$(this).children("h1").animate({"height":"100%"},200)
		$(this).children("h1").clearQueue();
	});
	$(".worklist a").mouseout(function(index){
		$(this).children("h1").animate({"height":""},200)
		$(this).children("h1").clearQueue();
	});
}

// work 自动排列
function workAutoList(){
	var ddCount = $(".work dd").length;
	//ddCount = ddCount % 5 == 0 ? ddCount : ddCount+(5-ddCount%5);
	
	$(".work dd").each(function(i){
		if((i+3)%5==0 || (i+2)%5==0 || (i+1)%5==0){
			$(this).addClass("on");
		}
	});
}

// services 下拉
function aboutServices(){
	$(".worklist dt").mouseover(function(){
		$(this).next(".worklist dd").css({"visibility":"visible"});
	})
	$(".worklist dt").mouseout(function(){
		$(this).next(".worklist dd").css({"visibility":""});
	})
}


// team头像变换
function aboutHead(){
	$(".haTeam dd").mouseover(function(index){
		$(this).children("h3").css({"display":"none"});
		$(this).children("h4").css({"display":"block"});
	})
	$(".haTeam dd").mouseout(function(index){
		$(this).children("h3").css({"display":"block"});
		$(this).children("h4").css({"display":"none"});
	})
}

// 滚动BOX 
function scrollImg(model,sList,sButton,marginTime,lastTime,isPlay,pattern){
	jQuery(model).find(model+"In").slide({
		 titCell: sButton + " li",
		 mainCell: sList+" ul", 
		 effect: pattern, 
		 autoPlay: isPlay, 
		 delayTime: marginTime,
		 interTime: lastTime
	});
}



// 下拉菜单
function menuSlide(){
	$(".menu h3").click(function(index){
		if($(this).next("dl").height()>=$(".menu dd").height()){
			$(this).next("dl").animate({"height":"0px"},200);
		}else{
			var dlHeight = $(".menu dd").height() * $(".menu dd").length;
			$(this).next("dl").animate({"height":dlHeight},200);
		}
	});
	$(".menu dl").click(function(index){
		$(this).css({"height":""});
	});
}

