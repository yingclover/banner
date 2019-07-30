function slideBegin() {
    var box=document.getElementById("box");
    var boxUl=box.children[1];
    var boxLi=boxUl.children;
    var pre=box.children[0];
    var next=box.children[2];
    var circleLi=box.children[3].querySelectorAll("li");
    var index=0;
    circleLi[index].style.backgroundColor="#fff";
    //点击上一张
    pre.onclick=function () {
        boxLi[index].style.display="none";
        circleLi[index].style.backgroundColor="#002";
        if(index===0){
            boxLi[4].style.display="block";
            circleLi[4].style.backgroundColor="#fff";
            index=4;
        }else{
            boxLi[--index].style.display="block";
            circleLi[index].style.backgroundColor="#fff";
        }
    }
    //点击下一张
    next.onclick=function () {
        boxLi[index].style.display="none";
        circleLi[index].style.backgroundColor="#002";
        if(index===4){
            boxLi[0].style.display="block";
            circleLi[0].style.backgroundColor="#fff";
            index=0;
        }else{
            boxLi[++index].style.display="block";
            circleLi[index].style.backgroundColor="#fff";
        }
    }

    var  timer=null;
    //自动轮播
    function autoPlay() {
        timer=setInterval(function () {
            next.onclick();
        },2000);
    }
    autoPlay();
    //鼠标进入/出去，中断/开始定时器
    box.onmouseenter=function () {
        clearInterval(timer);
    }
    box.onmouseleave=function () {
        autoPlay();
    }

    //点击小圆点切换到对应图片
    for(var i=0;i<5;i++){
        circleLi[i].onclick=(function (num) {
           return function () {
               index=num;
               boxLi[num].style.display="block";
               circleLi[num].style.backgroundColor="#fff";
               for(var j=0;j<5;j++){
                   if(j!==num){
                       boxLi[j].style.display="none";
                       circleLi[j].style.backgroundColor="#002";
                   }
           }
        }})(i)
    }
}
