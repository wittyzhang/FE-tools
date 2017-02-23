/*一： 用JS获取地址栏参数的方法*/
/*采用正则表达式获取地址栏参数*/
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}
 
// 调用方法 注意：当参数为空是 结果为null
alert(GetQueryString("参数名1") && GetQueryString("参数名1"));
alert(GetQueryString("参数名2"));
alert(GetQueryString("参数名3"));