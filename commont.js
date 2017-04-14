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


//浏览器版本是否低于IE8
var lessThenIE8 = function () {
    var UA = navigator.userAgent,
        isIE = UA.indexOf('MSIE') > -1,
        v = isIE ? /\d+/.exec(UA.split(';')[1]) : 'no ie';
    return v < 8;
}();
//使用方法
if(lessThenIE8){
    $('.upgrade').show();
}
