window.onload= function(){
var btndia1= document.getElementById("btndia-1");
var btndia2= document.getElementById("btndia-2");
var btndia3= document.getElementById("btndia-3");
var btndia4= document.getElementById("btndia-4");
var btndia5= document.getElementById("btndia-5");

btndia2.addEventListener("click", event=>{
    document.getElementById("dia-2").style.display="initial";
    document.getElementById("dia-1").style.display="none";
});
}