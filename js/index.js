
// 轮播设置
var pics = new Array(3);
pics[0] = "./img/lunbo1.jpg";
pics[1] = "./img/lunbo2.jpg";
pics[2] = "./img/lunbo3.jpg";
pics[3] = "./img/lunbo4.jpg";
var timer1,time2;
var index = 0;

function showpic() {
	document.getElementById("pic").src = pics[index];
	document.getElementsByTagName('li')[index].style="color:#fffff";
	if (index < (pics.length - 1))
		{index++;
		document.getElementsByTagName('li')[index].style="color:#ff1654";
	}
	else
		index = (index + 1) % pics.length;
	timer1 = setTimeout("showpic()", 3000);
}

// 获取倒计时-时间
var hour=4;
var minutes=28;
var seconds=59;
function showTime(){
	if(seconds>=0){
		seconds--;
		if(seconds==0){
			minutes--;
			seconds=59;
		}
	}
	if(minutes==-1)
	{
		minutes=59;
		hour--;
	}
	document.getElementById("hour").innerHTML=hour<10?'0'+hour:hour;
	document.getElementById("minute").innerHTML=minutes<10?'0'+minutes:minutes;
	document.getElementById("second").innerHTML=seconds<10?'0'+seconds:seconds;
	time2=setTimeout('showTime()',1000);
}
// 页面加载执行这两个函数
window.onload = function(){
	showpic();
	showTime();
}


