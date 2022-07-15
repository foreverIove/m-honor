var btn1=document.querySelector(".show");
var text=document.querySelector(".show>div");
var box1=document.querySelector(".box1")
var show=false;
btn1.onclick=function(){
  
    show=!show
    if(show==false){
        box1.style.height="33%"
        console.log(12)
        text.innerHTML="展开"

    }else{
        box1.style.height="100%"
        text.innerHTML="收起"
    }
    console.log(show)
}