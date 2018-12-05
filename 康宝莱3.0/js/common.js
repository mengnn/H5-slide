// JavaScript Document
if ("wView" in window) {
	window.wView.allowsInlineMediaPlayback = "YES";
	window.wView.mediaPlaybackRequiresUserAction = "NO";
};
document.getElementById("page1").addEventListener('touchmove',e,false);
document.getElementById("page2").addEventListener('touchmove',e,false);
document.getElementById("page3").addEventListener('touchmove',e,false);
document.getElementById("page4").addEventListener('touchmove',e,false);
document.getElementById("page5").addEventListener('touchmove',e,false);
document.getElementById("page6").addEventListener('touchmove',e,false);
document.getElementById("page7").addEventListener('touchmove',e,false);
document.getElementById("page8").addEventListener('touchmove',e,false);
document.getElementById("page9").addEventListener('touchmove',e,false);

function e(event){
  event.preventDefault();
}

var current = 1;
var nxt = pre = 0;
var obj = $(".main");
var l = obj.find(".page").length;
var h = $(document).height();
var w = $(document).width();

/*var audio = document.getElementById("audio3");
var isplay = true;*/

window.onload=function(){
  //隐藏loading
  $("#loading").css("display","none");
  $("#page1").addClass("active");
  //audio.play();
}
/*
$(function(){
	//音乐控制
	$("#playMusic").on("click",function(){
		if(isplay){
		  audio.pause();
		  $("#playMusic").removeClass("musicOn");
		  isplay = false;
		}else{
		  $("#playMusic").addClass("musicOn");
		  audio.play();
		  isplay = true;
		}
	});
});*/



$(function() {
  obj.find(".page").css("height",""+h+"px");
  fen();
  
  //滑动支持
  //obj.on("swipeUp",goDown);
  $("#page1").on("swipeUp",goDown);
  $("#page2").on("swipeUp",goDown);
  $("#page2").on("swipeDown",goUp);
  $("#page3").on("swipeUp",goDown);
  $("#page3").on("swipeDown",goUp);
  $("#page4").on("swipeUp",goDown);
  $("#page4").on("swipeDown",goUp);
  $("#page5").on("swipeUp",goDown);
  $("#page5").on("swipeDown",goUp);
  $("#page6").on("swipeDown",goUp);
  $(".page6-3").on("click",function(){
	 current=8;
	 goDown();
  });
  $(".page6-4").on("click",function(){
	 current=6;
	 goDown();
  });
  $("#page7").on("swipeUp",goDown);
  $("#page7").on("swipeDown",goUp);
  $("#page8").on("swipeDown",goUp);
  $("#page9").on("swipeDown",goUp);
  
  $("#page1").find(".back").on('click',function(index, element) {
          goBack(1);
   });
  $("#page2").find(".back").on('click',function(index, element) {
          goBack(1); 
   });
  $("#page3").find(".back").on('click',function(index, element) {
          goBack(1); 
   });
  $("#page4").find(".back").on('click',function(index, element) {
          goBack(1); 
   });
  $("#page5").find(".back").on('click',function(index, element) {
          goBack(1); 
   });
  $("#page6").find(".back").on('click',function(index, element) {
          goBack(1); 
   });

  
  $("#page7").find(".back").on('click',function(index, element) {
          goBack(6); 
   });
  $("#page8").find(".back").on('click',function(index, element) {
          goBack(6); 
   });
  $("#page9").find(".back").on('click',function(index, element) {
          goBack(6); 
   });
   
  //外链
  $(".page9-3").on("click",function(){window.location.href="http://www.hkbea.com.cn";});
  
});


function goDown(){
   //显示处理下一页
   nxt = (current+1)>l?1:(current+1);
   if(nxt==1){$("#page"+nxt+"").css("z-index","8");}//最后一页上滑时置第一页的图层顺序为8
   $("#page"+nxt+"").css("display","block").addClass("active");
   
   if(current==8){
     //上滑第6页
     $("#page"+(current-2)+"").addClass("slideOutUp");
	 setTimeout(function(){
		$("#page6").css("display","none");
		$("#page6").removeClass("active slideOutUp slideInDown");
	 },1200);
   }else{
     //上滑本页
     $("#page"+current+"").addClass("slideOutUp");
   }
   //延时恢复上一页为初始状态
   setTimeout(function(){
	   pre = (current-1)>0?(current-1):l;
	   if(pre==l){$("#page"+pre+"").css("z-index","11");}
	   $("#page"+pre+"").css("display","none");
   },1200);
   
   setTimeout(function(){$("#page"+pre+"").removeClass("active slideOutUp slideInDown");},1200);
   
   current=nxt;

}

function goUp(){
   //显示并下滑上一页
   nxt = (current-1)>0?(current-1):l;
   console.log(current);
   if(current==9){
	   nxt = 6;
	   $("#page"+nxt+"").css("display","block").addClass("active slideInDown");
	   //延时恢复当前页为初始状态
	   setTimeout(function(){
		   $("#page9").css("display","none");
		   $("#page9").removeClass("active slideInDown slideOutUp");
		   $("#page6").removeClass("slideInDown");
	   },1200);
   }else{
	 if(nxt==l){$("#page"+nxt+"").css("z-index","21");}
	 $("#page"+nxt+"").css("display","block").addClass("active slideInDown");
	 
	 //延时恢复当前页为初始状态
	 setTimeout(function(){
		 pre = (current+1)>l?1:(current+1);
		 if(pre==1){$("#page"+pre+"").css("z-index","20");}
		 $("#page"+pre+"").css("display","none");
		 $("#page"+pre+"").removeClass("active slideInDown slideOutUp");
		 $("#page"+nxt+"").removeClass("slideInDown");
	 },1200);
   }
   current=nxt;
   
}

 function fen(){
	   	//微信JS
	var title = "公益对对碰";  //标题
	var desc = "公益梦想 一触即发";  //描述
	var img = "http://www.canevent.com/images/dongya_logo.png";    //图标
    sign(title,desc,img);  //实现类
	   
   }

function goBack($i){
   for(var $n=1;$n<=l;$n++){
	  if($n==$i){
		current = $i;
	    $("#page"+$n+"").css("display","block");
		$("#page"+$n+"").removeClass("slideOutUp").addClass("active");
	  }else{
	    $("#page"+$n+"").css("display","none");
		$("#page"+$n+"").removeClass("active");
	  }
   }
}