// 点击[热门小说]的第一本书进行跳转
function checkinfo(){
	window.location.href="book.html";
}
//弹窗提示1:请尊重劳动成果!!!
function tip(){
	alert("功能开发中...........\n请尊重劳动成果!^_^!");
}
// ajax请求JSOn数据
$(function(){
	        $.ajax({
	            url:'./js/books.json',//json文件位置
	            type:'get',
	            dataType:'json',
				//获取成功后执行的事情:读取数据,再渲染数据
	            success:function (data) {
	                // console.log(data);测试
	                var theList1 ='';
					var theList2='';
					var theList3='';
					var theList4='';
					var theList5='';
					var theList6='';
					var theList7='';
	                info1 = data.remenxiaoshuo;
					info2=data.mianfei;
					info3=data.paihangbang;
					info4=data.newbook;
					info5=data.outbook;
					info6=data.xuanhuanqihuan;
					info7=data.lishijunshi;
					// 渲染1区
	                for (var i=0;i<info1.length;i++){
	                   theList1+='<div onclick=\"checkinfo()\" class=\"box1\">';
	                   theList1+='<div class=\"bookimg\">';
	                   theList1+="<img src=\""+info1[i].bookpic+"\" class=\"img-responsive\">";	
	                   theList1+= '</div>'
	                   theList1+='<p class=\"bookname\">'+info1[i].bookname+'</p>';
	                   theList1+='<p class=\"author\">'+info1[i].author+'</p>';
						theList1+='</div>';
	                } 
					$('#box1').append(theList1);
					// 渲染2区
					for (var i=0;i<info2.length;i++){
					   theList2+='<div  class=\"box1\">';
					   theList2+='<div class=\"bookimg\">';
					   theList2+="<img src=\""+info2[i].bookpic+"\" class=\"img-responsive\">";	
					   theList2+= '</div>'
					   theList2+='<p class=\"bookname\">'+info2[i].bookname+'</p>';
					   theList2+='<p class=\"author\">'+info2[i].author+'</p>';
						theList2+='</div>';
					} 
					$('#box2').append(theList2);
					// 渲染3区
					for (var i=0;i<info3.length;i++){
					   theList3+='<div  class=\"box1\">';
					   theList3+='<div class=\"bookimg\">';
					   theList3+="<img src=\""+info3[i].bookpic+"\" class=\"img-responsive\">";	
					   theList3+= '</div>'
					   theList3+='<p class=\"bookname\">'+info3[i].bookname+'</p>';
					   theList3+='<p class=\"author\">'+info3[i].author+'</p>';
					theList3+='</div>';
					} 
					$('#box3').append(theList3);
					// 渲染4区
					for (let i=0;i<info4.length;i++){
					theList4+="<div class=\"newbookbox\">";
					theList4+="<!-- pic -->";
					theList4+="<div class=\"left-pic\">"
					theList4+="<img src=\""+info4[i].bookpic+"\" width=\"100%\"height=\"100%\">";
					theList4+="</div>";
					theList4+="	<!-- 标题 -->";
					theList4+="	<div class=\"booktitle\">";
					theList4+="<p>"+info4[i].bookname+"</p>";
					theList4+=	"</div>";
					theList4+=	"<!-- 内容 -->";
					theList4+="	<div class=\"neirong\">";
					theList4+="<p>"+info4[i].booktext+"</p>";
					theList4+="</div>";
					theList4+=	"<!-- 图标 -->";
					theList4+=	"<div class=\"b-icon\">";
					theList4+=	"<span class=\"pull-left glyphicon glyphicon-user\">"+info4[i].author+"</span>";
					theList4+=	"<a>"+info4[i].textnum+"</a>";
					theList4+=	"<a>"+info4[i].sellstuta+"</a>";
					theList4+="<a>"+info4[i].booktype+"</a>";
					theList4+="</div></div>";
					}
					$('#box4').append(theList4);
					// 渲染5区
					for (let i=0;i<info5.length;i++){
					theList5+="<div class=\"newbookbox\">";
					theList5+="<!-- pic -->";
					theList5+="<div class=\"left-pic\">"
					theList5+="<img src=\""+info5[i].bookpic+"\" width=\"100%\"height=\"100%\">";
					theList5+="</div>";
					theList5+="	<!-- 标题 -->";
					theList5+="	<div class=\"booktitle\">";
					theList5+="<p>"+info5[i].bookname+"</p>";
					theList5+=	"</div>";
					theList5+=	"<!-- 内容 -->";
					theList5+="	<div class=\"neirong\">";
					theList5+="<p>"+info5[i].booktext+"</p>";
					theList5+="</div>";
					theList5+=	"<!-- 图标 -->";
					theList5+=	"<div class=\"b-icon\">";
					theList5+=	"<span class=\"pull-left glyphicon glyphicon-user\">"+info5[i].author+"</span>";
					theList5+=	"<a>"+info5[i].textnum+"</a>";
					theList5+=	"<a>"+info5[i].sellstuta+"</a>";
					theList5+="<a>"+info5[i].booktype+"</a>";
					theList5+="</div></div>";
					}
					$('#box5').append(theList5);
					// 渲染6区
					for (var i=0;i<info6.length;i++){
					   theList6+='<div  class=\"box1\">';
					   theList6+='<div class=\"bookimg\">';
					   theList6+="<img src=\""+info6[i].bookpic+"\" class=\"img-responsive\">";	
					   theList6+= '</div>'
					   theList6+='<p class=\"bookname\">'+info6[i].bookname+'</p>';
					   theList6+='<p class=\"author\">'+info6[i].author+'</p>';
					   theList6+='</div>';
					} 
					$('#box6').append(theList6);
					// 渲染7区
					for (var i=0;i<info7.length;i++){
					   theList7+='<div  class=\"box1\">';
					   theList7+='<div class=\"bookimg\">';
					   theList7+="<img src=\""+info7[i].bookpic+"\" class=\"img-responsive\">";	
					   theList7+= '</div>'
					   theList7+='<p class=\"bookname\">'+info7[i].bookname+'</p>';
					   theList7+='<p class=\"author\">'+info7[i].author+'</p>';
					   theList7+='</div>';
					} 
					$('#box7').append(theList7);
	            },
	            error:function (data) {
	                console.log('出错')
	            }
	 
	        })
	 
	    })